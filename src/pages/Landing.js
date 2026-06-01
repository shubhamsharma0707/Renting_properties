import * as THREE from 'three';
import { formatINR } from '../utils/api.js';

export class Landing {
  constructor(container, navigate) {
    this.container = container;
    this.navigate = navigate;
    this.animFrameId = null;
    this.scene = null;
    this.renderer = null;
    this.clock = new THREE.Clock();
    this.budget = 20000;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="landing-page">
        <canvas id="hero-canvas"></canvas>

        <div class="hero-overlay">
          <div class="hero-badge">
            <span class="glow-dot"></span>
            Real-Time Rental Data · 3D Maps · AI Insights
          </div>

          <h1 class="hero-title">
            Find Your<br/>
            <span>Perfect Home</span><br/>
            Nearby
          </h1>

          <p class="hero-subtitle">
            Search apartments, flats, PGs and houses with live rental prices,
            interactive 3D maps, and smart budget analysis.
          </p>

          <div class="glass search-form">
            <div class="form-row">
              <div class="input-group">
                <label class="input-label" for="location-input">📍 Location / Locality</label>
                <input
                  id="location-input"
                  class="input-field"
                  type="text"
                  placeholder="e.g. Koramangala, Bangalore"
                  value="Koramangala, Bangalore"
                  autocomplete="off"
                />
              </div>

              <div class="input-group">
                <label class="input-label">🏠 Property Type</label>
                <div class="chip-group" id="type-chips">
                  <button class="chip active" data-value="all">All</button>
                  <button class="chip" data-value="flat">Flat</button>
                  <button class="chip" data-value="house">House</button>
                  <button class="chip" data-value="pg">PG</button>
                  <button class="chip" data-value="studio">Studio</button>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="input-group">
                <label class="input-label">💰 Monthly Budget</label>
                <div class="budget-display" id="budget-display">${formatINR(this.budget)} / mo</div>
                <div class="budget-slider-row">
                  <span class="budget-label">₹5K</span>
                  <input
                    type="range"
                    class="slider"
                    id="budget-slider"
                    min="5000"
                    max="150000"
                    step="1000"
                    value="${this.budget}"
                  />
                  <span class="budget-label">₹1.5L</span>
                </div>
              </div>

              <div class="input-group">
                <label class="input-label">🛏️ BHK Configuration</label>
                <div class="chip-group" id="bhk-chips">
                  <button class="chip active" data-value="all">Any</button>
                  <button class="chip" data-value="1">1 BHK</button>
                  <button class="chip" data-value="2">2 BHK</button>
                  <button class="chip" data-value="3">3 BHK+</button>
                </div>
              </div>
            </div>

            <div class="form-divider"></div>

            <div class="form-submit-row">
              <button class="btn btn-primary" id="search-btn" style="font-size:1rem;padding:14px 36px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                Search Properties
              </button>
              <span style="color:var(--text-muted);font-size:0.78rem;">Real-time data · Updated now</span>
            </div>
          </div>

          <div style="display:flex;gap:32px;margin-top:28px;animation:fadeSlideUp 0.8s 0.5s ease both;">
            <div style="text-align:center;">
              <div style="font-family:var(--font-display);font-size:1.4rem;font-weight:800;color:var(--accent);">50K+</div>
              <div style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;">Listings</div>
            </div>
            <div style="text-align:center;">
              <div style="font-family:var(--font-display);font-size:1.4rem;font-weight:800;color:var(--violet);">30+</div>
              <div style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;">Cities</div>
            </div>
            <div style="text-align:center;">
              <div style="font-family:var(--font-display);font-size:1.4rem;font-weight:800;color:var(--green);">Live</div>
              <div style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;">Pricing</div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.initThreeJS();
    this.bindEvents();
  }

