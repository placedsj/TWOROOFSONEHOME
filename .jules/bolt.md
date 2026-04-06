## 2025-04-06 - Component Re-rendering bottleneck with setInterval
**Learning:** Found a massive `DigitalBinder` component containing a `setInterval` that triggered a state update (`setTime(new Date())`) every second. This caused the entire huge UI component tree to re-render continuously, creating a major performance bottleneck specific to this unoptimized layout architecture.
**Action:** Always verify where interval-based state changes occur in large React components and extract them into isolated, small child components (like `LiveClock`) to prevent unnecessary full-tree re-renders.
