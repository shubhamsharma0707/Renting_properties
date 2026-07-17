## 2024-07-17 - Debounce Map Marker Re-rendering
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking, particularly when tied to high-frequency events like slider inputs.
**Action:** Always debounce heavy map rendering functions (like `refreshCards`) when they are bound to fast-firing UI events like `input` on range sliders.
