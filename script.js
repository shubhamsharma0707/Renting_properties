// Global variables for Three.js setup
let scene, camera, renderer;
let buildings = []; // Array to store current building meshes and data

// DOM Elements from index.html
const budgetSlider = document.getElementById('budgetSlider');
const budgetValueDisplay = document.getElementById('budgetValue');
const scanButton = document.getElementById('scanButton');
const localityInput = document.getElementById('localityInput');
const matchCountDisplay = document.getElementById('matchCount');
const avgRentDisplay = document.getElementById('avgRentDisplay');
const container = document.getElementById('mapCanvasContainer');

// Entry point of our application
function init() {
    setupThreeJS();
    // Fetch initial data when the page loads
    fetchPropertiesFromBackend();
    
    // Set up event listeners for user interaction
    budgetSlider.addEventListener('input', handleBudgetChange);
    scanButton.addEventListener('click', handleMapScan);
    window.addEventListener('resize', handleWindowResize);
    
    // Start the continuous rendering loop
    animate();
}

// Sets up the 3D viewport canvas
function setupThreeJS() {
    // Create a new 3D scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05070a); // Matching our dark mode theme
    
    // Add atmospheric fog to give a sense of distance
    scene.fog = new THREE.FogExp2(0x05070a, 0.015);

    // Set up the perspective camera
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(0, 50, 70);
    camera.lookAt(0, 0, 0);

    // Create the WebGL renderer and append it to our HTML container
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Add ambient lighting to illuminate the faces of the buildings softly
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Add a stronger directional light to cast depth and highlights from above
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(20, 100, 50);
    scene.add(directionalLight);

    // Add a grid floor representing the map blocks
    const gridHelper = new THREE.GridHelper(200, 50, 0x262c36, 0x161a22);
    gridHelper.position.y = -0.5;
    scene.add(gridHelper);
}

// Asynchronous function to pull real-time data from our Node.js server
async function fetchPropertiesFromBackend() {
    const currentLocality = localityInput.value;
    const currentMaxBudget = budgetSlider.value;

    // Show a loading status while waiting for the network response
    matchCountDisplay.textContent = "Loading...";
    
    try {
        // Send a GET request to the local Express API with query parameters
        const url = `http://localhost:3000/api/properties?locality=${encodeURIComponent(currentLocality)}&budget=${currentMaxBudget}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        
        // Pass the backend data array down to the 3D rendering pipeline
        renderBackendDataToMap(data.properties, currentMaxBudget);
        
    } catch (error) {
        console.error("Failed to fetch data from backend:", error);
        matchCountDisplay.textContent = "Server Error";
        avgRentDisplay.textContent = "N/A";
    }
}

// Clears the canvas and builds new 3D geometries based on server data
function renderBackendDataToMap(propertyList, currentMaxBudget) {
    // Step 1: Remove all existing building meshes from the Three.js scene
    buildings.forEach(buildingObj => {
        scene.remove(buildingObj.mesh);
    });
    buildings = []; // Reset the local reference tracking array

    let validMatches = 0;
    let totalRentSum = 0;

    // Step 2: Loop through the raw property items sent from the Node backend
    propertyList.forEach(property => {
        // Create a 3D box geometry where height represents structural scale/price tier
        const geometry = new THREE.BoxGeometry(3, property.structuralHeight, 3);
        
        // Create a standard material that interacts with our scene lighting
        const material = new THREE.MeshStandardMaterial({
            color: 0x58a6ff,
            roughness: 0.4,
            transparent: true,
            opacity: 1.0
        });

        const mesh = new THREE.Mesh(geometry, material);
        
        // Position the block using the layout offsets sent by the backend server
        // We set the Y position to half the height so the base sits perfectly flat on the grid floor
        mesh.position.set(property.latOffset, property.structuralHeight / 2, property.lngOffset);
        scene.add(mesh);

        // Step 3: Run the budget screening check
        if (property.rent <= currentMaxBudget) {
            // Affordable: highlight bright blue and keep fully opaque
            mesh.material.opacity = 1.0;
            mesh.material.color.setHex(0x58a6ff);
            validMatches++;
            totalRentSum += property.rent;
        } else {
            // Out of budget: fade opacity into the background grid lines
            mesh.material.opacity = 0.15;
            mesh.material.color.setHex(0x262c36);
        }

        // Keep a reference to the mesh so we can clear or modify it on the next user action
        buildings.push({
            mesh: mesh,
            rent: property.rent
        });
    });

    // Step 4: Update our dashboard stats panel
    matchCountDisplay.textContent = validMatches;
    
    if (validMatches > 0) {
        const avg = Math.floor(totalRentSum / validMatches);
        avgRentDisplay.textContent = "INR " + avg.toLocaleString('en-IN');
    } else {
        avgRentDisplay.textContent = "N/A";
    }
}

// Fired when the search/scan button is clicked
function handleMapScan() {
    fetchPropertiesFromBackend();
    
    // Add a simple dynamic camera pan effect to mimic map re-centering
    camera.position.x = (Math.random() - 0.5) * 20;
    camera.lookAt(0, 0, 0);
}

// Fired when the user moves the budget range slider
function handleBudgetChange() {
    budgetValueDisplay.textContent = budgetSlider.value;
    fetchPropertiesFromBackend();
}

// Keeps the 3D canvas fluid and correctly scaled if the user adjusts browser sizing
function handleWindowResize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
}

// Continuous frame rendering engine loop
function animate() {
    requestAnimationFrame(animate);
    
    // Slowly rotate the map coordinate workspace to add spatial depth perception
    scene.rotation.y += 0.001;
    
    renderer.render(scene, camera);
}

// Execute initialization once the DOM window context finishes parsing
window.onload = init;