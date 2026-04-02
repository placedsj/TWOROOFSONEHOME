## 2024-04-02 - Icon-only Buttons Missing ARIA Labels
**Learning:** Found multiple icon-only buttons (like the Close 'X' buttons in modals) missing `aria-label`s, which is a major accessibility issue for screen reader users. The application also uses `focus-visible` classes inconsistently or not at all for these buttons, making keyboard navigation difficult.
**Action:** Ensure that all standalone icon buttons have descriptive `aria-label`s and visible focus states (e.g., `focus-visible:ring-2 focus-visible:outline-none`).
