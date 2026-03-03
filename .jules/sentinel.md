## 2024-03-03 - [Missing .gitignore rules for env files]
**Vulnerability:** The project's `.gitignore` file was missing `.env` and `.env.*` rules. Environment files, potentially containing critical secrets like `GEMINI_API_KEY`, were at risk of being committed.
**Learning:** `.gitignore` configuration must explicitly block potential secret-containing files, particularly when a project expects local environment variables.
**Prevention:** Ensured `.gitignore` ignores `.env` and `.env.*` to establish defense-in-depth against accidental secret exposure.
