## 2026-10-19 - Debounce Heavy Map Updates on High-Frequency Events
**Learning:** Re-rendering Leaflet markers and map UI synchronously on high-frequency slider 'input' events causes severe main-thread blocking and jank in MapView.
**Action:** Extract lightweight UI updates (gradient, text) to run synchronously, but debounce the heavy DOM/Leaflet operations (`refreshCards`) to ensure a smooth UI.
