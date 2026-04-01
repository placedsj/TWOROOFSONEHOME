## 2024-04-01 - Isolate frequently updating state to prevent massive re-renders
**Learning:** In large React components like `DigitalBinder`, storing state that updates frequently (e.g., a `setInterval` for a clock updating every second) at the top level causes the entire component tree to unnecessarily re-render on every tick.
**Action:** Isolate frequently updating state into smaller, self-contained sub-components (like a `Clock` component) so only the necessary UI nodes are re-rendered.
