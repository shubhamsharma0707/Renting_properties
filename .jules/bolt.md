## 2024-07-14 - [Debounce High-Frequency Map Rendering]
**Learning:** Destroying and recreating Leaflet map markers on every tick of a slider input event is highly computationally expensive and causes main-thread blocking, drastically hurting frontend responsiveness.
**Action:** When a high-frequency input (like a range slider) controls heavy DOM/map rendering operations (like re-plotting dozens of Leaflet markers), debounce the expensive operation (e.g., using `debounce`) while updating the lightweight UI components (e.g., labels, slider tracks) synchronously.
