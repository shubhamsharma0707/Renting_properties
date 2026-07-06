## 2024-07-06 - Leaflet Map Marker Rendering Bottleneck
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive. When tied directly to high-frequency synchronous events like range slider 'input' ticks, it severely blocks the main thread and causes UI jank.
**Action:** Always wrap heavy map rendering functions (like `refreshCards` or `renderMarkers`) in a `debounce` utility when they are triggered by continuous user inputs, while keeping the lightweight UI label updates synchronous to maintain responsiveness.
