import { useState, useEffect } from 'react'
import HolidayBanner from './components/HolidayBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Credentials from './components/Credentials'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    // Intersection Observer for section tracking
    const sections = document.querySelectorAll('section[id]')

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="min-h-screen bg-dark-900">
      <HolidayBanner />
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Services />
        <Portfolio />
        <Credentials />
        <WhyWorkWithMe />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
