## 2024-10-25 - [Frontend: Debounce Heavy Map Renders]
**Learning:** Destroying and recreating Leaflet map markers and property cards inside a high-frequency slider `input` event causes severe main thread blocking and jank.
**Action:** When updating a filtering slider, separate the lightweight UI updates (like slider value text and gradient backgrounds), which should stay synchronous, from the heavy data rendering (like map markers), which must be debounced.
