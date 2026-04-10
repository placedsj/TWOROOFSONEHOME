## 2024-04-11 - Prevent full page re-renders from live clock
**Learning:** The massive DigitalBinder component had a top-level `setInterval` updating a `time` state every second. This caused the entire application page to re-render every second just to update a small clock in the header.
**Action:** Always extract frequently updating state (like timers or live clocks) into isolated, dedicated child components (e.g., `LiveClock`) to prevent unnecessary top-level re-renders of large component trees.
