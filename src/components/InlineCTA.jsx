import useScrollAnimation from '../hooks/useScrollAnimation'

// Pre-defined CTA variants for different sections
const ctaVariants = {
  services: {
    headline: "Not sure which service fits?",
    subtext: "Let's discuss your project and find the perfect solution.",
    buttonText: "Book a Free Consultation",
    gradient: "from-blue-500 to-cyan-500"
  },
  portfolio: {
    headline: "Your project could be next",
    subtext: "Ready to bring your idea to life?",
    buttonText: "Start Your Project",
    gradient: "from-purple-500 to-pink-500"
  },
  pricing: {
    headline: "Ready to get started?",
    subtext: "Let's talk about your project and create a custom quote.",
    buttonText: "Get a Free Quote",
    gradient: "from-primary-500 to-cyan-400"
  }
}

function InlineCTA({ variant = 'services', className = '' }) {
  const [ctaRef, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const content = ctaVariants[variant] || ctaVariants.services

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      ref={ctaRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background gradient glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${content.gradient} opacity-5 blur-3xl`} />

      <div
        className={`relative glass-card p-8 lg:p-10 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Decorative elements */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r ${content.gradient} rounded-full`} />

        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
          {content.headline}
        </h3>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          {content.subtext}
        </p>

        <button
          onClick={scrollToContact}
          className="btn-primary inline-flex items-center gap-2 group"
        >
          {content.buttonText}
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default InlineCTA
