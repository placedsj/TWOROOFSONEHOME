## 2025-04-06 - Component Re-rendering Overload
**Learning:** Found a massive `DigitalBinder` component (800+ lines) re-rendering every single second because it held `time` state for a top bar clock. This is a critical codebase anti-pattern in React apps that impacts entire page performance unnecessarily.
**Action:** Extract frequently changing state into small, isolated leaf components (like `LiveClock`) so their re-renders do not bubble up or affect the parent container.
