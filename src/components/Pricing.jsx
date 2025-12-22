import useScrollAnimation from '../hooks/useScrollAnimation'

// EDIT: Pricing tiers - Modify pricing and features here
// Holiday pricing: originalPrice, holidayPrice, percentOff for seasonal promotions
const pricingTiers = [
  {
    name: 'Starter',
    price: '$600',
    originalPrice: '$750',
    percentOff: '20',
    priceNote: 'Holiday Special',
    description: 'Perfect for personal sites and coming soon pages',
    features: [
      'Single landing page',
      'Mobile responsive design',
      'Contact form integration',
      '1 round of revisions',
      'Basic SEO setup'
    ],
    bestFor: 'Personal sites, coming soon pages',
    highlighted: false,
    ctaText: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$1,650',
    originalPrice: '$1,800',
    percentOff: '8',
    priceNote: 'Holiday Special',
    description: 'Ideal for small businesses looking to establish their online presence',
    features: [
      'Multi-page website (up to 5 pages)',
      'Custom design & branding',
      'Basic animations & interactions',
      'Full SEO optimization',
      '2 rounds of revisions',
      'Google Analytics setup'
    ],
    bestFor: 'Small businesses, portfolios',
    highlighted: true,
    ctaText: 'Get Started'
  },
  {
    name: 'Custom',
    price: '$3,350',
    originalPrice: '$3,500',
    percentOff: '4',
    priceNote: 'Holiday Special',
    description: 'For complex projects requiring custom functionality',
    features: [
      'Web applications & dashboards',
      'E-commerce builds',
      'API integrations',
      'Complex business logic',
      'Ongoing support available',
      'Priority communication'
    ],
    bestFor: 'Businesses with specific needs',
    highlighted: false,
    ctaText: 'Contact Me'
  }
]

function Pricing() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-dark-900">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">
            {/* EDIT: Section heading */}
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="section-subheading">
            {/* EDIT: Section description */}
            Every project starts with a free consultation. No commitment until we're both confident it's a fit.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier}
              index={index}
              onCtaClick={scrollToContact}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-400">
            {/* EDIT: Bottom note */}
            <span className="text-primary-400 font-medium">50% upfront</span> to start,{' '}
            <span className="text-primary-400 font-medium">50% on completion</span>. For larger projects, we can break it into milestones.
          </p>
        </div>
      </div>
    </section>
  )
}

function HolidayBadge({ percentOff, isVisible, delay }) {
  return (
    <div
      className={`absolute -top-3 -right-3 z-20 ${
        isVisible ? 'animate-badge-pop' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay + 300}ms` }}
    >
      <div className="relative">
        {/* Badge with shimmer effect */}
        <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500
                        rounded-lg shadow-lg shadow-cyan-500/30 transform rotate-[-12deg]
                        overflow-hidden">
          {/* Shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                          animate-shimmer bg-[length:200%_100%]" />
          <div className="flex items-center gap-1 relative">
            <span className="text-xs sm:text-sm">✨</span>
            <span className="text-white font-bold text-sm sm:text-base">{percentOff}% OFF</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingCard({ tier, index, onCtaClick }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const delay = index * 150

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Holiday Percentage Badge - Top Right */}
      {tier.percentOff && (
        <HolidayBadge percentOff={tier.percentOff} isVisible={isVisible} delay={delay} />
      )}

      {/* Most Popular Badge - Top Left (for highlighted tier) */}
      {tier.highlighted && (
        <div className="absolute -top-3 -left-3 z-20">
          <span className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-500 text-white text-xs sm:text-sm
                           font-semibold rounded-lg shadow-lg shadow-primary-500/30
                           transform rotate-[12deg] inline-block transition-all duration-500 ${
                             isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                           }`}
               style={{ transitionDelay: `${delay + 400}ms` }}>
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`glass-card h-full flex flex-col p-6 lg:p-8 transition-all duration-300 overflow-hidden ${
          tier.highlighted
            ? 'border-primary-500/50 bg-dark-800/70 scale-[1.02]'
            : 'hover:bg-dark-700/50'
        }`}
      >
        {/* Tier Name */}
        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>

        {/* Price with strikethrough for holiday pricing */}
        <div className="mb-4">
          <span className="text-sm text-cyan-400 font-medium">{tier.priceNote}</span>
          <div className="flex items-baseline gap-2 flex-wrap">
            {tier.originalPrice && (
              <span className="text-xl text-gray-500 line-through">{tier.originalPrice}</span>
            )}
            <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
            {tier.price.startsWith('$') && <span className="text-gray-400">+</span>}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-6">{tier.description}</p>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-grow">
          {tier.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <svg
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  tier.highlighted ? 'text-primary-400' : 'text-green-400'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Best For */}
        <div className="mb-6 pb-6 border-b border-dark-700">
          <p className="text-sm">
            <span className="text-gray-500">Best for: </span>
            <span className="text-gray-300">{tier.bestFor}</span>
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
            tier.highlighted
              ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/25'
              : 'bg-dark-700 hover:bg-dark-600 text-white'
          }`}
        >
          {tier.ctaText}
        </button>
      </div>
    </div>
  )
}

export default Pricing
