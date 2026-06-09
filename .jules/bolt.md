## 2026-06-09 - Leaflet Map Re-renders Block Main Thread
**Learning:** In MapView.js, updating Leaflet markers and DOM elements sequentially inside a slider's "input" event causes significant main-thread blocking, leading to jittery slider movement.
**Action:** Always debounce DOM/Leaflet map re-renders on slider "input" events while keeping lightweight UI updates (like text labels) synchronous for immediate responsiveness.
