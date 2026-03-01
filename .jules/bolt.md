
## 2025-03-01 - Component State Isolation for High-Frequency Updates
**Learning:** Found a critical performance bottleneck in the massive `DigitalBinder` component where a 1-second `setInterval` driving a clock was triggering full re-renders of the entire 800+ line component, including complex SVG/animations and deep child trees. The architecture didn't isolate this high-frequency state update.
**Action:** Always isolate state that updates frequently (like timers or continuous progress bars) into tiny, dedicated leaf components (e.g., `LiveClock`). This prevents the heavy parent component from unnecessary virtual DOM diffing and re-rendering on a loop.
