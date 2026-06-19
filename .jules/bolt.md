## 2024-06-19 - Leaflet Marker Rendering Bottleneck
**Learning:** Destroying and recreating Leaflet map markers is computationally expensive. When tied to high-frequency events like slider inputs without debouncing, it can cause severe main thread blocking and janky UI updates.
**Action:** Always debounce heavy DOM/map rendering functions (like `refreshCards` or marker updates) when they are triggered by high-frequency events like `input` or `mousemove`.
