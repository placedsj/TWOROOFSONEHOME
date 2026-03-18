## 2025-03-18 - Client-Side API Key Exposure via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being injected directly into the client-side JavaScript bundle via the `define` configuration in `vite.config.ts`.
**Learning:** Using `define` in Vite (or `DefinePlugin` in Webpack) replaces all instances of the defined variable with its value as a string during the build process, embedding secrets directly into the public frontend code in plaintext.
**Prevention:** Never inject server-side sensitive variables (like API keys, secrets, or passwords) into the client bundle. Only use `VITE_` prefixed variables for safe, public configurations, and keep secrets firmly on the server/backend.
