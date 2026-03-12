
## 2025-02-28 - Component Re-rendering Optimization (LiveClock)
**Learning:** High-frequency state updates like timers or intervals inside heavy parent components (such as `DigitalBinder.tsx`) cause massive, unnecessary re-renders of the entire DOM sub-tree.
**Action:** Isolate high-frequency state updates into dedicated leaf components (e.g. `LiveClock`). This confines the re-renders exclusively to the small leaf component, dramatically improving performance for large views.
