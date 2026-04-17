## 2024-04-17 - Top-Level Interval Bottleneck
**Learning:** In this codebase, rapidly updating state (like setInterval timers for clocks) placed in massive top-level layout components like DigitalBinder.tsx causes severe performance issues due to full-tree re-renders.
**Action:** Isolate rapidly updating state into dedicated, localized child components to prevent unnecessary re-renders of large component trees.
