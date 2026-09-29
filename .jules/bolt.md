## 2024-05-24 - Debouncing expensive Leaflet map renders
**Learning:** Destroying and recreating Leaflet map markers on high-frequency events (like slider inputs) is computationally expensive and can cause main thread blocking in this frontend architecture.
**Action:** When tying map rendering updates to slider inputs, always debounce the heavy map manipulation functions while keeping lightweight UI updates (e.g., slider gradient changes) synchronous to preserve responsiveness without sacrificing map performance.
