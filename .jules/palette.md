## 2024-03-20 - Adding ARIA labels to close and toggle buttons
**Learning:** Icon-only buttons (like `X` to close modals, or voice toggles) are critical accessibility barriers if missing explicit labels, as screen readers cannot interpret the visual icon context. In wouter/Vite setups, lack of visible focus rings also harms keyboard users attempting to navigate these modals.
**Action:** Always provide `aria-label` (and `title` for sighted mouse users) alongside explicit `focus-visible` Tailwind rings when building icon-only interactive controls.
