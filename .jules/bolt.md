## 2026-06-07 - Prevent Layout Thrashing on Slider Input
**Learning:** In MapView.js, the `budget-filter` input event was synchronously triggering `refreshCards()` which destroys and recreates all property cards and Leaflet markers on every slider tick. This caused severe main-thread blocking.
**Action:** Applied `debounce` (150ms) to the heavy `refreshCards()` method during slider drag, while keeping the UI text and slider visual updates instant.
