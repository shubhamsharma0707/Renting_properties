## 2024-11-02 - Debouncing DOM/Map operations on slider events
**Learning:** Destroying and recreating Leaflet map markers on high-frequency `input` events (like slider dragging) causes severe main thread blocking and jank.
**Action:** Always decouple fast UI updates (like labels and gradients) from heavy DOM/canvas updates (like map markers). Keep the UI synchronous, but debounce the heavy rendering logic.
