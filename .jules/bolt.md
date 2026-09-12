## 2024-09-12 - Debounce Expensive Map Marker Renders
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like gradient changes) synchronous.
**Action:** Use the debounce utility from api.js for complex UI updates tied to sliders, but update fast DOM elements (like text and styles) immediately.
