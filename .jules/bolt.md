
## 2025-02-28 - Unnecessary massive component tree re-renders due to leaf node timers
**Learning:** Having a `setInterval` that triggers a fast state update (e.g. 1 second clock tick) at the root level of a massive component like `DigitalBinder` causes the entire component tree to re-render, wasting significant CPU and memory resources unnecessarily.
**Action:** Isolate high-frequency state updates like timers into dedicated, small leaf components (e.g., `LiveClock`) so that only that specific node in the DOM needs to be continuously re-rendered without affecting parents or siblings.
