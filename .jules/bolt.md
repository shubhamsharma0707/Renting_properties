## 2024-07-01 - Leaflet Marker Re-rendering Bottleneck
**Learning:** Destroying and recreating Leaflet map markers on every single slider tick causes extreme main thread blocking in this architecture. The DOM operations and Leaflet's internal logic for marker placement are too heavy for high-frequency events.
**Action:** Always wrap heavy UI updates (like map re-renders or complex list filtering) in a `debounce` function when they are triggered by high-frequency inputs like range sliders or scroll events.
