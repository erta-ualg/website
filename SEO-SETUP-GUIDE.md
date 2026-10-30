# ERTA Website — SEO Setup

Last updated: 2026-10-30

## What the codebase now does

### Metadata
- Every page sets its own title, description, keywords, canonical URL, Open Graph and Twitter tags through `src/hooks/useSEO.tsx`.
- Metadata is localized from the `seo` block in `src/locales/pt/translation.json` and `src/locales/en/translation.json`.
- `document.title`, `<html lang>`, canonical and social tags are updated in place, so there are no duplicate tags.
- `index.html` keeps generic fallback metadata for crawlers that do not execute JavaScript.
- Canonical host is `https://fs-erta.com` (no `www`, no trailing slash except the homepage).

### Structured data
- `SportsTeam` and `WebSite` JSON-LD in `index.html`.
- `WebPage` JSON-LD per page, with `inLanguage`.
- `BreadcrumbList` added automatically to every non-home page.
- `SportsEvent` JSON-LD on `/results` for FSPT26.

### Crawling and indexing
- `public/robots.txt` allows crawling and points to the sitemap.
- `public/sitemap.xml` lists every canonical page, including `/results`.
- `public/404.html` provides a branded 404 page.
- `public/_worker.js` runs as a Cloudflare Pages advanced-mode worker. It serves the SPA shell for known routes, returns real 404s for unknown paths, normalizes trailing slashes with 301s, and redirects `www`/`http` to the canonical `https` apex.
- `public/_headers` sets security headers and long-lived caching for hashed assets.

### Performance
- Route-level code splitting keeps Three.js and page-specific code out of the initial bundle.
- Hero images are WebP, sized and marked `fetchpriority="high"`.
- Font request reduced to the one family the interface actually uses (Rajdhani).

## Cloudflare setup checklist

The domain currently resolves over both `fs-erta.com` and `www.fs-erta.com`, and both `http` and `https` return 200. The `_worker.js` edge worker now enforces `www` → apex and `http` → `https`; configure the dashboard rules below as the first line of defense.

### 1. Redirect `www` to the apex domain
Cloudflare dashboard → Rules → Redirect Rules → Create rule:

- **When**: `Hostname` equals `www.fs-erta.com`
- **Then**: Static redirect to `https://fs-erta.com`
- **Status**: `301`
- Enable **Preserve query string** and **Preserve path**.

### 2. Force HTTPS
Cloudflare dashboard → SSL/TLS → Edge Certificates:

- **Always Use HTTPS**: On
- **Automatic HTTPS Rewrites**: On
- **SSL/TLS encryption mode**: Full (strict)

### 3. HSTS
The `_headers` file already sends:

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Only enable HSTS preload in Cloudflare after every subdomain is HTTPS.

### 4. Performance settings
- **Brotli**: On
- **Early Hints**: On
- **Rocket Loader**: Off (it can break React hydration)
- **Auto Minify**: Off (Vite already minifies)

### 5. Cache
- HTML: `Cache-Control: public, max-age=0, must-revalidate` (Pages default)
- Hashed assets: `public/_headers` sets `max-age=31536000, immutable`

`_worker.js` is copied into `dist/` and deployed with the static output, so it works with both Cloudflare Pages Git integration and direct uploads. `_headers` is supported by Cloudflare Pages and Netlify.

### 6. Search Console and Bing
1. Add a **Domain property** for `fs-erta.com` in Google Search Console.
2. Verify with a DNS TXT record in Cloudflare DNS.
3. Submit `https://fs-erta.com/sitemap.xml`.
4. Add the site to Bing Webmaster Tools and submit the same sitemap.
5. Check the Page Indexing report after the first crawl for soft 404s, duplicate canonicals or blocked resources.

### 7. DNSSEC
Enable DNSSEC in Cloudflare DNS. It is a trust signal and prevents DNS spoofing.

## Current page metadata

| Route | PT title | EN title |
|-------|----------|----------|
| `/` | Equipa Formula Student da UAlg \| ERTA | Formula Student Team UAlg \| ERTA |
| `/team` | A Nossa Equipa — Engenharia Formula Student \| ERTA | Our Team — Formula Student Engineering \| ERTA |
| `/partners` | Parceiros e Patrocinadores — Formula Student \| ERTA | Partners & Sponsors — Formula Student \| ERTA |
| `/carro` | O Carro — Protótipo Elétrico Formula Student \| ERTA | The Car — Electric Formula Student Prototype \| ERTA |
| `/join` | Junta-te à Equipa — Recrutamento Formula Student \| ERTA | Join the Team — Formula Student Recruitment \| ERTA |
| `/contactos` | Contacta a ERTA — Patrocínios e Parcerias \| ERTA | Contact ERTA — Sponsorship & Partnerships \| ERTA |
| `/results` | Resultados FSPT26 — 8.º Overall Classe 2 \| ERTA | FSPT26 Results — 8th Overall Class 2 \| ERTA |

## Remaining SEO work

### English content is not separately indexable
The language switcher changes the page in place. Googlebot sees the Portuguese default at a single URL, so English titles and descriptions are not separate ranking opportunities.

The next structural step is a locale URL strategy, preferably:

- Portuguese at `/` (current URLs preserved)
- English at `/en/...`
- `hreflang` for `pt`, `en` and `x-default`
- Locale-aware canonical URLs and sitemap entries

This is a routing and link refactor across the site, not just metadata. Decide whether to invest in it before targeting English-language search traffic.

### Social previews are generic
Static Open Graph tags are visible to crawlers that do not run JavaScript, but they use the generic ERTA image and copy. Per-route social cards need pre-rendering or an edge worker that rewrites metadata per URL.

### `/carro` still contains placeholder copy
The car page has several `Lorem ipsum` sections. It will not rank well until it has real chassis, powertrain, aerodynamics and design content.

### Content growth
The strongest next content opportunities are:

- A short FSPT26 race report with real photos and results context
- Technical deep-dives on chassis, powertrain and aerodynamics
- Sponsor and partner case studies
- Recruitment and outreach posts
