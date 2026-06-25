## 2024-10-24 - [Debounce High-Frequency Map Rendering Events]
**Learning:** Destroying and recreating Leaflet map markers on high-frequency UI events like slider inputs is computationally expensive and causes main thread blocking.
**Action:** Always wrap heavy rendering logic such as Map View updates in a debounce when bound to rapid continuous events like 'input' to avoid thrashing and blocking.
