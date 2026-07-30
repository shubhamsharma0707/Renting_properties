## 2024-05-24 - Leaflet Marker Rendering Bottleneck
**Learning:** Destroying and recreating Leaflet map markers on every slider tick is computationally expensive and blocks the main thread.
**Action:** Debounce high-frequency slider events that trigger heavy map rendering.
