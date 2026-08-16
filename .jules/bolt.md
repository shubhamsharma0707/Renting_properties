## 2024-08-16 - [Debouncing Heavy Operations on High-Frequency Events]
**Learning:** Destroying and recreating Leaflet map markers on every single slider input event in this architecture blocks the main thread and makes the UI unresponsive. The map marker rendering and bounds fitting are computationally expensive.
**Action:** When handling high-frequency events (like a budget slider) that trigger heavy map re-renders or DOM updates, apply debouncing to the heavy operation while updating the immediate UI elements (like the slider label) synchronously.
