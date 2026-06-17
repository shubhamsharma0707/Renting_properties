## 2024-05-18 - Slider Rendering Bottleneck in MapView
**Learning:** Tying synchronous DOM node recreation (cards) and heavy library updates (Leaflet markers) directly to a range slider's `input` event causes severe main thread blocking and a janky UI experience.
**Action:** Always decouple immediate visual feedback (e.g., slider gradient, label value) from heavy list/map rendering when handling high-frequency events like `input`. Use `debounce` for the heavy work.
