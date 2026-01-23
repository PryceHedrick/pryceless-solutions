import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { serviceAreas } from '../data/seo-data'

// Top service areas to highlight (closest/most important)
const highlightedAreas = serviceAreas.slice(0, 6)

function ServiceAreaSection({ className = '' }) {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className={`py-16 lg:py-20 bg-dark-800/30 ${className}`}
    >
      <div
        className={`section-container transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full text-primary-400 text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Based in Loogootee, Indiana
          </div>
          <h2 className="section-heading">
            Proudly Serving <span className="gradient-text">Southern Indiana</span>
          </h2>
          <p className="section-subheading">
            Local expertise for local businesses. Face-to-face meetings available.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {highlightedAreas.map((area, index) => (
            <Link
              key={area.slug}
              to={`/areas/${area.slug}`}
              className="glass-card p-4 text-center hover:bg-dark-700/50 hover:-translate-y-1 transition-all duration-300 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center">
                {area.distance === '0 miles' && (
                  <span className="text-xs font-medium text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded mb-2">
                    HQ
                  </span>
                )}
                <span className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {area.city}
                </span>
                <span className="text-xs text-gray-500 mt-1">{area.county}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Areas + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-gray-400">
            Plus Vincennes, Bloomington, and more throughout Indiana
          </p>
          <Link
            to="/areas-served"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors group"
          >
            View all areas
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Remote Work Note */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Not in Indiana? No problem. We work with businesses nationwide via video calls and email.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreaSection
