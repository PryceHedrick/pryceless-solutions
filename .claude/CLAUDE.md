# CLAUDE.md - Pryceless Solutions

## Project Overview
Portfolio website for Pryceless Solutions - a freelance web development consultancy.

## Tech Stack
- React 18
- Vite 5
- Tailwind CSS 3.4
- PostCSS + Autoprefixer

## Commands
```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # ESLint check
```

## Project Structure
```
src/
├── components/    # React components (Hero, About, Services, etc.)
├── hooks/         # Custom hooks (useScrollAnimation)
├── App.jsx        # Main app
├── main.jsx       # Entry point
└── index.css      # Global styles + Tailwind
```

## Key Components
- `Hero.jsx` - Landing section with particle animation
- `Services.jsx` - Service offerings
- `Portfolio.jsx` - Project showcase
- `Pricing.jsx` - Pricing tiers
- `Contact.jsx` - Contact form (uses Formspree)

## Editing Content
Look for `// EDIT:` comments in components to find editable content sections.

## Styling
- Uses Tailwind CSS utility classes
- Custom colors defined in `tailwind.config.js`
- Dark theme with blue accent colors
