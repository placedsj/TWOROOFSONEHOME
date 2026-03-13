## 2025-03-08 - Isolate High-Frequency State Updates
**Learning:** High-frequency state updates (like a 1-second timer) at the top of a heavy component tree (like `DigitalBinder.tsx`) cause expensive, unnecessary re-renders of the entire page layout.
**Action:** Isolate such state into dedicated leaf components (like `LiveClock`) to constrain the re-render boundary.
