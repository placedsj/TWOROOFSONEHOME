## 2024-04-17 - Unnecessary Full-Tree Re-renders from Top-Level Clock
**Learning:** Rapidly updating state (like a clock ticking every second) placed in top-level components (like `DigitalBinder`) forces the entire component tree to re-render constantly.
**Action:** Isolate frequently updating state into dedicated, localized child components (e.g., `Clock`) to prevent unnecessary full-tree re-renders.
