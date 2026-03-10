## 2024-11-20 - Component Isolation
**Learning:** High-frequency state updates (like a 1-second interval timer) placed high up in a large React component tree will cause unnecessary re-renders of the entire tree.
**Action:** Isolate such high-frequency, localized updates into their own dedicated leaf components (like a `LiveClock`) to minimize re-render scope and drastically improve performance.
