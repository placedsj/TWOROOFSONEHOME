## 2024-05-18 - Missing autoComplete on Interactive Forms
**Vulnerability:** The login form lacked `autoComplete` attributes on username and password fields.
**Learning:** Browsers rely on these hints to securely handle credentials and autofill, preventing user error and mitigating credential leakage risks.
**Prevention:** Always add appropriate `autoComplete` attributes (e.g., `username`, `current-password`) to interactive form inputs dealing with authentication or personal data.
