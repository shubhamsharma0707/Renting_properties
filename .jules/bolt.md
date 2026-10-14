## 2024-10-24 - Debouncing heavy map rendering
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like gradient changes) synchronous.
**Action:** When working with map libraries, separate fast UI updates from heavy data/marker rendering and debounce the latter.
