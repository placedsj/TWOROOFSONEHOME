## 2024-03-22 - Missing ARIA Labels on Modals
**Learning:** Standalone icon-only close buttons in dynamically rendered React components (like the Directive Reader and Lexicon Glossary) lacked `aria-label`s and focus indicators, rendering them invisible to screen readers and difficult to navigate via keyboard. This pattern is easy to miss during initial implementation.
**Action:** Always ensure icon-only interactive elements receive an `aria-label` (and optionally a `title` tooltip) and an explicit `focus-visible:ring-2` to support both assistive technologies and keyboard focus feedback.
