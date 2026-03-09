# Portfolio

A static portfolio site. No build step, no npm. Open `index.html` in a browser or host the folder on any static host.

## How to view

- **Local:** Open `index.html` in a browser
- **Host:** Upload the folder to GitHub Pages, Netlify, Vercel, or any static host

## Adding a project

1. **Add the tile** — Edit `projects.js` and append to the `PROJECTS` array:

```js
{ slug: "my-project", title: "My Project", subtitle: "Short description", date: "Jan 2026", image: "images/my-project.jpg" },
```

- `slug` — Used for the filename `project-{slug}.html`
- `image` — Path to tile image (e.g. `images/my-project.jpg`) or full URL. Add your image to an `images/` folder.

2. **Create the project page** — Duplicate any existing `project-*.html` (e.g. `project-example-project.html`), rename to `project-my-project.html`, and customize the content and layout for that project.

## Project page personalities

Each project page can have a distinct layout and content:

- **project-example-project.html** — Hero image, tech stack tags, Overview / Tech / Outcome sections
- **project-platform-beta.html** — Split layout, timeline, gallery grid
- **project-tool-experiment.html** — Pull quote, problem/solution blocks, minimal hero

Copy the structure that fits best and customize the sections, copy, and images.

## File structure

```
index.html              — Portfolio grid
about.html              — About page
project-{slug}.html     — Individual project pages (one per project)
projects.js             — Project data (add tiles here)
styles.css              — Shared styles
images/                 — Add your project images here
```
