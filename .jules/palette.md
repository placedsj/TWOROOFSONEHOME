## 2024-03-18 - Added ARIA labels to custom modal close buttons
**Learning:** This app frequently uses custom modal and drawer implementations with icon-only close buttons (`<X size={24} />` from lucide-react) without `aria-label`s, rendering them completely invisible to screen readers.
**Action:** When creating or reviewing custom overlays in this codebase, explicitly verify that dismiss/close actions are semantic `<button>` elements with clear `aria-label` attributes.
