## 2024-03-19 - Insecure API Key Exposure via Vite Define
**Vulnerability:** The `vite.config.ts` uses the `define` option to inject `process.env.GEMINI_API_KEY` directly from the environment into the client-side JavaScript bundle.
**Learning:** Using Vite's `define` configuration to map sensitive server-side environment variables directly into client code embeds the secrets in plaintext within the compiled application.
**Prevention:** Avoid injecting sensitive API keys directly into the client bundle. For public configuration, use `VITE_` prefixed variables. For sensitive operations, route requests through a secure backend proxy.
