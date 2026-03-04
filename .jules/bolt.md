## 2026-03-04 - Isolate High-Frequency State Updates
**Learning:** Updating state every second (like a clock) in a large parent component causes the entire component tree to re-render, leading to performance issues.
**Action:** Isolate high-frequency state updates (e.g., timers) into dedicated leaf components (like `LiveClock`) to prevent heavy parent components from re-rendering unnecessarily.