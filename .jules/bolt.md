## 2023-10-27 - Debouncing Heavy Map Renders
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking when tied to high-frequency events like slider inputs.
**Action:** Heavy map rendering functions like `this.refreshCards()` should be debounced when triggered by slider inputs.
