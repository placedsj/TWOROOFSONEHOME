## 2024-03-24 - Do not use Vite's `define` for sensitive keys
**Vulnerability:** A `GEMINI_API_KEY` was exposed to the client by defining it as `process.env.API_KEY` using Vite's `define` option in `vite.config.ts`.
**Learning:** Vite's `define` option replaces the defined keys with static strings during the build. While useful for public variables, it exposes secrets when used with server-side environment variables, making them accessible to any user in the browser bundle.
**Prevention:** Never map sensitive API keys or secrets to global client-side variables like `process.env` using `define`. Always store API keys on a backend proxy, and fetch the necessary data dynamically from the client instead of doing it from the browser.
