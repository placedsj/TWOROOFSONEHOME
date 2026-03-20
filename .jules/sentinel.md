## 2024-05-17 - Insecure Environment Variable Injection

**Vulnerability:** Client-side injection of the server environment variable `GEMINI_API_KEY` into `process.env` using Vite's `define` configuration.
**Learning:** Using Vite's `define` configuration to map `env.GEMINI_API_KEY` to `process.env.API_KEY` embeds the plaintext API key directly in the compiled client-side JavaScript bundle. Any client-side secrets must use `VITE_` prefix and not be mapped to `process.env`.
**Prevention:** Never inject server-side secrets or sensitive environment variables directly into client-side bundles. Avoid using Vite's `define` to map `env` variables; instead use the safe `VITE_` prefix for safe, public configurations.