## 2024-05-18 - [Optimized MapView slider performance by debouncing refreshCards]
**Learning:** In MapView, dragging the budget slider was causing heavy DOM rendering (cards and Leaflet markers) on every `input` event tick. Lightweight UI updates should happen synchronously, but heavy DOM renders during slider drag should be debounced.
**Action:** Always debounce heavy render operations attached to high-frequency events like `input` or `scroll` to avoid main thread blocking and unnecessary work, while keeping lightweight visual feedback synchronous.
