## 2024-04-12 - Isolate rapidly updating state
**Learning:** Placing rapidly updating state like a 1000ms `setInterval` clock in top-level layout components (e.g. `DigitalBinder.tsx`) causes unnecessary full-tree re-renders, significantly impacting performance.
**Action:** Always extract rapidly updating state into dedicated, localized child components to prevent full-tree re-renders.
