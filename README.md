# Zaman Sikander Portfolio

Professional developer portfolio built with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, dark mode, static SEO files, and static export support for shared hosting.

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

## Portfolio Content

- Hero copy, bio, services, working process, skills, contact details, social links, and client testimonials are maintained in `lib/content.ts` and the section components.
- Project visuals are stored in `public/assets`, with WebP versions used in the live UI where available.
- Google Analytics measurement ID `G-B88F4P2GE9` was preserved. Override it with `NEXT_PUBLIC_GA_ID` if needed.

## Project Links

- Live URLs are included for projects that have a confirmed public website.
- Projects without a public URL remain as portfolio previews and do not render a misleading external link.
