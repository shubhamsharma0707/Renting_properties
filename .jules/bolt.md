## 2024-05-24 - Debouncing Leaflet Marker Updates
**Learning:** Destroying and recreating Leaflet markers and DOM elements tied to high-frequency events like range sliders severely blocks the main thread, leading to jittery UX. In this codebase, the budget slider immediately called `refreshCards()` on `input`, forcing constant heavy repaints.
**Action:** Always wrap heavy rendering logic (like Map interactions or complex list updates) with a `debounce` when triggered by `input` or `scroll` events, while keeping visual feedback (like slider values/gradients) immediate.
