## 2024-03-10 - Isolate high-frequency timers
**Learning:** High-frequency state updates like `setInterval` timers inside massive root or dashboard components cause entire app subtrees to re-render, leading to lag, especially with many child components.
**Action:** Isolate these state updates into dedicated, lightweight leaf components (e.g., `<LiveClock />`) to restrict the re-rendering scope only to where it is needed.
