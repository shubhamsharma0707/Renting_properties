## 2024-10-24 - Debouncing Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking when tied to high-frequency events like slider inputs.
**Action:** Always debounce heavy map rendering functions tied to rapid UI interactions while keeping lightweight UI updates (like gradient changes) synchronous.
