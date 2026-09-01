## 2024-09-01 - Debounced Map Re-renders on Slider Input
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs.
**Action:** When implementing or modifying range sliders in the codebase, ensure that expensive DOM or WebGL/Leaflet updates triggered by the `input` event are debounced using the `src/utils/api.js` debounce utility, while keeping lightweight UI updates (like gradient changes) synchronous.
