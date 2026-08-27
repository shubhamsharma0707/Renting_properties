## 2024-05-24 - Debouncing Map Marker Rendering
**Learning:** Destroying and recreating Leaflet map markers on every 'input' event of a slider causes severe main thread blocking because map rendering functions are computationally expensive.
**Action:** Always debounce heavy DOM/map re-render operations that are tied to high-frequency events like slider dragging.
