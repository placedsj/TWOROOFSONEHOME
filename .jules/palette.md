## 2024-05-23 - Simulated Login UX Pattern
**Learning:** For demo apps with simulated auth, users still expect standard form behaviors (validation, loading states).
**Action:** When simulating async actions (like login), always implement:
1. Visual loading state (button spinner/text) during `setTimeout`.
2. Standard HTML5 validation (`required`, `type="email"`) to catch errors before "submission".
3. `autoComplete` attributes for password manager support.
