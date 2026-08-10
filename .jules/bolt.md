## 2024-05-18 - Debouncing heavy Map rendering on high-frequency slider inputs
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking during high-frequency events like slider dragging.
**Action:** Always wrap heavy map rendering functions like `refreshCards` in a `debounce` function when tied to high-frequency events (like range slider `input`).
