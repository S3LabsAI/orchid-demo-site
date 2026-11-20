# Orchid Agency Group: website redesign

Project overview, interactive demo site, and design system for the orchidag.com redesign.
One Next.js app, deployed as a single Vercel project.

| Route | What it is |
| --- | --- |
| `/` | Project overview: links to both deliverables, what to try, design decisions, launch checklist |
| `/demo` | Demo site home |
| `/demo/meet-the-team-1` | Demo team page |
| `/demo/contact` | Demo contact and quote form (accepts `?interest=commercial,personal,trucking`) |
| `/design-system` | Orchid design system, a self-contained HTML export in `public/design-system/index.html` |

`/contact` and `/meet-the-team-1` redirect to their `/demo` pages, so links shared before the move keep working.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

1. In Vercel, choose **Add New → Project** and import `S3LabsAI/orchid-demo-site`.
2. Leave the defaults: Framework **Next.js**, build command `next build`, output directory unset, root directory `./`.
3. No environment variables are needed. Deploy.

Node 20.9 or newer is required (set in `package.json` `engines`). Vercel picks it up automatically.

If a deploy ever shows pages with missing styles, redeploy with **Use existing build cache** turned off.

## Design

- Layout follows the InsurePages Fernbrook template (https://www.insurepages.com/demos/fernbrook/).
- Colors come from the Orchid design system (`/design-system`). Fernbrook's green and rust became Orchid 900 and Orchid 600.
- Type: Newsreader (headlines), Karla (body), IBM Plex Mono (labels), loaded with `next/font`.
- Fernbrook's testimonials and sample prices were left out because Orchid has no real ones yet; the carrier partners section sits in that slot.

## Before the demo replaces the live site

- The contact form is simulated. Wire `onSubmit` in `src/components/contact-form.tsx` to a real endpoint.
- The SMS consent line is generic. Replace it with Orchid's actual SMS disclaimer.
- Team photos and carrier logos load from the current GoDaddy CDN (`img1.wsimg.com`). Copy them into `public/` before the old site is retired.
- Privacy and Terms links point at the current site's pages.
- Phi's headshot is a circular crop; a rectangular one would match Lan's.

## Where things live

- Overview page: `src/app/page.tsx`
- Demo pages and layout: `src/app/demo/`
- Design tokens and component classes: `src/app/globals.css`
- All demo copy and facts: `src/lib/site.ts`
- Components: `src/components/`
- Overview screenshots: `public/overview/`
