## 2024-10-24 - Map Marker Rendering Bottleneck
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like gradient changes) synchronous.
**Action:** Use debounce for map updates linked to frequent events like budget slider updates, keeping other UI updates synchronous.
