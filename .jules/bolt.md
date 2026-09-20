## 2024-10-04 - Debounce heavy UI operations on high frequency events
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like gradient changes) synchronous.
**Action:** When working with Leaflet maps or other heavy DOM updates, always debounce updates triggered by continuous user inputs like sliders.
