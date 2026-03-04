## 2024-03-20 - [Missing Form AutoComplete & Validation]
**Vulnerability:** The login form lacked explicit `<label>` elements, `required` validation, and `autoComplete` attributes (e.g., `autoComplete="username"`, `autoComplete="current-password"`).
**Learning:** Browsers rely on `autoComplete` attributes to securely manage credentials. Without them, users may resort to insecure practices (like copying/pasting passwords), and assistive technologies may fail to properly announce the input's purpose.
**Prevention:** Always include `autoComplete` attributes on authentication forms to leverage built-in browser security and password management features.
