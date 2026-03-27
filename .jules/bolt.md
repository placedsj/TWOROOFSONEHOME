
## 2024-05-27 - Extracted LiveClock component
**Learning:** Storing rapidly updating state (like a live clock updated via `setInterval` every second) at the top level of a large React component (like `DigitalBinder`) forces a massive, unnecessary re-render of the entire component tree every second.
**Action:** Always extract fast-updating state into small, isolated child components so only the tiny component re-renders.
