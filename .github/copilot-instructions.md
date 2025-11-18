# AI Agent Instructions for portfolio4

Quick, actionable notes to get an AI coding agent productive in this Vite + React + TypeScript portfolio.

## What this project is

- Small Vite + React (TS) portfolio app. Source lives in `src/`. Build output goes to `dist/`.
- Key files:
  - `src/main.tsx` — app entry; imports Bootstrap CSS: `import "bootstrap/dist/css/bootstrap.css"`
  - `src/App.tsx` — main component (currently uses `ListGroup`)
  - `src/components/` — UI components; `Message/` has its own `message.css` file, while `ListGroup.tsx` is a standalone component.
  - `public/vite.svg` — static public asset referenced from `index.html`
  - `src/assets/react.svg` — imported inside `App.tsx`

## Build & preview (how I actually run this repo)

All commands are run in the repository root (Windows PowerShell):

```powershell
cd C:\Users\Administrator\Documents\REACTJS\portfolio4
npm install
npm run build    # runs `tsc && vite build`
npm run preview  # serves the `dist/` output locally (default http://localhost:4173)
```

Notes:

- A successful production build creates `dist/` with hashed assets. In this repo `tsc && vite build` completes without extra configuration.
- `bootstrap` CSS is imported in `src/main.tsx` so no extra CSS bundling steps are required.

## Project conventions & patterns (from reading the code)

- Components are function components with default exports (e.g., `export default ListGroup`).
- Component styles, when present, live next to the component (e.g., `src/components/Message/message.css`) and are imported by the component.
- Simple UI data (e.g., the list in `ListGroup.tsx`) is inlined in the component.
- Types: explicit React event types are used (example: `MouseEvent` in `ListGroup.tsx`).

## Production-specific gotchas discovered

- Assets: `public/vite.svg` is referenced with an absolute path (`/vite.svg`) so keep that in `public/` (it is present).
- If you deploy to a non-root path, set `base` in `vite.config.ts` (current config uses default root base).
- `package.json` build script runs `tsc` first — TypeScript errors will block the build; run `npm run build` to surface them.

## Quick tasks an AI agent can do safely

- Add small SEO/meta tags to `index.html` (already added): description, theme-color.
- Validate assets and paths (`src/assets` vs `public/`) — `react.svg` is in `src/assets`, `vite.svg` is in `public/`.
- Run `npm install` and `npm run build` to validate production build (done).

## Where to look for examples

- `src/components/ListGroup.tsx` — event handler typing and simple list rendering
- `src/components/Message/Message.tsx` + `message.css` — component-specific stylesheet import
- `src/main.tsx` — app bootstrap; where global CSS (Bootstrap) is imported

If any section is unclear or you want me to add deploy-specific notes (Netlify, GitHub Pages, Cloudflare Pages), tell me the target platform and I will append hosting steps and recommended `vite.config` changes.
