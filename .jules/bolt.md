
## 2024-07-26 - Debouncing Leaflet Marker Updates
**Learning:** Tying heavy DOM and Leaflet marker destruction/recreation directly to high-frequency slider `input` events causes significant main thread blocking and degrades performance.
**Action:** Always debounce heavy map rendering functions (like resetting Leaflet markers) when they are triggered by high-frequency events such as range slider inputs to ensure smooth UI interactions.
