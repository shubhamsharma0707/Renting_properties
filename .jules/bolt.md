## 2024-11-08 - [Debounce Heavy Leaflet Renders]
**Learning:** Destroying and recreating Leaflet map markers on high-frequency UI events (like a range slider) blocks the main thread and causes severe jank.
**Action:** Always decouple heavy DOM/Canvas renders from rapid input events using `debounce`, keeping lightweight UI updates (like labels/gradients) synchronous.
