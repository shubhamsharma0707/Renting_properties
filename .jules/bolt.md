## 2024-06-10 - Debounce DOM & Map Marker Re-rendering on Slider Input
**Learning:** Re-rendering Leaflet markers and full DOM cards synchronously on every slider `input` event (as it fires rapidly during drag) causes severe main-thread blocking and layout thrashing in this application. The UI updates text/gradient but hangs the browser when rebuilding the map.
**Action:** Always decouple immediate UI feedback (text labels, CSS) from heavy computations (DOM generation, map rendering) using `debounce`, specifically when dealing with range sliders that update complex UI elements.
