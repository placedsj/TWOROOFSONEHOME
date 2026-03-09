## 2025-03-05 - Missing autoComplete and explicit labels on Login form
**Vulnerability:** The login form lacked `autoComplete` attributes, preventing password managers from securely handling credentials, and lacked explicit `<label>` elements for accessibility.
**Learning:** Relying solely on placeholders for form fields compromises both security (password manager integration) and accessibility (screen readers).
**Prevention:** Always include explicit `autoComplete` attributes (e.g., `username`, `current-password`) and `<label>` elements (using `sr-only` if visually hidden) on interactive form inputs.
