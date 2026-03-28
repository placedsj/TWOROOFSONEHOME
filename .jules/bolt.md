## 2024-03-28 - Stop full page re-rendering from top-level clocks
**Learning:** Extracting fast-updating state (like a live clock updated via `setInterval` every second) into its own isolated, small React component is required to prevent massive full-page re-renders.
**Action:** Always move state that updates very frequently, like a live clock, into a child component so it doesn't trigger re-renders of the entire page or complex parent component.
