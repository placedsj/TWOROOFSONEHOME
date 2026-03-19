## 2024-11-12 - Prevent massive re-renders with component isolation
**Learning:** Fast-updating states like `setInterval` for a clock can cause an entire heavy component (e.g., `DigitalBinder`) to re-render every second if the state is kept at the top level.
**Action:** Always extract fast-updating state into small, isolated child components so that only the necessary nodes re-render.