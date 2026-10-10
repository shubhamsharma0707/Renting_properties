## 2026-10-10 - Debouncing Leaflet Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking.
**Action:** Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like gradient changes) synchronous.
