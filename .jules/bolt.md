
## 2024-03-09 - Isolate High-Frequency State (Timers)
**Learning:** Found that a 1-second `setInterval` driving a `time` state in a massive parent component (`DigitalBinder.tsx`) causes the entire component tree to re-render every second unnecessarily.
**Action:** Isolate high-frequency state updates (like timers or clocks) into dedicated leaf components (e.g., `LiveClock`) to prevent heavy parent components from re-rendering.
