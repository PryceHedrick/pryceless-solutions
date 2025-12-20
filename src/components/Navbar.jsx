import { useState, useEffect } from 'react'

// EDIT: Navigation links - Add or remove sections here
const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'What I Build' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-900/90 backdrop-blur-lg shadow-lg shadow-black/20 py-3'
            : 'bg-dark-900/50 backdrop-blur-sm py-5'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }} className="flex items-center gap-2 group">
              <div className="w-9 h-9 flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                  <path d="M12 8L4 16L12 24" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 8L28 16L20 24" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs><linearGradient id="logoGrad" x1="4" y1="8" x2="28" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6"/><stop offset="1" stopColor="#22D3EE"/></linearGradient></defs>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Pryceless<span className="gradient-text">Solutions</span></span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id) }} className={`nav-link ${activeSection === link.id ? 'active' : ''}`}>{link.label}</a>
              ))}
              <a href="https://www.linkedin.com/in/prycehedrick/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/PryceHedrick" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                </svg>
              </a>
              <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm">Book a Call</button>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-300 hover:text-white transition-colors z-50" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)} />

      <div className={`fixed top-0 right-0 h-full w-72 bg-dark-900/95 backdrop-blur-lg z-40 md:hidden transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <div className="flex-1 space-y-2">
            {navLinks.map((link, index) => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id) }}
                className={`block py-3 px-4 rounded-lg transition-all duration-200 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} ${activeSection === link.id ? 'bg-primary-500/20 text-primary-400 border-l-2 border-primary-500' : 'text-gray-300 hover:bg-dark-700/50 hover:text-white hover:pl-6'}`}
                style={{ transitionDelay: `${index * 50 + 100}ms` }}>{link.label}</a>
            ))}
          </div>
          <button onClick={() => scrollToSection('contact')} className={`btn-primary w-full text-sm transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '350ms' }}>Book a Call</button>
          <div className="absolute left-0 top-20 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        </div>
      </div>
    </>
  )
}

export default Navbar
