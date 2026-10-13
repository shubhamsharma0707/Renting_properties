## 2023-10-27 - Debouncing Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking when tied to high-frequency events like slider inputs.
**Action:** Debounce heavy map rendering functions tied to continuous events like `input`, while keeping lightweight UI updates (like gradient changes) synchronous.
