## 2024-07-25 - Debouncing map marker recreation on slider inputs
**Learning:** Destroying and recreating Leaflet map markers in this project is computationally expensive and can cause main thread blocking. Heavy map rendering functions should be debounced when tied to high-frequency events like slider inputs.
**Action:** Always wrap heavy DOM or Map updates in a debounce function (e.g. from utils) when they are triggered by high-frequency input events like ranges.
