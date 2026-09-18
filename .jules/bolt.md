## 2024-05-20 - Map Marker Re-rendering Bottleneck
**Learning:** Destroying and recreating Leaflet map markers on every 'input' event of the budget slider is computationally expensive and causes main thread blocking in this project.
**Action:** Debounce heavy map rendering functions tied to high-frequency events, while keeping lightweight UI updates synchronous.
