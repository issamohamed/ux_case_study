# Vesta - Cloud Storage Case Study

A UX/UI case study exploring the concept of cloud storage that feels like home. This project subverts typical anxiety-based storage design patterns with a warm, domestic aesthetic.

## Design Philosophy

**"Already Safe"** — Rather than constantly reminding users about security threats, Vesta communicates safety through the absence of anxiety. Your files aren't "protected"—they're simply *here*.

### Key Design Decisions

- **Warm Orange Palette**: Deliberately avoided blues, greens, and dark palettes typical of storage apps
- **Glassmorphism**: Floating, breathing UI elements over warm gradients
- **Fraunces + DM Sans**: Serif headlines for warmth, clean sans-serif for body
- **Greek Amphora Logo**: Named after the Roman goddess of the hearth

## Tech Stack

- React 18
- Vite 5
- CSS-in-JS (inline styles)
- Google Fonts (Fraunces, DM Sans)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for Cloudflare Pages:

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## Project Structure

```
vesta_case_study/
├── public/
│   ├── vesta-icon.svg    # Favicon
│   └── _redirects        # Cloudflare SPA routing
├── src/
│   ├── main.jsx          # Entry point
│   ├── index.css         # Global styles
│   └── VestaLanding.jsx  # Main component
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Author

**Issa Mohamed** — UX Designer & Developer

---

*Part of the UX Case Study Portfolio*
