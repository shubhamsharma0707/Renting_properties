
## 2024-11-07 - [Debounce Map Regeneration on Slider Input]
**Learning:** Destroying and recreating complex Leaflet DOM markers on every step of an HTML slider drag blocks the main thread and ruins UI responsiveness.
**Action:** Always decouple immediate UI state updates (like label changes) from heavy rendering operations (like map/card regeneration) during continuous inputs by debouncing the expensive tasks.
