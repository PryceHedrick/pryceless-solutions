# Pryceless Solutions

**Full-Stack Web Development & AI Consulting**

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

Portfolio and business website for **Pryceless Solutions** — web development, AI integration consulting, and custom software solutions for small businesses.

**Live:** [prycehedrick.com](https://www.prycehedrick.com)

---

## Features

- Animated particle background
- Interactive project showcase with modal details
- Responsive design (mobile-first)
- Contact form with Formspree
- Calendly booking integration
- SEO optimized with Open Graph tags

---

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Build

```bash
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

---

## Project Structure

```
pryceless-solutions/
├── .claude/              # Claude Code configuration
│   ├── rules/            # Agent behavior rules
│   ├── skills/           # Custom skills (command-center, agents)
│   └── CLAUDE.md         # Main AI instructions
├── docs/                 # Documentation and TODOs
├── public/               # Static assets (favicons, images)
│   └── images/portfolio/ # Portfolio screenshots
├── scripts/              # Build utilities
├── src/
│   ├── components/       # React UI components
│   │   ├── layout/       # Layout components (Navigation, Footer)
│   │   └── motion/       # Animation components (FadeIn, etc.)
│   ├── config/           # App configuration
│   ├── data/             # Static data (SEO, blog posts)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   │   ├── areas/        # Service area pages
│   │   ├── blog/         # Blog pages
│   │   └── industries/   # Industry pages
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind + global styles
├── index.html            # Vite entry HTML
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── vercel.json           # Vercel deployment config
```

---

## Deployment

Auto-deploys to Vercel on push to main branch.

---

## Contact

**Pryce Hedrick**
[prycehedrick.com](https://www.prycehedrick.com) | [GitHub](https://github.com/PryceHedrick) | [prycehedrick@gmail.com](mailto:prycehedrick@gmail.com)
