## 2025-04-09 - Vite Config Secrets Injection
**Vulnerability:** The Vite configuration used the `define` property to map server-side environment variables (`env.GEMINI_API_KEY`) to `process.env` strings.
**Learning:** This is a critical risk because Vite statically replaces `process.env.*` occurrences during the build process, which hardcodes the secrets directly into the compiled client-side JavaScript bundle, making them accessible to any user in the browser.
**Prevention:** Never inject secret backend API keys or credentials into the frontend build via Vite's `define` config. Only expose keys using `VITE_` prefixes if they are explicitly intended to be public.
