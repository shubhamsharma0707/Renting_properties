## 2024-07-18 - Destroying Map Markers Blocks Main Thread
**Learning:** Leaflet marker destruction and recreation is computationally expensive and can block the main thread when tied to high-frequency events like range slider inputs.
**Action:** Always debounce heavy DOM/map rendering functions when triggered by fast-firing events like 'input' on sliders.
