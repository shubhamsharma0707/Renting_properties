## 2024-10-04 - Debouncing heavy map rendering on slider input
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs, while keeping lightweight UI updates (like gradient changes) synchronous.
**Action:** Always import and use the `debounce` utility from `src/utils/api.js` to wrap expensive re-renders like `refreshCards()` triggered by slider inputs.
