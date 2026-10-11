## 2024-10-11 - Debouncing heavy Leaflet map markers
**Learning:** Leaflet marker rendering (`refreshCards`) is computationally expensive and can block the main thread if executed on every `input` event from a rapid slider.
**Action:** Use a `debounce` utility on the heavy update function, but keep lightweight UI updates (like the slider's gradient and value text) synchronous so the component feels responsive immediately to the user while the heavy processing catches up.
