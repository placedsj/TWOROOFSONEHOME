## 2025-04-08 - Remove Hardcoded Secrets from Vite Configuration
**Vulnerability:** The `vite.config.ts` explicitly injected the `GEMINI_API_KEY` into the client-side JavaScript bundle using Vite's `define` plugin (`process.env.API_KEY`).
**Learning:** Using Vite's `define` or `env` system to inject backend secrets makes them globally accessible in the client bundle, regardless of whether they are actively used in the codebase at the moment.
**Prevention:** Never inject secrets into client-side codebases. Backend API keys must be kept server-side.
