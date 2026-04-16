## 2024-04-16 - Prevent Full-Tree Re-Renders from Header Clock
**Learning:** In top-level layout components (like `DigitalBinder`), placing rapidly updating state (such as a 1-second `setInterval` for a clock) causes the entire layout tree to re-render unnecessarily every second.
**Action:** Isolate rapidly updating state into dedicated, localized child components (e.g., extracting a `HeaderClock` component) to prevent parent and sibling components from unnecessarily re-rendering.
