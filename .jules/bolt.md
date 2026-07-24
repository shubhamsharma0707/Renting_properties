## 2024-12-05 - Map Marker Render Bottleneck
**Learning:** High-frequency events (like a slider `input` event) that trigger expensive operations (destroying and recreating Leaflet markers and complex UI components) block the main thread and severely degrade performance.
**Action:** Always wrap heavy DOM or Map-related rendering logic in a `debounce` function (e.g., 150ms) when tied to continuous user input events like range sliders.
