## 2024-03-28 - Added Accessible Icon Buttons
**Learning:** Icon-only close buttons (using `lucide-react`) across multiple views (`DigitalBinder.tsx`, `pages/DigitalBinder.tsx`) lack ARIA labels and focus-visible states by default, making them inaccessible to screen readers and keyboard users.
**Action:** When adding icon-only interactive elements, explicitly provide `aria-label`, `title`, and `focus-visible:ring-2 focus-visible:outline-none` Tailwind classes to ensure they meet minimum a11y standards.
