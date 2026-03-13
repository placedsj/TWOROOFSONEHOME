## 2024-05-24 - Do not expose API keys via Vite define
**Vulnerability:** Hardcoded API key injection into the client bundle via Vite's `define` config.
**Learning:** Exposing server-side secrets in plaintext to the browser is a critical security risk.
**Prevention:** Avoid injecting sensitive environment variables into the client bundle.
