## 2024-04-10 - Unnecessary Timer Re-Renders
**Learning:** Having a `setInterval` that updates state every second inside a large, complex component causes the entire component to re-render every second, leading to massive performance degradation.
**Action:** Extract rapidly updating state (like a live clock) into small, isolated sub-components so only the specific DOM elements that change are re-rendered.
