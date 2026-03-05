## 2024-05-18 - Isolate high-frequency state updates
**Learning:** High-frequency state updates (e.g., timers) in parent components cause unnecessary re-renders of the entire tree.
**Action:** Isolate high-frequency state updates into dedicated leaf components (like `LiveClock`) to prevent heavy parent components from re-rendering unnecessarily.