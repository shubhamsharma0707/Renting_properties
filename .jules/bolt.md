## 2024-05-24 - [Debounce Leaflet Marker Regeneration]
**Learning:** Destroying and recreating Leaflet map markers on high-frequency events (like slider inputs) is extremely computationally expensive and blocks the main thread.
**Action:** Debounce the heavy rendering function while keeping cheap visual updates (like slider label/gradient) synchronous.
