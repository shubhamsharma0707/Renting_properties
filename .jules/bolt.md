## 2024-09-27 - Debounce Heavy Renders on Slider Inputs
**Learning:** In the RentRadar project, updating Leaflet map markers and DOM property cards on every slider `input` event caused unnecessary heavy main-thread work.
**Action:** Always decouple fast UI updates (like slider gradients and text labels) from heavy DOM/Map rendering updates. Use the provided `debounce` utility to defer the expensive updates while keeping the fast ones synchronous to maintain a snappy user experience.
