## 2024-06-25 - [Title]
**Learning:** In MapView.js, the budget slider updates trigger `refreshCards()` on every `input` event, which re-renders both the results list AND all Leaflet map markers. Re-creating Leaflet markers is computationally expensive and causes main thread blocking, making the slider feel sluggish.
**Action:** Use the existing `debounce` function from `utils/api.js` to debounce `this.refreshCards()` when tied to high-frequency events like the budget slider input.
