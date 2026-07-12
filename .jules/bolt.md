## 2026-07-12 - [Debounce Slider Input to Prevent Map Stuttering]
**Learning:** The Leaflet map marker rendering in this project involves dynamically creating HTML elements with CSS animations and inserting them directly into the map for each property. Binding this operation directly to a slider's "input" event causes massive main thread blocking.
**Action:** Always decouple immediate visual updates (like slider label text) from computationally heavy DOM/map rendering operations using debouncing. This ensures visual responsiveness while preventing map stutter.
