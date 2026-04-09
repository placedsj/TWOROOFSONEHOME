## 2024-04-09 - Accessible Icon Buttons in Digital Binder
**Learning:** Found multiple instances where critical interface controls (domain selection tabs, modal close buttons) relied exclusively on icon SVGs without any accessible text names, making them difficult for screen reader users to navigate and understand.
**Action:** Always ensure icon-only buttons include both `aria-label` for screen reader accessibility and `title` attributes for sighted user hover tooltips to provide clear interaction context.
