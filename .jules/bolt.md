## 2026-08-13 - [Performance Improvement] Debounce budget slider
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking on high-frequency events.
**Action:** Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs.
