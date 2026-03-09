## 2024-05-24 - Component Isolation Strategy
**Learning:** High-frequency state updates (like a 1-second `setInterval` for a clock) placed in a massive parent component (like `DigitalBinder`) cause the entire tree to re-render unnecessarily, degrading performance.
**Action:** Isolate high-frequency state updates into dedicated leaf components (e.g., `LiveClock`) to limit the scope of re-renders. Always throttle high-frequency events like `scroll` or `mousemove` with `requestAnimationFrame` and `passive: true`.
