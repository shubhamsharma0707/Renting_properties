## 2024-05-24 - Debouncing Slider Input
**Learning:** Destroying and recreating Leaflet map markers and updating DOM elements on every slider `input` event causes significant main-thread blocking and UI jank during rapid interaction.
**Action:** Always decouple immediate visual UI updates (like slider gradients and text values) from heavy computational or rendering tasks. Debounce the expensive operations while keeping the lightweight UI updates synchronous for a responsive feel.
