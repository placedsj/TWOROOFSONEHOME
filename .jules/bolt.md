## 2025-03-08 - Component Isolation Strategy
**Learning:** High-frequency state updates (e.g., timers) in root components trigger massive tree re-renders, devastating performance.
**Action:** Isolate high-frequency state updates into dedicated leaf components (like LiveClock) to prevent heavy parent components from re-rendering unnecessarily.
