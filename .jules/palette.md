## 2024-03-22 - Adding Invisible Accessibility without Disrupting Visual Layout
**Learning:** Adding standard visual `<label>` elements to pre-existing centered form layouts (like Login) can shift the alignment and disrupt the original design's aesthetic. However, inputs without explicit labels fail WCAG accessibility standards.
**Action:** Use Tailwind's `sr-only` class to attach explicit `<label>` elements linked to inputs via `htmlFor`/`id`. This ensures perfect screen reader compatibility without altering the pixel-perfect visual layout of existing designs.
