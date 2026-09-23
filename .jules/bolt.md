## 2024-03-24 - Debounce expensive map marker and DOM rendering
**Learning:** Re-rendering hundreds of DOM elements (property cards) and destroying/creating map markers in Leaflet on every single 'input' event from a range slider causes significant main thread blocking and jank.
**Action:** Separate lightweight synchronous UI updates (like slider gradients and text labels) from heavy operations (like filtering lists and rendering markers). Wrap the heavy operations in a debounce (100-300ms) to ensure smooth slider interaction without sacrificing functionality.
