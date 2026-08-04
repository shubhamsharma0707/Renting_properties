## 2024-05-27 - [Debounce Slider Events]
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs.
**Action:** Always debounce computationally expensive DOM/map rendering operations tied to high-frequency inputs like range sliders.
