import useScrollAnimation from '../hooks/useScrollAnimation'

const trustBadges = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: 'Based in Loogootee, IN',
    subtext: 'Serving Southern Indiana'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: '100% Project Completion',
    subtext: 'Every project delivered'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    text: 'Award-Winning Developer',
    subtext: 'USI Outstanding Senior Project 2024'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'No Monthly Fees',
    subtext: 'Pay once, own forever'
  }
]

function TrustBadges({ className = '' }) {
  const [badgesRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section
      ref={badgesRef}
      className={`py-8 bg-dark-900 border-y border-dark-700/50 ${className}`}
    >
      <div className="section-container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Desktop: Horizontal row */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300">
                  {badge.icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{badge.text}</p>
                  <p className="text-xs text-gray-400">{badge.subtext}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="glass-card p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 flex-shrink-0">
                  {badge.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-white text-xs leading-tight">{badge.text}</p>
                  <p className="text-[10px] text-gray-400 truncate">{badge.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
