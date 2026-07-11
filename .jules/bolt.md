## 2026-07-11 - [UI Jank with Leaflet Map Markers]
**Learning:** [Destroying and recreating Leaflet DOM markers on high-frequency events (like a slider input) blocks the main thread and causes severe UI jank.]
**Action:** [Always use debouncing for heavy map/DOM updates while keeping lightweight UI state updates immediate to ensure a smooth user experience.]
