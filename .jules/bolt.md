## 2024-07-03 - [Leaflet Map Markers Performance Bottleneck]
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking during high-frequency events like slider inputs.
**Action:** Always debounce heavy map rendering functions when tied to high-frequency events.
