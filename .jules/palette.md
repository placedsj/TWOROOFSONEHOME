## 2025-02-24 - Add Explicit Form Labels
**Learning:** Found that basic form inputs only relied on `placeholder` attributes which is bad for accessibility (screen readers and general UX).
**Action:** Always pair `<input>` fields with explicit `<label htmlFor="...">` and `id` attributes to ensure correct keyboard and screen reader accessibility, even for simple forms.
