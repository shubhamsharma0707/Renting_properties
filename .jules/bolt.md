## 2024-05-24 - Debouncing Leaflet Marker Re-renders
**Learning:** Destroying and recreating Leaflet map markers on every tick of a slider `input` event is highly computationally expensive and blocks the main UI thread, causing significant jank during dragging.
**Action:** Always wrap heavy UI re-render functions (especially those involving map libraries or extensive DOM manipulation) with a `debounce` function when tied to high-frequency events like sliders or scrolling.