  bindEvents() {
    // Budget slider
    const slider = document.getElementById('budget-slider');
    const display = document.getElementById('budget-display');
    slider?.addEventListener('input', (e) => {
      this.budget = parseInt(e.target.value);
      display.textContent = `${formatINR(this.budget)} / mo`;
      this.updateSliderGradient(slider);
    });
    this.updateSliderGradient(slider);

    // Type chips
    document.getElementById('type-chips')?.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      document.querySelectorAll('#type-chips .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });

    // BHK chips
    document.getElementById('bhk-chips')?.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      document.querySelectorAll('#bhk-chips .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });

    // Search button
    const searchBtn = document.getElementById('search-btn');
    searchBtn?.addEventListener('click', () => this.handleSearch());

    // Enter key
    document.getElementById('location-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.handleSearch();
    });
  }

  handleSearch() {
    const location = document.getElementById('location-input')?.value?.trim();
    if (!location) {
      document.getElementById('location-input')?.focus();
      return;
    }

    const type = document.querySelector('#type-chips .chip.active')?.dataset.value || 'all';
    const bhk  = document.querySelector('#bhk-chips .chip.active')?.dataset.value  || 'all';

    // Button loading state
    const btn = document.getElementById('search-btn');
    btn.disabled = true;
    btn.innerHTML = `<div class="spinner" style="width:18px;height:18px;border-width:2px;"></div> Searching...`;

    this.navigate('map', { location, budget: this.budget, type, bhk });
  }

  updateSliderGradient(slider) {
    if (!slider) return;
    const min = +slider.min, max = +slider.max, val = +slider.value;
    const pct = ((val - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(90deg, var(--accent) ${pct}%, var(--border) ${pct}%)`;
  }

  // ── Three.js City Scene ───────────────────────────────────────────────────

  initThreeJS() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    this.renderer.setClearColor(0x07090f, 1);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x07090f, 0.025);

    // Camera
    this.camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
    this.camera.position.set(0, 18, 38);
    this.camera.lookAt(0, 4, 0);

    // Build scene
    this.addStars();
    this.addCity();
    this.addLights();
    this.addGround();
    this.addFloatingParticles();

    // Start animation loop
    this.animate();

    // Resize
    this.resizeHandler = () => this.onResize();
    window.addEventListener('resize', this.resizeHandler);
  }

  addStars() {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 300;
      positions[i * 3 + 1] = Math.random() * 120 + 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 300;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.18,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
    });
    this.stars = new THREE.Points(geo, mat);
    this.scene.add(this.stars);
  }

  addCity() {
    this.buildings = new THREE.Group();

    const buildingConfigs = [
      // center cluster
      { x: 0,  z: 0,  w: 2,  d: 2,  h: 16, accent: true },
      { x: -3, z: -1, w: 1.5,d: 1.5,h: 12, accent: false },
      { x: 3,  z: 1,  w: 1.8,d: 1.8,h: 14, accent: true },
      { x: -5, z: 2,  w: 1.2,d: 1.2,h: 8,  accent: false },
      { x: 5,  z: -2, w: 2,  d: 1.5,h: 18, accent: true },
      { x: 7,  z: 2,  w: 1.5,d: 1.5,h: 10, accent: false },
      { x: -7, z: -1, w: 1.8,d: 1.8,h: 15, accent: true },
      { x: 9,  z: -1, w: 1.2,d: 1.2,h: 7,  accent: false },
      { x: -9, z: 3,  w: 1.2,d: 1.2,h: 9,  accent: false },
      // mid ring
      { x: 2,  z: -8, w: 1.5,d: 1.5,h: 11, accent: false },
      { x: -4, z: 8,  w: 1.5,d: 1.5,h: 9,  accent: true },
      { x: 8,  z: 6,  w: 1.2,d: 1.2,h: 7,  accent: false },
      { x: -8, z: -6, w: 2,  d: 1.5,h: 13, accent: true },
      { x: 12, z: 0,  w: 1,  d: 1,  h: 6,  accent: false },
      { x: -12,z: 2,  w: 1,  d: 1,  h: 5,  accent: false },
      { x: 0,  z: 10, w: 1.5,d: 1.5,h: 8,  accent: false },
      { x: 6,  z: -8, w: 1,  d: 1,  h: 6,  accent: true },
      { x: -6, z: -10,w: 1.2,d: 1.2,h: 7,  accent: false },
      // outer
      { x: 14, z: 4,  w: 0.8,d: 0.8,h: 4,  accent: false },
      { x: -14,z: -4, w: 0.8,d: 0.8,h: 4,  accent: false },
      { x: 10, z: -10,w: 1,  d: 1,  h: 5,  accent: false },
      { x: -10,z: 10, w: 1,  d: 1,  h: 5,  accent: true },
    ];

    for (const cfg of buildingConfigs) {
      // Main building body
      const geo = new THREE.BoxGeometry(cfg.w, cfg.h, cfg.d);
      const mat = new THREE.MeshStandardMaterial({
        color: cfg.accent ? 0x0d2233 : 0x0a1520,
        emissive: cfg.accent ? 0x001122 : 0x000811,
        emissiveIntensity: 0.3,
        roughness: 0.8,
        metalness: 0.2,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(cfg.x, cfg.h / 2, cfg.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.buildings.add(mesh);

      // Glowing top accent
      if (cfg.accent) {
        const topGeo = new THREE.BoxGeometry(cfg.w * 0.6, 0.15, cfg.d * 0.6);
        const topMat = new THREE.MeshStandardMaterial({
          color: 0x00d4ff,
          emissive: 0x00d4ff,
          emissiveIntensity: 2.5,
        });
        const top = new THREE.Mesh(topGeo, topMat);
        top.position.set(cfg.x, cfg.h + 0.08, cfg.z);
        this.buildings.add(top);

        // Point light at top
        const light = new THREE.PointLight(0x00d4ff, 0.8, 6);
        light.position.set(cfg.x, cfg.h + 0.5, cfg.z);
        this.buildings.add(light);
      }

      // Window grid
      this.addWindows(cfg);
    }

    this.scene.add(this.buildings);
  }

  addWindows(cfg) {
    const rows = Math.floor(cfg.h / 1.2);
    const cols = Math.max(2, Math.floor(cfg.w / 0.7));
    const winW = 0.18, winH = 0.22;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (Math.random() > 0.65) continue; // Some windows lit up

        const on = Math.random() > 0.25;
        const color = Math.random() > 0.5 ? 0xffd080 : 0x88ddff;

        const geo = new THREE.PlaneGeometry(winW, winH);
        const mat = new THREE.MeshStandardMaterial({
          color: on ? color : 0x0d1929,
          emissive: on ? color : 0x000000,
          emissiveIntensity: on ? 0.9 : 0,
          transparent: true,
          opacity: on ? 1 : 0.3,
        });

        // Front face
        const win = new THREE.Mesh(geo, mat);
        const xOff = (col / (cols - 1) - 0.5) * (cfg.w * 0.7);
        const yOff = 0.8 + row * 1.1;
        win.position.set(cfg.x + xOff, yOff, cfg.z + cfg.d / 2 + 0.01);
        this.buildings.add(win);
      }
    }
  }

  addGround() {
    // Ground grid
    const gridHelper = new THREE.GridHelper(80, 40, 0x0d2233, 0x0a1520);
    gridHelper.position.y = 0;
    this.scene.add(gridHelper);

    // Ground plane
    const geo = new THREE.PlaneGeometry(200, 200);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x070b12,
      roughness: 1,
      metalness: 0,
    });
    const plane = new THREE.Mesh(geo, mat);
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    this.scene.add(plane);
  }

  addLights() {
    // Ambient
    const ambient = new THREE.AmbientLight(0x0a1929, 1.5);
    this.scene.add(ambient);

    // Directional
    const dir = new THREE.DirectionalLight(0x2244aa, 0.8);
    dir.position.set(-10, 20, 10);
    this.scene.add(dir);

    // Accent fill — teal
    const teal = new THREE.PointLight(0x00d4ff, 1.2, 40);
    teal.position.set(5, 20, -10);
    this.scene.add(teal);

    // Accent fill — violet
    const violet = new THREE.PointLight(0x8b5cf6, 0.8, 35);
    violet.position.set(-8, 15, 5);
    this.scene.add(violet);
  }

  addFloatingParticles() {
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = Math.random() * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.08,
      transparent: true,
      opacity: 0.5,
    });
    this.particles = new THREE.Points(geo, mat);
    this.scene.add(this.particles);
  }

  animate() {
    this.animFrameId = requestAnimationFrame(() => this.animate());
    const t = this.clock.getElapsedTime();

    // Slowly orbit camera
    const orbitRadius = 38;
    const orbitSpeed = 0.05;
    this.camera.position.x = Math.sin(t * orbitSpeed) * orbitRadius * 0.3;
    this.camera.position.z = Math.cos(t * orbitSpeed) * orbitRadius;
    this.camera.position.y = 18 + Math.sin(t * 0.08) * 2;
    this.camera.lookAt(0, 4, 0);

    // Rotate stars slowly
    if (this.stars) this.stars.rotation.y = t * 0.01;

    // Drift particles
    if (this.particles) {
      this.particles.rotation.y = t * 0.02;
      this.particles.position.y = Math.sin(t * 0.3) * 0.5;
    }

    this.renderer.render(this.scene, this.camera);
  }

  onResize() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas || !this.renderer || !this.camera) return;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  destroy() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    window.removeEventListener('resize', this.resizeHandler);
    this.renderer?.dispose();
    this.scene?.clear();
  }
}
