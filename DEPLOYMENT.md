# Cloudflare Pages Deployment Guide

This repository is deployed as a static site through Cloudflare Pages. Branches receive Pages preview deployments, and the production branch serves `dyslexiabuddy.com`.

## Cloudflare Pages settings

- **Framework preset:** None
- **Build command:** Leave empty
- **Build output directory:** `/`
- **Root directory:** Repository root
- **Environment variables:** None required

The site contains multiple standalone HTML pages. Do not add a catch-all SPA rewrite to `index.html`; doing so would hide article, privacy, and sitemap pages.

## Response headers

Cloudflare Pages reads the repository-root `_headers` file because the repository root is also the build output directory. It defines:

- Security headers for every static page.
- Long-lived immutable caching for files under `assets/` and `css/`.

When adding a new top-level asset that needs custom caching, add an explicit rule to `_headers` or place the asset under `assets/`.

## Deploy

Push a branch to create a preview deployment:

```bash
git push origin your-branch
```

Merge to the production branch to publish the main site. Deployment status and logs are available in the Cloudflare Pages dashboard and on the associated GitHub commit or pull request.

## Custom domain

Manage `dyslexiabuddy.com` from the Cloudflare Pages project under **Custom domains**. The domain is configured in Cloudflare rather than through a repository `CNAME` file.

## Troubleshooting

- **A page returns 404:** Confirm the matching `.html` file exists and internal links use the same filename.
- **Assets do not load:** Keep local asset paths relative and preserve filename casing.
- **Headers are missing:** Confirm `_headers` is present in the deployed output and that the response is a static asset rather than a Pages Function response.
- **A preview is stale:** Check the Pages deployment for the latest commit and review its build logs.

