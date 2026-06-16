## 2024-05-17 - [Debounce Slider Inputs for Heavy Re-renders]
**Learning:** Coupling heavy map and DOM re-renders (like Leaflet marker destruction/creation and full list re-rendering) to raw `input` events on range sliders tanks the frame rate and creates noticeable UI lag.
**Action:** Always wrap heavy re-render functions in a `debounce` when binding to high-frequency events like slider `input` or window `scroll`/`resize`, while keeping lightweight state updates (like labels and gradients) synchronous.
