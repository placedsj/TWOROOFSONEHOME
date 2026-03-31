## 2026-03-31 - [Vite config exposing API keys]
**Vulnerability:** [API keys defined in Vite's define config]
**Learning:** [Vite's define configuration replaces environment variables statically at build time. Using it to map server-side secrets like `env.GEMINI_API_KEY` to client-side globals embeds the plaintext secret directly into the client bundle, exposing it to users.]
**Prevention:** [Never map backend secrets directly to the client via Vite's define. Use `VITE_` prefixed variables for safe public client keys, or proxy requests through a secure backend server. Removing unused secure variables from the `define` block eliminates the exposure.]
