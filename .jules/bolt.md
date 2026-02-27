## 2024-05-24 - High-Frequency State Isolation
**Learning:** Isolate high-frequency state updates (e.g., timers) into dedicated leaf components (like `LiveClock`) to prevent heavy parent components from re-rendering unnecessarily.
**Action:** Always identify state that updates frequently (every second or faster) and move it into a small, focused child component to minimize the re-render scope.
