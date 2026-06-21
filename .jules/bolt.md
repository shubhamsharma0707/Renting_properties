## 2024-10-24 - Debouncing Map Marker Rendering in Leaflet
**Learning:** In MapView, destroying and recreating Leaflet markers synchronously via `this.map.removeLayer()` and `L.marker()` is computationally expensive. When tied directly to high-frequency UI events like an `input` slider, it severely blocks the main thread, leading to a degraded UI experience.
**Action:** Always wrap heavy synchronous DOM operations, especially map rendering logic, in a `debounce` when triggered by rapid user input (like sliders or real-time search).
