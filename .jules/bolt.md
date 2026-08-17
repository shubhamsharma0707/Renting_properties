## 2024-10-24 - Debouncing Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking when tied to high-frequency events like slider inputs.
**Action:** Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs.
