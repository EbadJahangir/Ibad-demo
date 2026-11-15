# Ibad Jahangir — Personal Portfolio

A static, responsive portfolio for **Ibad Jahangir** — AI & Software Developer | Aspiring Data Analyst | Mathematician.

**Tagline:** Where Mathematics Meets Technology.  
**Location:** Multan, Pakistan.

## Stack
HTML5, CSS3, and Vanilla JavaScript only. No framework, build step, npm dependency, or backend is required. Google Fonts are optional external font requests; local fallback stacks remain available.

## Features
- Green-black + gold editorial design with dark/light themes and persisted preference
- Early theme preference initialization to reduce theme flash
- Responsive navigation, skip link, visible keyboard focus, reduced-motion support
- Static professional role text and lightweight hero network canvas
- Data-driven profile, skills, capabilities, projects, education, and interests in `data.js`
- CSS project previews labelled “Interface illustration”; real screenshots are labelled “Project screenshot” only when supplied
- ORVEXA is a concept in development; all eight modules are **Planned**, with no implemented-feature claims
- HMS case study documents all working modules, including reporting and role-scoped views
- Native case-study and gallery dialogs, command palette (Ctrl/Cmd+K), copy-email toast
- Scroll progress, active navigation, reveal transitions, and back-to-top
- Contact form validation, honeypot, mailto default, optional Formspree
- Conditional CV, phone, and credentials content
- SEO metadata, canonical URL, Open Graph/Twitter tags, JSON-LD, favicon, 404, robots, sitemap

## Project structure
```
Ibad-demo/
├── index.html
├── style.css
├── script.js
├── data.js
├── README.md
├── 404.html
├── robots.txt
├── sitemap.xml
├── favicon.svg
└── assets/
    ├── favicon/favicon.svg
    └── images/
        ├── hero-workspace.svg
        ├── og-image.svg
        ├── og-image.png
        └── og-preview.svg
```

## Edit content in data.js

`data.js` is the source of truth for JavaScript-rendered content. The static HTML fallback in `index.html` is retained for JavaScript-disabled or `data.js`-failure cases; keep skills, capabilities, projects, module lists, education, interests, profile links, and availability in sync. When JavaScript loads successfully, the renderer replaces fallback containers rather than appending duplicate content.
- `profile`: identity, links, availability, optional photo/CV/phone
- `about`: three About paragraphs
- `skills`: three skill categories and tags
- `capabilities`: What I Build cards and project references
- `projects`: descriptions, statuses, stack, case-study detail, modules, optional `repoUrl`, live links, and screenshots. Leave `repoUrl` empty until a real project repository exists.
- `education`: degree, institution, department, location, semester
- `interests`: eight interests
- `credentials` and `showCredentials`: optional credentials
- `formEndpoint`: optional Formspree endpoint (empty means mailto)

Keep claims factual. ORVEXA modules are listed as planned; don't mark them implemented without evidence.

## Optional assets and integrations
- **CV:** add `assets/cv/Ibad_Jahangir_CV.pdf`, then set `profile.cv` to its relative path. The CV CTA appears when the file is detected.
- **Portrait:** add a real portrait under `assets/images/` and set `profile.photo`.
- **Screenshots:** add real project images under `assets/images/`, then add relative paths to a project's `screenshots` array. The existing gallery/lightbox will use them. Current project art is illustrative UI, not a product screenshot. The script switches the label to “Project screenshot” only when a valid image replaces the illustration.
- **Phone:** set `profile.phone` only if you want it public.
- **Credentials:** add genuine entries and set `showCredentials: true`.
- **Formspree:** create a form at [Formspree](https://formspree.io/), copy its endpoint into `formEndpoint` in `data.js`, then test delivery. This is a one-line configuration change. Empty endpoint uses a prefilled mailto and does not send from the website.

## Current QA status

Source-level JavaScript parsing, HTML ID/anchor checks, project-content checks, and metadata checks have been run for this update. The `node --check` command and browser/device testing have not been run in this environment; no Lighthouse score is claimed.

## Run locally
Open `index.html` or run:
```bash
python -m http.server 8000
```
Visit http://localhost:8000.

## Deploy
### GitHub Pages
Repository Settings → Pages → Deploy from a branch → `main` → `/(root)`.  
Primary URL is `https://ebadjahangir.github.io/Ibad-demo/`. Keep the canonical URL, sitemap URL, `og:url`, `og:image`, and `twitter:image` on this same primary domain; update all of them together if a custom domain is added.

### Vercel
Import the repository as **Other** / static. No build command; output directory is the repository root.

## Manual QA checklist
- [ ] Open deployed site and verify all sections/links
- [ ] Test widths 360, 390, 768, 1024, 1280, and 1536px (no horizontal overflow)
- [ ] Toggle themes; verify saved preference and contrast
- [ ] Test mobile menu using keyboard and touch
- [ ] Open/close case study and gallery with Escape, backdrop, and close button; verify focus returns
- [ ] Use command palette with Ctrl/Cmd+K, arrows, Enter, Escape
- [ ] Test copy email and toast
- [ ] Submit empty/invalid/valid form; test mailto and configured Formspree delivery
- [ ] Test with reduced motion enabled
- [ ] Verify CV appears only when PDF exists
- [ ] Run Lighthouse mobile and accessibility audit
- [ ] Confirm GitHub Pages deployment and canonical URL

## Verification boundaries
Source-level checks do not replace browser testing. No Lighthouse score, real-device test, or live Formspree delivery should be claimed unless run.
