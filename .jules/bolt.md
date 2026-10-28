## 2024-10-28 - Debounce map updates
**Learning:** Rendering markers and updating the DOM blocks the main thread in Leaflet/Three.js apps. Sliders triggering heavy updates on every tick will cause noticeable lag.
**Action:** Always verify if expensive UI operations tied to range inputs or mouse drags can be debounced, while leaving simple UI state (like numbers/gradients) to update synchronously.
