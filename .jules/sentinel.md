## 2026-02-18 - [Insecure Client-Side Env Injection]
**Vulnerability:** Found `process.env.API_KEY` being manually injected via `vite.config.ts`'s `define` block. This exposes sensitive keys to the client-side bundle.
**Learning:** Developers might mistakenly think environment variables are safe if they use `process.env`, but `define` hardcodes the value at build time, making it visible to anyone inspecting the source.
**Prevention:** Remove any `define` block that injects secrets. Use server-side proxies for API calls requiring keys.
