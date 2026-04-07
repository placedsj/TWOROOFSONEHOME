## 2024-05-18 - Extracted LiveClock to prevent parent re-renders
**Learning:** In React, updating state in a root-level component causes the entire component tree to re-render. In `DigitalBinder`, a `setInterval` was updating the `time` state every second, causing massive unnecessary re-renders.
**Action:** Extract frequently changing state into isolated child components whenever possible to minimize the impact of state updates on the surrounding component tree.
