## 2026-02-17 - Component Isolation for High-Frequency Updates
**Learning:** High-frequency state updates (like a 1-second clock) in a large root component (`DigitalBinder`) cause the entire component tree to re-render every second, significantly impacting performance.
**Action:** Isolate these updates into small, dedicated leaf components (like `LiveClock`) to contain re-renders.
