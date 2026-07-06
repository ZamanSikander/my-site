# Zaman Sikander Portfolio

Modern portfolio site migrated from Vite/React to Next.js 14 App Router with TypeScript, Tailwind CSS, Framer Motion, dark mode, static SEO files, and static export support for shared hosting.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- `next/font` for font loading
- Static export via `output: 'export'`

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for Hostinger

```bash
npm run build
```

The production files are generated in `out/`. Upload the contents of `out/` to the Hostinger `public_html` directory using FTP or Hostinger File Manager.

## Static Export Notes

- `next.config.mjs` uses `output: 'export'` and `images.unoptimized: true`.
- The project uses plain `<img>` tags for static hosting compatibility.
- There are no API routes, route handlers, server actions, middleware, ISR, or dynamic rendering features.
- `public/sitemap.xml` and `public/robots.txt` are hand-written static files.
- The contact form is UI only. Submission is intentionally not wired up.

## Migrated Content

- Hero copy, bio, services, experience, skills, contact details, social links, and testimonials were migrated from the existing site.
- Existing visual assets were copied into `public/assets` and converted to WebP for the live UI.
- Google Analytics measurement ID `G-B88F4P2GE9` was preserved. Override it with `NEXT_PUBLIC_GA_ID` if needed.

## Placeholders to Replace

- Project links currently use placeholders: `yourportfolio.com`, `yourecommerce.com`, `yourdashboard.com`, and `landingpage.com`.
- Project descriptions are based on the old portfolio placeholders and should be replaced with real case study copy when available.
- The portrait/photo uses the existing illustration asset because the old About section referenced a missing uploaded image.
