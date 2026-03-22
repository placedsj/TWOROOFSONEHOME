
## 2025-03-22 - Add explicit labels to login form
**Learning:** Relied on placeholder text which disappears on typing, causing accessibility issues for screen readers and cognitive load for users.
**Action:** Always use explicit `<label>` tags with `htmlFor` matching the input's `id` to ensure inputs are accessible and context remains visible.
