## 2024-05-18 - Debounce Map Rendering
**Learning:** Destroying and recreating Leaflet map markers is computationally expensive. Running it synchronously on high-frequency events (like range slider inputs) causes main thread blocking and poor UX.
**Action:** Keep lightweight UI updates (labels, gradients) synchronous, but wrap heavy rendering functions in a debounce when tied to rapid user inputs.
