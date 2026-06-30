## 2024-06-30 - [Leaflet Marker Optimization]
**Learning:** Destroying and recreating Leaflet map markers continuously during high-frequency events (like slider drag) is computationally expensive and causes main thread blocking in this project.
**Action:** Always apply debouncing to heavy map rendering functions tied to continuous UI events.
