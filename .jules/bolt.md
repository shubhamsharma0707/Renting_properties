## 2026-09-17 - [Debounce Map Rendering]
**Learning:** Destroying and recreating Leaflet map markers on slider inputs blocks the main thread. Heavy rendering functions need debouncing while keeping lightweight UI sync.
**Action:** Always debounce functions tied to high-frequency events when they do heavy DOM manipulation.
