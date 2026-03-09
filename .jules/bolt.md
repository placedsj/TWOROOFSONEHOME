## 2024-12-19 - Component Isolation & Event Throttling
**Learning:** High-frequency state updates like 1-second timers cause severe performance degradation when placed in heavy parent components. Unthrottled scroll events spam the main thread.
**Action:** Isolate high-frequency state updates (e.g., timers) into dedicated leaf components (like LiveClock) to prevent heavy parent components from re-rendering unnecessarily. Throttle high-frequency event listeners using requestAnimationFrame.
