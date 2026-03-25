## 2024-03-25 - Extract Live Clock
**Learning:** Extracting fast-updating state (like a live clock updated via `setInterval` every second) into its own isolated, small React component prevents massive full-page re-renders.
**Action:** Always verify if high-frequency state updates can be isolated from large, complex parent components.
