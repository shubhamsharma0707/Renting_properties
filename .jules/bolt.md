## 2026-08-31 - Debouncing Leaflet Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking on high-frequency UI events.
**Action:** Heavy map rendering functions tied to slider inputs or similar frequent events should be debounced.
