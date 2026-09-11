## 2024-05-24 - Debouncing Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like gradient changes) synchronous.
**Action:** Always debounce expensive DOM operations (like map rendering or marker recreation) that are tied to high-frequency events (like range slider inputs) in MapView.
