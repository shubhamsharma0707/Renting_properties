## 2024-06-29 - Debouncing expensive map rendering on slider input
**Learning:** In MapView, the slider budget filter triggers a synchronous full map marker redraw and DOM property cards regeneration (`this.refreshCards()`) on every input event tick, causing severe rendering jank when dragged quickly.
**Action:** Always decouple immediate lightweight UI updates (like labels/CSS gradients) from heavy DOM/Map renders using debounce, ensuring responsive feedback without blocking the main thread.
