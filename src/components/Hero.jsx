import { useEffect, useRef } from 'react'

function Hero() {
  const canvasRef = useRef(null)

  // Animated particle background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#0f172a')
      gradient.addColorStop(0.5, '#1e293b')
      gradient.addColorStop(1, '#0f172a')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    resizeCanvas()
    createParticles()
    drawParticles()

    window.addEventListener('resize', () => {
      resizeCanvas()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900 z-10" />

      {/* Content */}
      <div className="relative z-20 section-container text-center py-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge with pulse animation */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/50 border border-primary-500/30 text-gray-300 text-sm mb-8 animate-fade-in animate-badge-pulse">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>
            {/* EDIT: Badge text */}
            Available for new projects
          </div>

          {/* Problem-Focused Headline */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-up font-medium">
            Your business deserves more than a template
          </h2>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            {/* EDIT: Business name */}
            Pryceless <span className="gradient-text">Solutions</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-6 animate-fade-in-up delay-100">
            {/* EDIT: Tagline */}
            Your Vision. Built Right.
          </p>

          {/* Value Proposition */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            {/* EDIT: Value proposition */}
            Professional websites for local businesses who can&apos;t afford to look unprofessional. We listen first, build second.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-4 group"
            >
              {/* EDIT: Primary CTA text */}
              <span className="sm:hidden">Free Consultation</span>
              <span className="hidden sm:inline">Book a Free Consultation</span>
              <svg
                className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg"
            >
              {/* EDIT: Secondary CTA text */}
              See My Work
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 text-sm text-gray-400 animate-fade-in-up delay-400">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No Monthly Fees
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              You Own Everything
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              2-Week Delivery
            </span>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-500 hover:text-primary-400 transition-colors"
              aria-label="Scroll down"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
