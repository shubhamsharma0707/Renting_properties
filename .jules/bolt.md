## 2024-10-27 - Debounce Map Renders
**Learning:** Leaflet marker destruction and recreation is computationally heavy. Tying this directly to a range slider's 'input' event (which fires continuously on drag) blocks the main thread and causes UI jank in this architecture.
**Action:** Always debounce heavy DOM/canvas/map manipulations tied to high-frequency events (like slider 'input' or window 'scroll'), while keeping lightweight style updates (like slider gradients) synchronous.
