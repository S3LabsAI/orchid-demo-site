# Orchid Agency Group: redesign demo

Interactive demo of the orchidag.com redesign, built from the Orchid design system canvas
(https://claude.ai/code/artifact/6b9e4cc5-65ee-4459-8c90-758668eae226).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

Routes keep the live site's slugs: `/`, `/meet-the-team-1`, `/contact`.

## Before going live

- The contact forms are simulated. Wire `onSubmit` in `src/components/contact-form.tsx` to a real endpoint (and reCAPTCHA if kept).
- The SMS consent line is generic. Replace it with Orchid's actual SMS disclaimer.
- Team photos and carrier logos load from the current GoDaddy CDN (`img1.wsimg.com`). Copy them into `public/` before the old site is retired.
- Privacy and Terms links point at the current site's pages.

## Where things live

- Design tokens and component classes: `src/app/globals.css`
- All copy and facts: `src/lib/site.ts`
- Components: `src/components/`
