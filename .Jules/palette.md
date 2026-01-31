## 2026-01-31 - Timeline Phase Accessibility
**Learning:** Interactive cards that look like navigation steps should be semantic buttons, not divs. This ensures keyboard accessibility and screen reader support.
**Action:** Use `<button type="button">` for interactive cards and ensure proper HTML nesting (use `span` with `block` instead of `div` inside buttons).
