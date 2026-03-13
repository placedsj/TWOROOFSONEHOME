## 2024-03-13 - Component Isolation for High-Frequency State
**Learning:** Heavy components like `DigitalBinder.tsx` shouldn't manage high-frequency state (e.g., a clock updating every second). The entire component tree will re-render, leading to poor performance.
**Action:** Isolate high-frequency state into dedicated leaf components (like `LiveClock`) to limit the scope of re-renders.
