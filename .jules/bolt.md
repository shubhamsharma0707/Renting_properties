## 2024-09-19 - [Debounce Heavy Map Operations]
**Learning:** [Destroying and recreating Leaflet markers and complex UI components inside MapView repeatedly during slider events triggers excessive DOM thrashing and blocks the main thread in this codebase's architecture.]
**Action:** [Use the built-in debounce utility from `api.js` on high-frequency UI events to delay the heavy DOM manipulation logic while keeping lightweight UI updates (e.g., label changes, CSS class toggles) synchronous to maintain a snappy user experience.]
