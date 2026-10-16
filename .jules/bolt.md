## 2023-10-24 - Debouncing DOM rendering on fast inputs
**Learning:** In a vanilla JS/Leaflet application, recreating large amounts of map markers inside a synchronous event listener tied to a slider `input` event causes severe main-thread blocking and visual lag.
**Action:** When working with high-frequency UI inputs (like range sliders or rapid text entry) that trigger heavy DOM or canvas updates, split the logic: update lightweight UI (like text labels and gradients) synchronously for a responsive feel, and debounce the expensive operations.
