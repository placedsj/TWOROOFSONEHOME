## 2024-04-07 - Critical Vite API Key Exposure Fix
**Vulnerability:** The Vite configuration (`vite.config.ts`) used `define` to globally expose the server-side `.env` variable `GEMINI_API_KEY` to the client-side code as `process.env.API_KEY`.
**Learning:** Exposing server-side secrets via Vite's `define` or `import.meta.env` bakes them directly into the compiled, static client-side JavaScript bundles, making them trivially accessible to any user inspecting the browser's source code.
**Prevention:** Never map sensitive server-side keys (like API keys, private tokens, or database credentials) to the frontend environment. If client-side requests to an API are needed, proxy them through a backend server that safely manages the secret.
