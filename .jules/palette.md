## 2024-03-29 - Accessible Icon-Only Modal Controls
**Learning:** Found multiple icon-only buttons (`<X />`, `<Sparkles />`, etc.) used for crucial modal closing and domain navigation without text alternatives. The lack of visible focus rings and accessible labels prevents keyboard navigation and screen reader comprehension.
**Action:** Always wrap `lucide-react` icons in buttons with descriptive `aria-label`, an optional `title` for tooltip feedback, and explicit `focus-visible` classes to ensure full keyboard and screen reader accessibility.
