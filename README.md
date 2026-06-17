# Courtney Stokes — Portfolio

A minimalistic, pastel-accented multi-page portfolio built with React, TypeScript, Tailwind CSS, Vite, and React Router.

---

## What This Portfolio Is

A multi-page portfolio with these routes:

| Route | Page |
|---|---|
| `/` | Home — Hero, Recent Posts, Campus Involvement, Explore More |
| `#/projects` | Projects — FSU ITS 3D Printing, Hottake, Thrive, SprintLink |
| `#/experience` | Experience — 7-item career timeline |
| `#/prds` | PRDs — Downloadable mock Product Requirement Documents |
| `#/certifications` | Certifications — AI, Project Management, and more |

The **Contact section** appears at the bottom of every page automatically via the shared `Layout.tsx` component.

> **Note:** The app uses `HashRouter` for GitHub Pages compatibility. URLs will look like `yoursite.com/#/projects` instead of `yoursite.com/projects`.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Adding Your Assets

All public assets live in the `public/` folder. **Add these files manually** before deploying.

### Profile Images

| File | Used in |
|---|---|
| `public/assets/profile/headshot.jpg` | Hero section (right side) |
| `public/assets/profile/notion-avatar.png` | Navbar top-left avatar |

The site shows graceful fallbacks (initials "CS") if either image is missing.

### Resume

Place your resume PDF here:

```
public/assets/resume/Courtney-Stokes-Resume.pdf
```

It appears as a download button in the Navbar, Hero, and Contact section.

### PRD Downloads

Place your PRD PDFs here with these **exact filenames**:

```
public/assets/prds/CVS_Health_Medication_Tracker_PRD.pdf
public/assets/prds/Capital_One_Money_Milestones_PRD.pdf
public/assets/prds/Duolingo_Family_Learning_Dashboard_PRD.pdf
public/assets/prds/Thrive_Financial_Literacy_App_PRD.pdf
```

> If the file names differ, update the `downloadHref` values in `src/data/portfolio.ts`.

---

## Editing Content

Almost all site content lives in one file:

```
src/data/portfolio.ts
```

### What you can edit there:

| Export | What it controls |
|---|---|
| `personal` | Name, headline, intro bullets, social links, email |
| `recentPosts` | YouTube video list on the homepage |
| `youtubeChannelUrl` | YouTube channel link in Recent Posts |
| `involvements` | Campus involvement cards |
| `projects` | Project cards on the Projects page |
| `timeline` | Experience timeline items |
| `prds` | PRD cards with download links |
| `certifications` | Certifications list |
| `resumeHref` | Path to the resume PDF |

---

## Page & Component Structure

```
src/
  components/
    Navbar.tsx          — Top nav with avatar, links, Resume button
    Footer.tsx          — Simple colored dot footer
    Layout.tsx          — Shared layout: Navbar + page + Contact + Footer
    Contact.tsx         — "Let's Connect" section shown on every page
    Hero.tsx            — (legacy, kept for reference)
    RotatingGreeting.tsx — Animated greeting in the hero h1
    RecentPosts.tsx     — YouTube editorial list
    Involvement.tsx     — Campus involvement cards
    ExperienceTimeline.tsx — (legacy, kept for reference)
    Projects.tsx        — (legacy, kept for reference)
  pages/
    Home.tsx            — Hero + RecentPosts + Involvement + ExploreMore
    ProjectsPage.tsx    — Projects grid
    ExperiencePage.tsx  — Experience vertical timeline
    PRDPage.tsx         — PRD cards with download buttons
    CertificationsPage.tsx — Certifications list
  data/
    portfolio.ts        — All site content
```

> **Tip:** The Contact section is shared across all pages through `src/components/Layout.tsx`. To edit contact links, update `src/data/portfolio.ts` (`personal`) or `src/components/Contact.tsx`.

---

## Build for Production

```bash
npm run build
```

Output goes to `dist/`.

---

## Deploy to GitHub Pages

### Option 1 — Using `gh-pages` (Recommended)

1. Install the deployment tool:

```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Make sure `vite.config.ts` has the correct `base`:

```ts
base: '/your-repo-name/'
```

4. Deploy:

```bash
npm run deploy
```

### Option 2 — Manual Upload

Run `npm run build`, then push the `dist/` folder to the `gh-pages` branch of your repo.

### React Router + GitHub Pages

This site uses **HashRouter** which works out of the box with GitHub Pages.  
No 404 fallback file or server config is needed.  
Routes will look like: `https://yourname.github.io/your-repo/#/projects`

---

## Replacing Placeholder Links

Search `src/data/portfolio.ts` for `"#"` and replace with real URLs.

---

Built with React · TypeScript · Tailwind CSS · Vite · React Router
