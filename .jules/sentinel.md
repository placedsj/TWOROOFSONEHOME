# Sentinel's Journal

## 2024-05-23 - Mock Login Vulnerabilities
**Vulnerability:** The login page was a placeholder accepting any password > 8 chars, with no rate limiting.
**Learning:** Even mock authentication endpoints should model security best practices (complexity requirements, rate limiting) to prevent "security debt" when they are eventually replaced with real implementations.
**Prevention:** Implement "secure-by-default" stubs that enforce valid input patterns and basic protections like rate limiting from day one.

## 2024-05-23 - Dead Code Elimination
**Vulnerability:** Legacy unused files (e.g., `App.js`, `Login.js`) were present alongside active TypeScript files, creating confusion and potential attack surface if they contained outdated logic or vulnerabilities.
**Learning:** Duplicate or legacy files can hide security issues and confuse maintainers.
**Prevention:** Regularly audit the codebase for unused files and remove them. Use strict build configurations to ensure only intended entry points are used.
