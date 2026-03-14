## 2024-10-24 - Isolate High-Frequency Timers
**Learning:** Placing a 1-second `setInterval` for a clock at the root of a massive component (`DigitalBinder.tsx`) causes the entire DOM tree to re-render every second, significantly degrading scroll and interaction performance.
**Action:** Isolate high-frequency state updates (e.g., timers) into dedicated leaf components (like `LiveClock`) to prevent heavy parent components from re-rendering unnecessarily.
