# The Penguin Press — UX Case Study

A comprehensive UX case study exploring editorial design for news platforms. Built by Issa Mohamed.

## Project Overview

This case study demonstrates an editorial design system inspired by Bloomberg's data-forward journalism aesthetic, featuring:

- **Landing Page** — Dense, information-rich news homepage with market tickers, multi-column layouts, and live TV banners
- **Article Page** — Long-form reading experience with proper typographic hierarchy, pull quotes, and social sharing
- **Design Language** — Complete documentation of the "Editorial Density" design philosophy

## Tech Stack

- React 18
- React Router v6
- Vite
- CSS-in-JS (inline styles)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Cloudflare Pages Deployment

### Option 1: Connect to Git Repository

1. Push this folder to a GitHub/GitLab repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a new project and connect your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Deploy!

### Option 2: Direct Upload

1. Run `npm run build` locally
2. Go to Cloudflare Pages dashboard
3. Create a new project with "Direct Upload"
4. Upload the `dist` folder

## Project Structure

```
news_app_case_study/
├── public/
│   ├── _redirects          # SPA routing for Cloudflare
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   ├── Exhibition.jsx      # Case study home/landing
│   │   ├── LandingPage.jsx     # News homepage mockup
│   │   ├── ArticlePage.jsx     # Article reading page
│   │   └── DesignLanguage.jsx  # Design system docs
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Routes

- `/` — Case Study Exhibition (home)
- `/landing` — News Landing Page
- `/article` — Article Page
- `/design-language` — Design Language Documentation

## Design Philosophy

**Editorial Density** — where every pixel serves information.

1. **Information First** — Dense layouts that are structured, not chaotic
2. **Hierarchy Through Type** — Typography creates clear paths through complex information
3. **Restrained Color** — Forest green and amber palette creates distinction without distraction

---

*A UX Case Study by Issa Mohamed*
