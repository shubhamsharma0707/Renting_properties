## 2024-10-29 - Debouncing Heavy Map Rendering
**Learning:** Destroying and recreating Leaflet map markers is computationally expensive and can cause main thread blocking during high-frequency events like slider input.
**Action:** Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like gradient changes) synchronous.
