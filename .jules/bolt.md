## 2026-03-14 - Isolate high-frequency state updates
**Learning:** High-frequency timers (like 1000ms intervals) in top-level parent components cause the entire tree to unnecessarily re-render on every tick.
**Action:** Isolate these frequent updates into dedicated leaf components (e.g., `<LiveClock />`) to confine re-renders to only the elements that need them.