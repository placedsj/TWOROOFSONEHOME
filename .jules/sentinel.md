# Sentinel Journal - Critical Learnings

This journal records CRITICAL security learnings, vulnerabilities, and patterns specific to this codebase.

## 2025-05-18 - [Insecure Environment Variable Exposure]
**Vulnerability:** The `vite.config.ts` file was configured with `define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }`. This pattern forces the bundler to replace `process.env.GEMINI_API_KEY` with the actual value of the environment variable during build time, effectively baking the secret into the client-side bundle if referenced. Even though the key was unused in the current codebase, this configuration creates a high risk of accidental secret leakage.
**Learning:** Avoid using `define` to inject secrets into client-side code unless absolutely necessary and safe (e.g., public keys). Client-side bundles are public; secrets should never be embedded in them.
**Prevention:** Use `import.meta.env.VITE_MY_VAR` for client-side variables, and ensure sensitive keys (like API secrets) remain server-side or are accessed via a proxy. Never use `define` for secrets in Vite.
