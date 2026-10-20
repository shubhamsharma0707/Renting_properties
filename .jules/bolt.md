## 2024-05-24 - Main Thread Blocking on Slider Inputs
**Learning:** In Leaflet.js apps, destroying and recreating DOM markers synchronously on every `input` event of a range slider causes severe main thread blocking, making the slider feel extremely laggy.
**Action:** Always wrap heavy marker re-rendering operations in a `debounce` function (e.g. 150ms) when tying them to high-frequency events, while keeping lightweight CSS/text updates synchronous to maintain perceived responsiveness.
