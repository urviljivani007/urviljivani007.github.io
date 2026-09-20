# Urvil Jivani — Portfolio (React)

A multi-page personal website built with **React 18 + Vite + React Router**, featuring
dark/light mode and a fully responsive layout. Client-side routing gives real, separate
pages: Home, About, Research, Projects, and Contact.

## Tech

- React 18 + Vite (fast dev server, optimized build)
- React Router v6 (`HashRouter`, so routing works on GitHub Pages with no server config)
- CSS custom properties for theming — one toggle, remembers your choice + system preference
- Zero UI/icon libraries; all icons are inline SVG

## Develop locally

Requires Node 18+.

```bash
npm install
npm run dev      # start dev server (prints a localhost URL)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  main.jsx            # router + route definitions
  App.jsx             # layout (nav, footer, page outlet, scroll-to-top)
  data.js             # ALL content — edit here to update the whole site
  index.css           # theme + styles
  components/         # Navbar, Footer, ThemeToggle, Icons
  pages/             # Home, About, Research, Projects, Contact, NotFound
```

Update text, links, projects, and publications in **`src/data.js`**.

## Deploy to GitHub Pages

Two options:

### A) Automatic (recommended) — GitHub Actions

1. Push this folder to a repo (e.g. `urviljivani007.github.io` or any repo name).
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main`. The included workflow (`.github/workflows/deploy.yml`) builds and deploys.
   Your site goes live at `https://urviljivani007.github.io` (user site) or
   `https://urviljivani007.github.io/<repo>` (project site).

### B) Manual — `gh-pages` branch

```bash
npm run build
# publish the dist/ folder to a gh-pages branch with your preferred method
```

Because `vite.config.js` uses `base: './'` and the app uses `HashRouter`, the same build
works whether it is served from a domain root or a `/repo` subpath — no extra config needed.
