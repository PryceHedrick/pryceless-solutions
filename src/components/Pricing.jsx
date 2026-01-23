import useScrollAnimation from '../hooks/useScrollAnimation'
import InlineCTA from './InlineCTA'
import GuaranteeBadge from './GuaranteeBadge'

// CANONICAL PRICING - Do not modify without operator approval
const pricingTiers = [
  {
    name: 'Starter',
    price: 750,
    priceNote: 'Starting at',
    description: 'Perfect for new businesses ready to look professional',
    features: [
      '1-2 page custom website',
      'Mobile responsive design',
      'Contact form integration',
      'Basic SEO setup',
      '2 rounds of revisions',
      '1-2 week delivery',
      'You own everything'
    ],
    guarantee: 'Revisions until you love it',
    bestFor: 'New businesses, landing pages, personal brands',
    highlighted: false,
    ctaText: 'Get Your Free Quote'
  },
  {
    name: 'Professional',
    price: 1800,
    priceNote: 'Starting at',
    description: 'For established businesses ready to compete and grow',
    features: [
      'Up to 5 custom pages',
      'Premium custom design',
      'Smooth animations & interactions',
      'Full SEO optimization + Analytics',
      '3 rounds of revisions',
      '2-3 week delivery',
      '30 days free support'
    ],
    guarantee: 'Revisions until you love it',
    bestFor: 'Restaurants, contractors, professional services',
    highlighted: true,
    ctaText: 'Most Popular - Get Started'
  },
  {
    name: 'Custom',
    price: 3500,
    priceNote: 'Starting at',
    description: 'Complex projects that need a technical partner',
    features: [
      'Unlimited pages',
      'Web applications & dashboards',
      'E-commerce solutions',
      'API integrations',
      'Unlimited revisions',
      '4-8 week delivery',
      'Priority support'
    ],
    guarantee: 'Ongoing partnership available',
    bestFor: 'E-commerce, SaaS products, complex business tools',
    highlighted: false,
    ctaText: 'Let\'s Discuss Your Project'
  }
]

function Pricing() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-dark-900">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Availability Indicator */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Currently accepting new projects
            </span>
          </div>

          <h2 className="section-heading">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="section-subheading">
            Every project starts with a free consultation. No commitment until we&apos;re both confident it&apos;s a fit.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier}
              index={index}
              onCtaClick={scrollToContact}
            />
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="mt-12 max-w-xl mx-auto">
          <GuaranteeBadge />
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8 max-w-2xl mx-auto">
          <p className="text-gray-400">
            <span className="text-primary-400 font-medium">50% upfront</span> to start,{' '}
            <span className="text-primary-400 font-medium">50% on completion</span>. For larger projects, we can break it into milestones.
          </p>
        </div>

        {/* Inline CTA */}
        <InlineCTA variant="pricing" className="mt-12" />
      </div>
    </section>
  )
}

function PricingCard({ tier, index, onCtaClick }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const delay = index * 150

  const formatPrice = (num) => {
    return '$' + num.toLocaleString()
  }

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${tier.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Most Popular Badge */}
      {tier.highlighted && (
        <div className="absolute -top-3 right-4 z-20">
          <span className="px-3 py-1.5 text-xs font-semibold rounded-md inline-block
                         bg-primary-500 text-white shadow-md shadow-primary-500/20
                         transition-all duration-500"
               style={{ transitionDelay: `${delay + 200}ms` }}>
            Most Popular
          </span>
        </div>
      )}

      {/* Gradient glow for highlighted card */}
      {tier.highlighted && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-2xl opacity-20 blur-sm" />
      )}

      <div
        className={`glass-card h-full flex flex-col p-6 lg:p-8 transition-all duration-300 group relative overflow-hidden ${
          tier.highlighted
            ? 'border-primary-500/50 bg-dark-800/80 shadow-xl shadow-primary-500/10'
            : 'hover:bg-dark-700/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-500/5'
        }`}
      >
        {/* Tier Name */}
        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>

        {/* Price Section - Always visible, no animation delay */}
        <div className="mb-4">
          <span className="text-sm text-gray-400">{tier.priceNote}</span>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">
              {formatPrice(tier.price)}
            </span>
            {tier.name === 'Custom' && <span className="text-xl font-bold text-white">+</span>}
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
        <div className="mb-4">
          <p className="text-sm">
            <span className="text-gray-500">Best for: </span>
            <span className="text-gray-300">{tier.bestFor}</span>
          </p>
        </div>

        {/* Guarantee Badge */}
        {tier.guarantee && (
          <div className="mb-6 pb-6 border-b border-dark-700">
            <span className="inline-flex items-center gap-2 text-xs text-green-400 font-medium bg-green-400/10 px-3 py-1.5 rounded-full">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {tier.guarantee}
            </span>
          </div>
        )}

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 transform ${
            tier.highlighted
              ? 'bg-primary-500 hover:bg-primary-400 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02]'
              : 'bg-dark-700 hover:bg-dark-600 text-white hover:scale-[1.02]'
          }`}
        >
          {tier.ctaText}
        </button>
      </div>
    </div>
  )
}

export default Pricing
