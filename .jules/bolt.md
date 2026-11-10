
## 2024-11-10 - Debouncing Leaflet Marker Rendering
**Learning:** In this vanilla JS setup, continuously destroying and re-rendering Leaflet markers during rapid slider `input` events caused significant main thread blocking. Standard `fill()` methods in Playwright also fail on these custom slider implementations; `evaluate` with explicit event dispatching is required to reliably test them.
**Action:** Always wrap heavy DOM or Map-related updates triggered by sliders/scrolls in a `debounce` function. Keep lightweight UI updates (like labels) synchronous outside the debounce to maintain a responsive feel. Use `element.evaluate` to trigger slider interactions in Playwright tests.
