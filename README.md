# Binita Shrestha — Portfolio

A responsive personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. To build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx      – fonts, metadata, root HTML shell
  page.tsx         – assembles all sections
  globals.css       – Tailwind layers + base styles
  robots.ts / sitemap.ts – basic SEO files
components/          – one component per section (Navbar, Hero, About, ...)
data/                – all editable content (site.ts, skills.ts, projects.ts, experience.ts, education.ts, services.ts)
lib/utils.ts         – small class-name helper
```

Content lives in `data/`, not inside the components — to update text, edit the data files, not the `.tsx` files.

## Before you publish — checklist

Everything here was pulled from your resume, but a few things need your input:

- [ ] **Social links** — `data/site.ts`: add your real GitHub and LinkedIn URLs.
- [ ] **Project links** — `data/projects.ts`: add real GitHub repo URLs, and a `liveUrl` for any project that's deployed.
- [ ] **Project tech stacks** — `data/projects.ts`: the listed technologies are a best guess based on your skill set; confirm they're accurate.
- [ ] **Skills** — `data/skills.ts`: I included some categories (Backend, Database, "Other") based on the brief you wrote, not your resume directly — remove anything you're not confident discussing in an interview.
- [ ] **Office Assistant responsibilities** — `data/experience.ts`: I wrote a placeholder description based on your soft skills; replace with your real day-to-day duties.
- [ ] **Domain** — `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`: replace `your-portfolio-domain.com` with your real domain once deployed.
- [ ] **Project images** — currently each project card uses a simple gradient placeholder instead of a screenshot. Drop real screenshots into `public/images/` (recommended: 800×450px, `.webp` or `.jpg`) and swap the placeholder `<div>` in `components/Projects.tsx` for an `<Image>` from `next/image`.
- [ ] **Contact form** — `components/Contact.tsx`: the form validates input but doesn't send anywhere yet. Wire it to a real backend, e.g.:
  - A Next.js API route (`app/api/contact/route.ts`) using [Resend](https://resend.com) or Nodemailer, or
  - A form backend like [Formspree](https://formspree.io) (no server code needed).

## Notes

- Fonts (Quicksand + Inter) load from Google Fonts at build time via `next/font/google` — this requires internet access during `npm run build`.
- All animations respect `prefers-reduced-motion`.
- Colors and fonts are defined once in `tailwind.config.ts` — change the `primary` palette there to re-theme the whole site.
