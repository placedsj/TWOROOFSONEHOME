## 2024-04-13 - Extracted rapidly updating state from top-level component
**Learning:** Found a common anti-pattern where a rapidly updating `setInterval` for a clock was placed in the top-level layout component (`DigitalBinder.tsx`). This caused the entire application tree to re-render every second unnecessarily.
**Action:** Always isolate rapidly updating state (like clocks, timers, or fast subscriptions) into dedicated, localized child components to prevent unnecessary full-tree re-renders.
