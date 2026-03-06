## 2026-03-06 - Extract High-Frequency State
**Learning:** High-frequency state updates like `setInterval` for a clock cause unnecessary re-renders in large components.
**Action:** Isolate high-frequency state updates into dedicated leaf components (like `LiveClock`) to prevent heavy parent components from re-rendering unnecessarily.
