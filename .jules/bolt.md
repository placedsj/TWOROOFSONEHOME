## 2024-03-22 - Prevent Massive React Re-renders
**Learning:** Fast-updating state (like a live clock with `setInterval`) in the root of a large component causes the entire component tree to re-render constantly (e.g., every second), destroying performance.
**Action:** Extract the fast-updating state and its interval into an isolated child component so only that small component re-renders.
