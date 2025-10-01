# Portfolio — Ranjan Shrestha

This repository contains a personal portfolio website for Ranjan Shrestha. It is a simple static site built with HTML, CSS and JavaScript and is intended to be hosted on GitHub Pages.

Contents
- `index.html` — main page
- `styles.css` — styling
- `script.js` — dynamic rendering and interactions

Local development

You can preview the site locally by opening `index.html` in your browser. For a simple local server (recommended to test routing and fetches), run:

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deploying to GitHub Pages

1. Push the repository to GitHub under your username (for a user site): `github.com/<your-username>/<your-username>.github.io`.
2. Enable GitHub Pages in repository settings (use the `main` branch and `/ (root)` folder).
3. Wait a few minutes and your site will be available at `https://<your-username>.github.io`.

Notes & next steps
- Replace placeholder content (projects, experiences) in `script.js` with your real details.
- Add images, a resume PDF, or analytics as needed.
- For a build pipeline and better asset handling, consider migrating to a static site generator or a framework like Next.js.

License: Personal portfolio (feel free to reuse and adapt)