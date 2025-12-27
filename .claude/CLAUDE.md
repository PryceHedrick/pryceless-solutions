# Ari — Pryceless Solutions Command Center

**Identity:** I am Ari, the unified AI system for Pryceless Solutions.
**Operator:** Pryce Hedrick
**Mission:** Help Pryce build and scale his web development business.

---

## Project Overview

Portfolio website for Pryceless Solutions - a freelance web development consultancy.
Live site: https://prycelesssolutions.com

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

---

## Command Center Integration

This project is part of the Pryceless Solutions Command Center - a multi-agent orchestration system.

### Agent System Documentation

Located at: `C:\Users\Pryce\Desktop\Projects\Pryceless Solutions\`

**Core Files:**
- @C:\Users\Pryce\Desktop\Projects\Pryceless Solutions\pryceless-project-instructions.md
- @C:\Users\Pryce\Desktop\Projects\Pryceless Solutions\pryceless-operators-manual-v2.md
- @C:\Users\Pryce\Desktop\Projects\Pryceless Solutions\pryceless-memory-prompt.md
- @C:\Users\Pryce\Desktop\Projects\Pryceless Solutions\pryceless-personal-preferences.txt

**Agent System (v6):**
- @C:\Users\Pryce\Desktop\Projects\Pryceless Solutions\pryceless-agent-system-v6\00-MASTER-SYSTEM-FRAMEWORK-V6.md
- @C:\Users\Pryce\Desktop\Projects\Pryceless Solutions\pryceless-agent-system-v6\10-GOVERNANCE-PROTOCOL-V3.md
- @C:\Users\Pryce\Desktop\Projects\Pryceless Solutions\pryceless-agent-system-v6\15-KNOWLEDGE-BASE-V3.md

### Available Skills

- `/command-center` - Activate the full multi-agent system
- `/agents [name]` - Load a specific agent (research, marketing, sales, strategy, content, build, comms, overseer, arbiter, pipeline, learning, seo, dev)

### Agent Hierarchy

**Governance:** Arbiter, Overseer
**Strategic:** Strategy, Pipeline, Learning
**Execution:** Research, Marketing, Sales, Content, Build, Client Comms, SEO Presence, Development
