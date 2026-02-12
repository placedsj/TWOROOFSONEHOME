## 2026-02-12 - Accessible Login Form Pattern
**Learning:** Basic HTML forms are often inaccessible due to missing `<label>` elements, relying solely on `placeholder`. Adding explicit `htmlFor` association and loading states significantly improves UX without complex libraries.
**Action:** Always wrap inputs in a container with a label that has a matching `htmlFor` attribute. Implement `isLoading` state for all async buttons to prevent double-submission and provide feedback.
