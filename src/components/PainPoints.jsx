import useScrollAnimation from '../hooks/useScrollAnimation'

const painPoints = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    headline: "Your website looks outdated",
    description: "First impressions happen in seconds. An outdated website costs you credibility before visitors even read a word."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    headline: "Customers can't find you",
    description: "If you're not on page one of Google, you're invisible. Local searches lead to local sales—but only if they can find you."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    headline: "You're losing leads daily",
    description: "Every day without a conversion-optimized website is money left on the table. Your competitors aren't waiting."
  }
]

function PainPoints({ className = '' }) {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`py-16 lg:py-20 bg-dark-800 ${className}`}
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary-400 font-medium mb-2 uppercase tracking-wider text-sm">Sound Familiar?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            These problems cost you <span className="text-red-400">real money</span>
          </h2>
        </div>

        {/* Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`glass-card p-6 lg:p-8 text-center group hover:border-red-500/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-300">
                {point.icon}
              </div>

              {/* Headline */}
              <h3 className="text-xl font-bold text-white mb-3">
                {point.headline}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-300 text-lg">
            <span className="text-primary-400 font-semibold">The good news?</span> These are all fixable—and you don&apos;t need to break the bank to do it.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PainPoints
