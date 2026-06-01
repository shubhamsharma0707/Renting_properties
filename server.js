const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS so our frontend index.html can make requests to this server
app.use(cors());
app.use(express.json());

// This is our backend database simulating real market data
const propertyDatabase = [
    { id: 1, locality: "North Campus, Delhi", rent: 12000, type: "PG", height: 10, latOffset: -10, lngOffset: 15 },
    { id: 2, locality: "North Campus, Delhi", rent: 25000, type: "1BHK", height: 20, latOffset: 25, lngOffset: -5 },
    { id: 3, locality: "North Campus, Delhi", rent: 8000, type: "Shared", height: 8, latOffset: -30, lngOffset: -20 },
    { id: 4, locality: "Koramangala, Bangalore", rent: 18000, type: "1RK", height: 15, latOffset: 5, lngOffset: 10 },
    { id: 5, locality: "Koramangala, Bangalore", rent: 32000, type: "2BHK", height: 25, latOffset: -15, lngOffset: 30 },
    { id: 6, locality: "Salt Lake, Kolkata", rent: 9000, type: "PG", height: 12, latOffset: 20, lngOffset: 20 },
    // We will generate more dynamic data in the route to make the map look full
];

// Our main API route
app.get('/api/properties', (req, res) => {
    const requestedLocality = req.query.locality;
    const maxBudget = parseInt(req.query.budget);

    // To make the 3D map look populated without writing hundreds of manual entries,
    // we will dynamically generate 50 structures based on the requested area's base price.
    let basePriceMin = 10000;
    
    if (requestedLocality.includes("Koramangala")) {
        basePriceMin = 15000;
    } else if (requestedLocality.includes("Salt Lake")) {
        basePriceMin = 7000;
    }

    const generatedProperties = [];

    for (let i = 0; i < 50; i++) {
        const randomRent = basePriceMin + Math.floor(Math.random() * 20000);
        
        generatedProperties.push({
            id: 'gen_' + i,
            locality: requestedLocality,
            rent: randomRent,
            // Random positions for the 3D grid
            latOffset: (Math.random() - 0.5) * 120,
            lngOffset: (Math.random() - 0.5) * 120,
            // Height corresponds roughly to the price
            structuralHeight: Math.random() * 20 + 5 
        });
    }

    // Filter the properties based on the user's budget from the frontend
    const affordableProperties = generatedProperties.filter(property => {
        return property.rent <= maxBudget;
    });

    // Send the data back to the frontend in JSON format
    res.json({
        totalFound: affordableProperties.length,
        properties: generatedProperties // We send all, so the frontend can draw them and grey out the expensive ones
    });
});

// Start the server
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});