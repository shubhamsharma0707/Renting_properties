## 2024-05-24 - [Debounce High-Frequency Map Renders]
**Learning:** Destroying and recreating Leaflet map markers on high-frequency events (like range slider input) is computationally expensive and causes severe main thread blocking.
**Action:** When updating map markers or heavy DOM elements tied to high-frequency events, always decouple the visual UI updates (slider gradient, label text) from the heavy rendering task, and use `debounce` to batch the heavy work.
