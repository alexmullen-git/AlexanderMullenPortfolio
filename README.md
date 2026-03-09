# Portfolio

A modern, technical portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site redirects `/` to `/portfolio`.

## Code Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, Navbar)
│   ├── page.tsx            # Home → redirects to /portfolio
│   ├── globals.css         # Base styles
│   ├── portfolio/
│   │   ├── page.tsx        # Main portfolio grid
│   │   └── [slug]/
│   │       ├── page.tsx    # Individual project page (dynamic)
│   │       └── not-found.tsx
│   └── about/
│       └── page.tsx        # About Me page
├── components/
│   ├── Navbar.tsx          # Sticky nav (Portfolio, About Me)
│   ├── BackButton.tsx      # Back to portfolio (project pages)
│   ├── ProjectCard.tsx     # Project tile for grid
│   └── Reveal.tsx          # Scroll reveal animation
└── data/
    └── projects.ts         # Project data source
```

## Adding / Editing Projects

**Edit `src/data/projects.ts`:**

- Add a new project by appending to the `PROJECTS` array
- Required: `slug`, `title`, `subtitle`, `date`
- Optional: `image`, `accentColor`, `tags` for future customization
- `slug` is used in URLs: `/portfolio/your-slug`

Example:

```ts
{
  slug: "my-new-project",
  title: "My New Project",
  subtitle: "A brief description",
  date: "Jan 2026",  // flexible: "Summer 2025", "2024–2026", etc.
},
```

## Customizing Project Pages

**Edit `src/app/portfolio/[slug]/page.tsx`:**

- This is the reusable project page shell
- Each project shares this layout until you add custom logic
- Replace the placeholder sections (Overview, Details) with real content
- For per-project layouts, you can branch on `project.slug` or add a `layout` field in `projects.ts` to render different templates

## Customizing the About Page

**Edit `src/app/about/page.tsx`:**

- Replace the placeholder image div with `<Image src="/your-photo.jpg" ... />`
- Replace the placeholder paragraphs with your own text

## Build & Deploy

```bash
npm run build
npm start
```

Project pages are statically generated at build time from the projects in `src/data/projects.ts`.
