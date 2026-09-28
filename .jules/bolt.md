## 2024-09-28 - Debounce Map Marker Re-creation
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking, especially when tied to high-frequency events like input range sliders.
**Action:** Debounce heavy map rendering functions like `refreshCards` when they are triggered by frequent DOM events to keep lightweight UI updates smooth and prevent locking up the browser.
