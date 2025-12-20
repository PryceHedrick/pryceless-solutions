import { useState, useEffect } from 'react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const baseClasses = "fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-dark-800/90 backdrop-blur-sm border border-primary-500/30 text-primary-400 hover:text-white hover:border-primary-500 hover:bg-primary-500 shadow-lg transition-all duration-300 group"
  const visibilityClasses = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"

  return (
    <button
      onClick={scrollToTop}
      className={`${baseClasses} ${visibilityClasses}`}
      aria-label="Back to top"
    >
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={125.6}
          strokeDashoffset={125.6 - (scrollProgress / 100) * 125.6}
          className="opacity-30 transition-all duration-150"
        />
      </svg>
      <svg className="w-5 h-5 mx-auto group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}

export default BackToTop
