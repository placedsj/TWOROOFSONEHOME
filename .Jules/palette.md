## 2024-05-22 - Interactive Cards as Divs
**Learning:** The application used `div` elements with `onClick` handlers for the "Timeline Phase" cards, making them inaccessible to keyboard users.
**Action:** Always check interactive cards for semantic HTML. Convert `div`s to `button`s, ensuring to reset styles (`w-full`, `text-left`) and add `type="button"` to maintain layout and prevent form submission issues.
