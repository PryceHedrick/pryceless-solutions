import useScrollAnimation from '../hooks/useScrollAnimation'

// EDIT: Pricing tiers - Modify pricing and features here
const pricingTiers = [
  {
    name: 'Starter',
    price: '$750+',
    priceNote: 'Starting at',
    description: 'Perfect for personal sites and coming soon pages',
    features: [
      '1-2 page website',
      'Mobile responsive design',
      'Contact form integration',
      '2 rounds of revisions',
      'Basic SEO setup'
    ],
    bestFor: 'Personal sites, coming soon pages',
    highlighted: false,
    ctaText: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$1,500',
    priceNote: 'Starting at',
    description: 'Ideal for small businesses looking to establish their online presence',
    features: [
      'Multi-page website (up to 5 pages)',
      'Custom design & branding',
      'Basic animations & interactions',
      'Full SEO optimization',
      '3 rounds of revisions',
      'Google Analytics setup'
    ],
    bestFor: 'Small businesses, portfolios',
    highlighted: true,
    ctaText: 'Most Popular'
  },
  {
    name: 'Custom',
    price: "Let's Talk",
    priceNote: 'Starting at $3,000+',
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
    ctaText: 'Get Started'
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

function PricingCard({ tier, index, onCtaClick }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Highlighted Badge */}
      {tier.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`glass-card h-full flex flex-col p-6 lg:p-8 transition-all duration-300 ${
          tier.highlighted
            ? 'border-primary-500/50 bg-dark-800/70 scale-[1.02]'
            : 'hover:bg-dark-700/50'
        }`}
      >
        {/* Tier Name */}
        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>

        {/* Price */}
        <div className="mb-4">
          <span className="text-sm text-gray-400">{tier.priceNote}</span>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">{tier.price}</span>
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
