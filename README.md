# Ibad Jahangir — Precision Studio Portfolio

A responsive personal portfolio for **Ibad Jahangir**, an AI & Software Developer, Aspiring Data Analyst, and Mathematician based in Multan, Pakistan.

**Tagline:** Where Mathematics Meets Technology.

## Design direction

Precision Studio uses a deep green-black base, warm ivory typography, and restrained gold accents. The visual language is based on software interfaces, structured data, dashboards, and product workflows rather than mathematical equations or blackboard motifs.

## Features

- Dark and light themes; system preference on first visit and saved user choice
- Responsive navigation, skip link, keyboard focus styles, and reduced-motion support
- Animated professional role headline (static with reduced motion)
- Data-driven content in `data.js`
- Skills, capability cards, project case studies, education, and interests
- Case-study dialogs with implementation/development/planned status distinctions
- Keyboard command palette (Ctrl/Cmd + K)
- Scroll progress, active navigation, reveal transitions, and back-to-top control
- Email copy action and accessible toast feedback
- Contact form validates fields and opens the visitor's email application with a pre-filled message; it does not send messages through a backend
- Conditional LinkedIn, phone, CV, and credentials content
- SEO metadata, Open Graph preview, JSON-LD Person data, and custom 404 page

## Technologies

- HTML5
- CSS3 (custom properties, responsive layout, reduced-motion handling)
- Vanilla JavaScript (no framework, backend, paid API, or API key)
- Inline CSS illustrations

Google Fonts (Bricolage Grotesque, DM Sans, JetBrains Mono) are loaded remotely with system fallbacks.

## Project structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── data.js
├── README.md
├── 404.html
└── assets/
    ├── favicon/
    │   └── favicon.svg
    └── images/
        └── og-image.svg
```

## Verified project notes

### ORVEXA — AI Workspace

ORVEXA is described as an AI workspace product in development. No ORVEXA repository was present among the repositories accessible through the connected GitHub account during this update. Therefore, its stack and module-by-module implementation status could not be independently verified. The portfolio labels the workspace as in development and lists possible modules as planned concepts.

### Hospital Management System

The private `EbadJahangir/Medicare-HMS` repository was inspected on branch `feature/full-implementation`. Its README documents Flask (Python), PostgreSQL, vanilla JavaScript ES modules, and pytest. Documented areas include authentication, patients, doctors, departments, appointments, prescriptions, billing, pharmacy, reports, dashboard, and audit logging. The repository is private, so no public project repository link is shown.

The repository README documents 81 automated tests. This portfolio update did not execute those tests or independently run the application, so no test pass or live-deployment claim is made here.

## Run locally

Open `index.html` in a modern browser, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Edit your content

Most portfolio content lives in `data.js`:

- Profile details and links: `profile`
- About paragraphs: `about`
- Skills: `skills`
- Capability cards: `capabilities`
- Project summaries, stack, status, and case-study details: `projects`
- Education: `education`
- Interests: `interests`
- Credentials: `credentials` and `showCredentials`

Only add links, technologies, features, credentials, or project statuses that can be verified.

## Add optional content

- **LinkedIn:** set `profile.linkedin` to the real profile URL.
- **Phone:** set `profile.phone` to the number intended for public display.
- **CV:** add `assets/cv/Ibad_Jahangir_CV.pdf` and set `profile.cv` to that relative path.
- **Photo:** add a real image and implement its display only when supplied.
- **Certificates:** add real entries to `credentials` and set `showCredentials: true`.
- **Project screenshots:** add genuine screenshots from the project and update the project visual gallery; current project art is explicitly captioned as concept illustration.

## Customize colors

Edit the CSS custom properties at the top of `style.css`. Dark and light theme tokens are defined separately.

## Deploy on GitHub Pages

1. Open repository **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select `main` and `/(root)`, then save.
4. Wait for GitHub Pages to publish.

Expected URL after Pages is enabled: https://ebadjahangir.github.io/Ibad-demo/

## Deploy on Vercel

Import this repository in Vercel, choose the **Other** framework preset, leave build command and output directory empty, and deploy as a static site.

## Git publishing commands

For an existing local clone:

```bash
git add .
git commit -m "Update portfolio to Precision Studio"
git push origin main
```

Do not force-push over existing history.

## Validation status

GitHub source files and the private HMS README were inspected for this update. The site has not been run in a browser, tested at every requested viewport, audited with Lighthouse, or subjected to an automated accessibility scan in this environment. No Lighthouse score or browser-test pass is claimed.
