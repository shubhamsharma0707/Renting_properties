## 2026-07-27 - Debouncing High-Frequency Events Tied to Heavy Renders
**Learning:** In Leaflet + Vanilla JS apps, tying slider inputs directly to marker re-rendering (destroy/create) blocks the main thread heavily.
**Action:** Always debounce heavy DOM/Canvas/Map rendering operations triggered by high-frequency events like 'input' or 'mousemove', while keeping lightweight UI updates (labels, gradients) synchronous for responsiveness.
