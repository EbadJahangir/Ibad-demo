# Ibad Jahangir — Signature Portfolio

A responsive personal portfolio built around **The Digital Blackboard**: the meeting point of mathematical thinking and practical technology.

**Tagline:** Where Mathematics Meets Technology.

## About

Ibad Jahangir is an AI & Software Developer, Aspiring Data Analyst, and Mathematician based in Multan, Pakistan. He is pursuing a BS Mathematics degree at Bahauddin Zakariya University (BZU), Department of Mathematics.

## Features

- Digital Blackboard visual system with dark Chalkboard and light Ivory Paper themes
- Responsive layout, reduced-motion support, visible keyboard focus, and semantic landmarks
- Animated mathematical canvas and rotating professional headline
- Keyboard command palette (Ctrl/Cmd + K)
- Scroll progress, active navigation, reveal transitions, and back-to-top control
- Accessible project case-study dialogs
- Email copy action with fallback and live toast feedback
- SEO metadata, Open Graph preview SVG, JSON-LD Person data, and custom 404 page

## Technologies

- HTML5
- CSS3 (custom properties, responsive layout, animations)
- Vanilla JavaScript (no framework or runtime dependency)
- Inline SVG illustrations and Canvas 2D

Google Fonts (Fraunces, Manrope, DM Mono) are loaded remotely; system fallbacks are provided.

## Project structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── 404.html
└── assets/
    ├── favicon/
    │   └── favicon.svg
    └── images/
        └── og-preview.svg
```

## Featured projects — verification notes

### ORVEXA — AI Workspace
A product concept in development. No ORVEXA repository was found among the GitHub repositories accessible during this portfolio update, so the technology stack and module-by-module implementation status are intentionally not claimed. AI Chat, Documents, Research, Tasks, Automations, AI Agents, Knowledge Base, and Settings are shown as planned concept modules.

### Hospital Management System
The private `EbadJahangir/Medicare-HMS` repository was inspected on branch `feature/full-implementation`. Its README documents Python, Flask, PostgreSQL, vanilla JavaScript (ES modules), pytest, and modules covering authentication, patients, doctors, departments, appointments, prescriptions, billing, pharmacy, reports, audit, and dashboard. The repository is private, so no public repository link is presented in the portfolio. The project description is based on repository documentation; this README does not independently execute the application.

## Run locally

Open `index.html` in a modern browser, or start a local server from this folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Customize

- **Colors and typography:** edit CSS custom properties at the top of `style.css`.
- **Text and sections:** edit the semantic markup in `index.html`.
- **Typing roles, project case studies, and interactions:** edit the configuration and feature functions in `script.js`.
- **Links:** update the verified GitHub and email links in the HTML and JavaScript.

## Deploy on GitHub Pages

1. Open repository **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select `main` and `/(root)`, then save.
4. Wait for GitHub Pages to publish. For this repository, the expected URL is https://ebadjahangir.github.io/Ibad-demo/ once Pages is enabled.

## Deploy on Vercel

Import this GitHub repository in Vercel, select the framework preset **Other**, leave the build command and output directory empty, and deploy the static site.

## Git commands

For an existing local clone connected to this repository:

```bash
git add .
git commit -m "Build Digital Blackboard portfolio"
git push origin main
```

For a brand-new local project folder, initialize Git only if you intend to create a separate repository or connect it deliberately:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/EbadJahangir/Ibad-demo.git
git push -u origin main
```

Do not force-push over existing history.

## SEO and social preview notes

The site includes title/description, Open Graph and Twitter metadata, and a JSON-LD Person schema using verified details. Update the canonical URL in `index.html` after the public Pages URL is confirmed. The social preview is an SVG; a PNG export and PNG/apple-touch icon fallback have not been generated in this text-only repository update.

## Validation status

The repository files were reviewed before the update. The code has not been run in a browser or measured with Lighthouse in this environment; responsive behavior, accessibility, and interactive features should be manually checked after deployment. No Lighthouse score is claimed.
