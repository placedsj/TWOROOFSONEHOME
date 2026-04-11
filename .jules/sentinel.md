## 2025-04-11 - Exposed API Keys in Vite Define Config
**Vulnerability:** The Vite configuration used `define` to statically replace `process.env.GEMINI_API_KEY` with the actual secret from `.env.local`, which exposes the API key to the client-side browser bundle in plain text.
**Learning:** Using `define` in Vite statically injects variables into the built code. Mapping secrets here exposes them publicly.
**Prevention:** Never inject secrets into client-side code using `define` or `import.meta.env`. Use a backend proxy server to interact with sensitive APIs.
