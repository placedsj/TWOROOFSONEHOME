## 2026-01-31 - Timeline Phase Accessibility
**Learning:** Interactive cards that look like navigation steps should be semantic buttons, not divs. This ensures keyboard accessibility and screen reader support.
**Action:** Use `<button type="button">` for interactive cards and ensure proper HTML nesting (use `span` with `block` instead of `div` inside buttons).
## 2024-05-22 - Interactive Cards as Divs
**Learning:** The application used `div` elements with `onClick` handlers for the "Timeline Phase" cards, making them inaccessible to keyboard users.
**Action:** Always check interactive cards for semantic HTML. Convert `div`s to `button`s, ensuring to reset styles (`w-full`, `text-left`) and add `type="button"` to maintain layout and prevent form submission issues.
