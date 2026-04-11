## 2025-04-11 - Prevent unnecessary full-page re-renders

**Learning:** The `DigitalBinder` component had an active 1-second `setInterval` driving a live clock. This timer, because it updated the main component state every second, forced the entire 800+ line DigitalBinder page (including heavy data fetching, maps, UI animations, etc.) to re-render every single second, creating massive JavaScript execution overhead and potential jank for no architectural reason.
**Action:** Always extract frequently updating state (like live clocks) into their own isolated, leaf-level components. This way, only the small text element re-renders, protecting the parent container from constant, expensive reconciliation cycles.
