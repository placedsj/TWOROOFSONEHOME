## 2024-05-18 - Full-Tree Re-Renders from Top-Level Timers
**Learning:** Found a performance anti-pattern in `pages/DigitalBinder.tsx` where a `setInterval` timer for a clock was placed in the top-level layout component, causing the entire tree (including complex modals and sidebars) to re-render every second.
**Action:** Extract rapidly updating state like clocks or tickers into their own dedicated, localized child components (e.g., `<SystemClock />`) to isolate renders and prevent unnecessary full-tree updates.
