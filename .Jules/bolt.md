## 2024-05-23 - [Timer Isolation]
**Learning:** High-frequency timers (e.g., `setInterval` every second) in top-level page components cause the entire page tree to re-render, leading to significant performance degradation.
**Action:** Isolate timers and frequently changing state (like clocks) into small, dedicated leaf components (e.g., `LiveClock`) to prevent parent re-renders.
