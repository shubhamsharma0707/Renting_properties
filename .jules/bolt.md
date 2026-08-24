## 2023-10-24 - Debounce Leaflet marker rendering on slider input
**Learning:** Destroying and recreating Leaflet map markers on every rapid `input` event from a slider causes severe main thread blocking and jank in this architecture.
**Action:** Always debounce heavy DOM/map rendering operations when tied to high-frequency events like slider inputs.
