## 2024-07-05 - Debounce map marker updates for better slider performance
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking.
**Action:** Always debounce heavy map rendering functions (like `refreshCards` which handles markers) when tied to high-frequency events like slider inputs using the available `debounce` utility in `src/utils/api.js`.
