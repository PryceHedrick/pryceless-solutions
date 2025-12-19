# Pryceless Solutions - Portfolio Website

A professional portfolio and business website for Pryceless Solutions, a freelance web development and digital solutions consultancy.

## Quick Start

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

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

Your site will be live at `your-project.vercel.app`. You can add a custom domain in project settings.

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## Project Structure

```
pryceless-solutions/
├── public/
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Hero.jsx          # Hero section with particle animation
│   │   ├── About.jsx         # About section
│   │   ├── HowItWorks.jsx    # Process steps
│   │   ├── Services.jsx      # Services offered
│   │   ├── Portfolio.jsx     # Project showcase
│   │   ├── Credentials.jsx   # Awards & tech stack
│   │   ├── Testimonials.jsx  # Client testimonials
│   │   ├── Pricing.jsx       # Pricing tiers
│   │   ├── FAQ.jsx           # FAQ accordion
│   │   ├── Contact.jsx       # Contact form
│   │   ├── Footer.jsx        # Site footer
│   │   └── BackToTop.jsx     # Scroll to top button
│   ├── hooks/
│   │   └── useScrollAnimation.js  # Scroll animation hook
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles & Tailwind
├── index.html                # HTML template with SEO meta
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies
```

## How to Update Content

All editable content is marked with `// EDIT:` comments. Here's where to find each section:

### Business Information
- **Site Title & Meta**: `index.html` - Update SEO meta tags
- **Tagline**: `src/components/Hero.jsx` - Look for EDIT comments
- **About Content**: `src/components/About.jsx` - Personal bio and highlights

### Services & Pricing
- **Services**: `src/components/Services.jsx` - Modify the `services` array
- **Pricing Tiers**: `src/components/Pricing.jsx` - Modify the `pricingTiers` array
- **FAQ Items**: `src/components/FAQ.jsx` - Modify the `faqItems` array

### Portfolio Projects
Edit `src/components/Portfolio.jsx` - modify the `projects` array:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    shortDescription: 'Brief description',
    fullDescription: 'Detailed description...',
    image: '/path-to-image.jpg', // Add image path
    tags: ['React', 'Node.js'],
    features: ['Feature 1', 'Feature 2'],
    links: {
      github: 'https://github.com/...',
      live: 'https://yoursite.com'
    }
  },
  // Add more projects...
]
```

### Testimonials
Edit `src/components/Testimonials.jsx` - modify the `testimonials` array with real client feedback.

### Contact Form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form and copy your form ID
3. In `src/components/Contact.jsx`, replace `YOUR_FORM_ID`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### Social Links
- **Footer**: `src/components/Footer.jsx` - Update `socialLinks` array
- **LinkedIn**: Already set to your profile
- **GitHub**: Update the URL in the `socialLinks` array

### Navigation
Edit `src/components/Navbar.jsx` - modify the `navLinks` array to add/remove sections.

## How to Add Images

### Profile Photo
1. Add your image to `public/` folder (e.g., `public/profile.jpg`)
2. In `src/components/About.jsx`, uncomment and update the image tag:

```jsx
<img src="/profile.jpg" alt="Pryce Hedrick" className="w-full h-full object-cover" />
```

### Project Screenshots
1. Add images to `public/projects/` folder
2. Update the `image` property in the projects array:

```javascript
{
  // ...
  image: '/projects/vault-screenshot.jpg',
  // ...
}
```

### Client Avatars
1. Add images to `public/testimonials/`
2. Update the `avatar` property in testimonials:

```javascript
{
  // ...
  avatar: '/testimonials/client1.jpg',
  // ...
}
```

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    500: '#3b82f6', // Main accent color
    // ...
  },
  dark: {
    900: '#0f172a', // Background color
    // ...
  }
}
```

### Fonts
The site uses Inter font from Google Fonts. To change:

1. Update the font link in `index.html`
2. Update `fontFamily` in `tailwind.config.js`

### Animations
Edit `tailwind.config.js` to modify animation speeds and effects.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Inter Font** - Typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Images**: Use WebP format and optimize file sizes
2. **Fonts**: The site uses `font-display: swap` for faster loading
3. **Build**: Run `npm run build` for optimized production bundle

## Troubleshooting

### Build fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Styles not updating
```bash
# Restart dev server
npm run dev
```

### Form not submitting
- Verify your Formspree form ID is correct
- Check browser console for errors
- Ensure you're on a deployed site (Formspree may not work on localhost)

## License

This project is private and proprietary to Pryceless Solutions.

---

Built with care by Pryce Hedrick
