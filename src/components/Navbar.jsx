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
