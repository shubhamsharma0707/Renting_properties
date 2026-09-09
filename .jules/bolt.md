## 2024-09-09 - Debounce Heavy Leaflet Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers on high-frequency events (like slider inputs) causes main thread blocking in this architecture.
**Action:** Always debounce heavy map/DOM operations tied to slider inputs, keeping lightweight visual UI updates (like gradient and labels) synchronous.
