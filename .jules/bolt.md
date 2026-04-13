## 2024-04-13 - Extract rapidly updating timer component
**Learning:** Found a full-page re-render bottleneck in `pages/DigitalBinder.tsx`. The `DigitalBinder` component had a `time` state updated every second via `setInterval` which caused the entire layout to unnecessarily re-render, despite the time only being displayed in a small header. Rapidly updating state shouldn't be placed in top-level components.
**Action:** Always isolate rapidly updating state (like clocks or timers) into their own dedicated child components to prevent unnecessary full-tree re-renders.
