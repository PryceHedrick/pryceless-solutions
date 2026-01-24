import useScrollAnimation from '../hooks/useScrollAnimation'
import { trackCTAClick } from '../utils/analytics'

const comparisonOptions = [
  {
    name: 'DIY Tools',
    subtitle: 'Wix, Squarespace, etc.',
    tagline: "It's Cheap, But...",
    color: 'gray',
    points: [
      { text: 'Template look — you blend in', negative: true },
      { text: '40+ hours of your time', negative: true },
      { text: 'No SEO help', negative: true },
      { text: 'You maintain it forever', negative: true }
    ]
  },
  {
    name: 'Agencies',
    subtitle: 'Design firms',
    tagline: "It's Pro, But...",
    color: 'gray',
    points: [
      { text: '$5,000+ cost to start', negative: true },
      { text: 'Monthly retainer fees', negative: true },
      { text: 'Slow turnaround (weeks)', negative: true },
      { text: 'Cookie-cutter process', negative: true }
    ]
  },
  {
    name: 'Pryceless Solutions',
    subtitle: 'Best of both',
    tagline: 'Custom Without the Hassle',
    color: 'primary',
    highlighted: true,
    points: [
      { text: 'Custom design — stand out', negative: false },
      { text: 'One-time price, you own it', negative: false },
      { text: '2-week average delivery', negative: false },
      { text: 'Built for your business', negative: false }
    ]
  }
]

function WhyNotDIY({ className = '' }) {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 })

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
    <section className={`py-16 lg:py-24 bg-dark-800/30 ${className}`}>
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">
            Why Not Just Use <span className="gradient-text">Wix or Hire an Agency?</span>
          </h2>
          <p className="section-subheading">
            You have options. Here&apos;s how they stack up.
          </p>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Tired of fighting with Wix at midnight?
            <br />
            <span className="text-primary-400 font-medium">Your website should be bringing in customers, not eating your weekends.</span>
          </p>
        </div>

        {/* Comparison Cards */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {comparisonOptions.map((option, index) => (
            <ComparisonCard key={index} option={option} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 transition-all duration-700 delay-300 ${
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button
            onClick={() => {
              trackCTAClick('why_not_diy_see_process')
              scrollToSection('how-it-works')
            }}
            className="btn-secondary text-base px-6 py-3 group"
          >
            See How It Works
            <svg
              className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

function ComparisonCard({ option, index }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`glass-card p-6 lg:p-8 h-full transition-all duration-300 ease-out ${
          option.highlighted
            ? 'border-primary-500/50 bg-primary-500/5 hover:bg-primary-500/10'
            : 'hover:bg-dark-700/50'
        } hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/10`}
      >
        {/* Header */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className={`text-xl font-bold ${option.highlighted ? 'text-primary-400' : 'text-white'}`}>
              {option.name}
            </h3>
            {option.highlighted && (
              <span className="px-2 py-1 text-xs font-medium bg-primary-500/20 text-primary-400 rounded-full">
                Recommended
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500">{option.subtitle}</p>
        </div>

        {/* Tagline */}
        <p className={`text-sm font-medium mb-4 ${option.highlighted ? 'text-green-400' : 'text-yellow-400'}`}>
          {option.tagline}
        </p>

        {/* Points */}
        <ul className="space-y-3">
          {option.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              {point.negative ? (
                <svg className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
              <span className={point.negative ? 'text-gray-400' : 'text-gray-300'}>
                {point.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WhyNotDIY
