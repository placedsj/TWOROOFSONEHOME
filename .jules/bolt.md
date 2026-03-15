## 2024-03-15 - Extract Frequent State Updates
**Learning:** Having a 1-second interval updating a parent component forces the entire complex tree (like `DigitalBinder`) to re-render every second.
**Action:** Extract fast-changing state into small, isolated child components so only those minimal DOM nodes re-render.
