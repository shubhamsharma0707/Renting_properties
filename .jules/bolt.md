## 2026-08-08 - Debounce Leaflet Map Rendering
**Learning:** Re-rendering Leaflet markers on high-frequency events like slider dragging blocks the main thread.
**Action:** Use a debounce utility to batch heavy DOM/Canvas operations tied to user inputs.
