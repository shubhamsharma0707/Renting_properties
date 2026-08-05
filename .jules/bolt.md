## 2024-05-24 - Debouncing Leaflet Marker Updates
**Learning:** Destroying and recreating Leaflet map markers on high-frequency events like slider inputs is computationally expensive and causes main thread blocking in this project's architecture.
**Action:** Always wrap heavy DOM/map rendering functions in a `debounce` utility when tied to high-frequency UI events like `input` or `mousemove`, while allowing lightweight UI updates (like labels) to remain synchronous for responsiveness.
