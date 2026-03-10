## 2024-05-15 - Hardcoded API Key Exposure via Vite Config
**Vulnerability:** The Vite configuration used the `define` property to inject `GEMINI_API_KEY` into `process.env`, exposing a server-side secret in plaintext to the browser bundle.
**Learning:** Using Vite's `define` configuration for secrets exposes them to the client. The frontend application operates on mocked data and does not require this key.
**Prevention:** Never inject server-side secrets into the client bundle using configuration tools like `define`. Ensure the frontend relies only on publicly safe environment variables, and use `import.meta.env` for safe variables.
