import useScrollAnimation from '../hooks/useScrollAnimation'

const caseStudies = [
  {
    id: 1,
    client: "Panda International",
    project: "Order Management System",
    description: "Custom OMS that handles everything from order intake to shipping labels",
    image: "/images/portfolio/panda-oms/Panda_OMS_Dashboard.png",
    metrics: [
      { value: "20+", label: "Hours Saved Weekly", icon: "clock" },
      { value: "0", label: "Shipping Errors", icon: "check" },
      { value: "2+", label: "Years in Production", icon: "calendar" }
    ],
    gradient: "from-blue-500 to-cyan-500",
    award: "USI Outstanding Senior Project 2024"
  },
  {
    id: 2,
    client: "Card Guys",
    project: "E-Commerce Store",
    description: "Full online store that expanded their business beyond eBay",
    image: "/images/portfolio/cardguys/cart.png",
    metrics: [
      { value: "New", label: "Revenue Channel", icon: "trending" },
      { value: "Auto", label: "Inventory Sync", icon: "refresh" },
      { value: "3+", label: "Payment Options", icon: "card" }
    ],
    gradient: "from-purple-500 to-pink-500",
    link: "https://cardguys.store"
  }
]

const icons = {
  clock: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  calendar: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  trending: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  refresh: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  card: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  )
}

function CaseStudyMetrics({ className = '' }) {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })

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
            Real <span className="gradient-text">Results</span>
          </h2>
          <p className="section-subheading">
            Measurable impact from real projects
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({ study, index }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="glass-card overflow-hidden h-full group hover:border-primary-500/30 transition-colors">
        {/* Image Header */}
        <div className="relative h-48 bg-gradient-to-br from-dark-700 to-dark-800 overflow-hidden">
          <img
            src={study.image}
            alt={study.project}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-20`} />

          {/* Award Badge */}
          {study.award && (
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full text-xs font-bold text-dark-900 flex items-center gap-1.5 shadow-lg">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Award Winner
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-primary-400 font-medium mb-1">{study.client}</p>
          <h3 className="text-xl font-bold text-white mb-2">{study.project}</h3>
          <p className="text-gray-400 text-sm mb-6">{study.description}</p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-3">
            {study.metrics.map((metric, i) => (
              <div
                key={i}
                className="text-center p-3 bg-dark-700/50 rounded-lg"
              >
                <div className="flex justify-center text-primary-400 mb-2">
                  {icons[metric.icon]}
                </div>
                <div className="text-lg font-bold text-white">{metric.value}</div>
                <div className="text-xs text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Link if available */}
          {study.link && (
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              <span>Visit Live Site</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default CaseStudyMetrics
