## 2025-04-03 - Component Extraction for Interval Optimization
**Learning:** In large React components like DigitalBinder, having an actively ticking clock driven by a `setInterval` in the root component causes the entire tree (and its many child components) to re-render every second.
**Action:** Isolate frequently updating state (like current time) into small, dedicated sub-components (`LiveClock`) to drastically reduce unnecessary re-renders in the parent application tree.
