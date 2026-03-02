## 2024-05-24 - [ENHANCEMENT] Content Security Policy (CSP) added to index.html
**Vulnerability:** Missing Content Security Policy (CSP) allowed arbitrary scripts and resources to load, increasing the risk of Cross-Site Scripting (XSS).
**Learning:** Adding a robust CSP prevents the execution of unauthorized scripts. The project relies on Tailwind CSS via CDN and inline scripts, as well as React modules via `esm.sh`, which necessitates `unsafe-inline`, `unsafe-eval`, and adding those domains to `script-src` and `style-src` while still severely restricting unwanted resources.
**Prevention:** Implement CSP via meta tags or HTTP headers to explicitly declare approved sources for resources and scripts, establishing a crucial layer of defense in depth against XSS attacks.
