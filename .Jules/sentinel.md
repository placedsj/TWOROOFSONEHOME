## 2026-02-21 - Hardcoded Secret Exposure in Client Bundle

**Vulnerability:** The `vite.config.ts` file was configured to inject `GEMINI_API_KEY` from the environment into the client-side bundle via `define`. This exposes the API key to anyone who inspects the client code, even if the key is not actively used in the application logic.

**Learning:** Build tools like Vite's `define` feature replace global constants at build time. Including sensitive environment variables here essentially hardcodes them into the public JavaScript bundle. Secrets should never be exposed to the client side in this manner.

**Prevention:** Only expose non-sensitive, public configuration values (e.g., API endpoints, feature flags) to the client. Use `import.meta.env` for environment variables in Vite and ensure sensitive keys are not prefixed with `VITE_` or manually injected via `define`.
