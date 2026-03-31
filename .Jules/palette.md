## 2024-03-31 - [Icon-only Buttons Accessibility]
**Learning:** Found several modal close buttons in `pages/DigitalBinder.tsx` that are completely missing accessible names (aria-labels). They only contain an `X` icon component from Lucide.
**Action:** When adding close buttons or icon-only controls in custom modals, always add `aria-label="Close [Modal Name]"` to ensure screen reader users understand the button's purpose.
