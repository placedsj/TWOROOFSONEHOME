## 2024-05-24 - Isolate High-Frequency State Updates
**Learning:** High-frequency state updates like timers (e.g., `setInterval` running every second) in top-level components cause the entire component tree to re-render unnecessarily, leading to severe performance bottlenecks.
**Action:** Isolate high-frequency state updates into dedicated leaf components (e.g., `LiveClock`) so that only the small UI elements affected by the state change are re-rendered.
