## 2025-03-15 - Accessible Login Form Improvements
**Learning:** Adding screen-reader-only (`sr-only`) labels significantly improves accessibility without breaking visual design, while combining `disabled` states and async loading spinners (via `lucide-react`) prevents form double-submission and enhances user feedback.
**Action:** Always implement `sr-only` labels for standalone inputs and bind them with `htmlFor`/`id`. Include disabled states and visual feedback (loading spinners) for async buttons.
