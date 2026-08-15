## 2024-08-15 - Debounce map marker re-rendering
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs.
**Action:** Identify where `refreshCards` is called within the slider's input event handler and wrap the `refreshCards` invocation in a debounced function exported from `src/utils/api.js`.
