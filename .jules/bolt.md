## 2024-05-22 - [Isolating High-Frequency Updates]
**Learning:** High-frequency state updates (like a 1-second clock) in a top-level component cause the entire component tree to re-render, leading to performance degradation.
**Action:** Isolate such updates into dedicated leaf components (e.g., `<LiveClock />`) to limit the scope of re-renders.
