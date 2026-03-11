
## 2026-03-11 - Isolate high-frequency state updates
**Learning:** High-frequency state updates (like a 1-second timer) at the top level of large components cause excessive re-renders.
**Action:** Isolate timers into dedicated leaf components (like LiveClock).
