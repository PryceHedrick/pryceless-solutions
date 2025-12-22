// EDIT: Footer navigation links
const footerLinks = {
  services: [
    { label: 'Custom Websites', href: '#service-custom-websites' },
    { label: 'Web Applications', href: '#service-web-applications' },
    { label: 'E-Commerce', href: '#service-ecommerce' },
    { label: 'API Integration', href: '#service-api-integration' },
    { label: 'Consulting', href: '#service-consulting' }
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ]
}

// EDIT: Social media links
const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prycehedrick/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    // EDIT: Replace with your GitHub URL
    href: 'https://github.com/PryceHedrick',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
      </svg>
    )
  }
]

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1))
      if (element) {
        const navHeight = 80
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - navHeight

        // Use manual smooth scroll for better iOS Safari support
        const startPosition = window.scrollY
        const distance = targetPosition - startPosition
        const duration = 800
        let startTime = null

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

        const animateScroll = (currentTime) => {
          if (startTime === null) startTime = currentTime
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          const easeProgress = easeOutCubic(progress)

          window.scrollTo(0, startPosition + distance * easeProgress)

          if (progress < 1) {
            requestAnimationFrame(animateScroll)
          }
        }

        requestAnimationFrame(animateScroll)
      }
    }
  }

  return (
    <footer className="bg-dark-800/50 border-t border-dark-700/50">
      <div className="section-container py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#hero')
              }}
              className="flex items-center gap-2 mb-4"
            >
              {/* EDIT: Logo - Match your navbar logo */}
              <div className="w-9 h-9 flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M12 8L4 16L12 24" stroke="url(#footerGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 8L28 16L20 24" stroke="url(#footerGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="footerGrad" x1="4" y1="8" x2="28" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6"/><stop offset="1" stopColor="#22D3EE"/></linearGradient></defs></svg>
              </div>
              <span className="text-xl font-bold text-white">
                Pryceless <span className="gradient-text">Solutions</span>
              </span>
            </a>

            <p className="text-gray-400 mb-6 max-w-md">
              {/* EDIT: Footer tagline */}
              Custom web development and digital solutions for entrepreneurs and small businesses. Let's build something great together.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-700 hover:bg-primary-500/20 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              {/* EDIT: Copyright text */}
              &copy; {currentYear} Pryceless Solutions. All rights reserved.
            </p>

            {/* Optional: Additional footer links */}
            <div className="flex gap-6 text-sm">
              {/* EDIT: Add privacy policy / terms links if needed */}
              {/*
              <a href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
