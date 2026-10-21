## 2024-10-21 - Debouncing Leaflet Marker Recreation
**Learning:** Destroying and recreating Leaflet map markers and property DOM nodes is computationally expensive and can block the main thread.
**Action:** When tied to high-frequency events like slider inputs, heavy map rendering functions should be debounced while keeping lightweight UI updates (like gradient changes) synchronous.
