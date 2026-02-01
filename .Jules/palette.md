## 2025-02-23 - Interactive Divs vs Buttons
**Learning:** Clickable divs (`<div onClick={...}>`) are common for custom UI elements like timeline steps but are inaccessible to keyboard and screen reader users.
**Action:** Always convert these to `<button type="button">` and use CSS (like `w-full text-left`) to maintain the visual layout while gaining native accessibility features (focus, Enter/Space activation).
