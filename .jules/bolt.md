## 2026-04-03 - Isolating Component Re-renders
**Learning:** Frequent interval updates (like clocks) placed at the root of large components cause massive, unnecessary re-renders of the entire tree.
**Action:** Always isolate high-frequency state updates into their own leaf components to keep the rest of the application performant.
