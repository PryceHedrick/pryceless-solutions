/* HOLIDAY PROMO - Remove by setting HOLIDAY_PROMO.active = false in src/config/promo.js */
import { useState, useEffect, useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { isPromoActive } from '../config/promo'

// EDIT: Pricing tiers - Modify pricing and features here
const pricingTiers = [
  {
    name: 'Starter',
    price: 600,
    originalPrice: 750,
    priceNote: 'Starting at',
    description: 'Clean and simple - perfect for getting online fast',
    features: [
      '1-2 page website',
      'Mobile responsive design',
      'Contact form integration',
      '2 rounds of revisions',
      '1-2 week delivery'
    ],
    bestFor: 'Personal sites, landing pages, coming soon pages',
    highlighted: false,
    ctaText: 'Get Started'
  },
  {
    name: 'Professional',
    price: 1650,
    originalPrice: 1800,
    priceNote: 'Starting at',
    description: 'Everything a growing business needs to stand out',
    features: [
      'Up to 5 pages',
      'Custom design & branding',
      'Smooth animations & interactions',
      'SEO optimization + Google Analytics',
      '3 rounds of revisions',
      '2-4 week delivery'
    ],
    bestFor: 'Small businesses, professional portfolios',
    highlighted: true,
    ctaText: 'Get Started'
  },
  {
    name: 'Custom',
    price: 3350,
    originalPrice: 3500,
    priceNote: 'Starting at',
    description: 'Built from scratch for your specific needs',
    features: [
      'Web applications & dashboards',
      'E-commerce solutions',
      'API integrations',
      'Complex functionality',
      'Ongoing support available',
      'Priority communication'
    ],
    bestFor: 'Businesses with unique requirements',
    highlighted: false,
    ctaText: 'Get Started'
  }
]

function Pricing() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })
  const showPromo = isPromoActive()

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
          {/* Urgency Indicator */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Currently accepting 2 new projects for January
            </span>
          </div>

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
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier}
              index={index}
              onCtaClick={scrollToContact}
              showPromo={showPromo}
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

// Animated counter hook for price
function useCountUp(end, duration = 1500, shouldStart = false) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  useEffect(() => {
    if (!shouldStart) return

    let startTime = null
    const startValue = 0

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(startValue + (end - startValue) * easeOut)

      setCount(currentCount)

      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate)
      }
    }

    countRef.current = requestAnimationFrame(animate)

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current)
      }
    }
  }, [end, duration, shouldStart])

  return count
}

function PricingCard({ tier, index, onCtaClick, showPromo }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const delay = index * 150

  // Animate to holiday price if promo is active, otherwise original price
  const targetPrice = showPromo ? tier.price : tier.originalPrice
  const animatedPrice = useCountUp(targetPrice, 1200, isVisible)

  const formatPrice = (num) => {
    return '$' + num.toLocaleString()
  }

  // Determine badge text - only ONE badge per card
  const getBadgeText = () => {
    if (tier.highlighted && showPromo) {
      return 'Most Popular • Holiday Special'
    } else if (tier.highlighted) {
      return 'Most Popular'
    } else if (showPromo) {
      return 'Holiday Special'
    }
    return null
  }

  const badgeText = getBadgeText()

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${tier.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Single Badge - Top Right, Flat Design */}
      {badgeText && (
        <div className="absolute -top-3 right-4 z-20">
          <span className={`px-3 py-1.5 text-xs font-semibold rounded-md inline-block
                           transition-all duration-500 ${
                             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                           } ${
                             tier.highlighted
                               ? 'bg-primary-500 text-white shadow-md shadow-primary-500/20'
                               : 'bg-cyan-400 text-dark-900 shadow-md shadow-cyan-400/20'
                           }`}
               style={{ transitionDelay: `${delay + 200}ms` }}>
            {badgeText}
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

        {/* Price Section */}
        <div className="mb-4">
          <span className="text-sm text-gray-400">{tier.priceNote}</span>

          {/* HOLIDAY PROMO PRICING */}
          {showPromo ? (
            <div className="flex flex-col gap-0.5">
              {/* Original price - strikethrough */}
              <span className="text-base text-gray-500 line-through">
                ${tier.originalPrice.toLocaleString()}
              </span>
              {/* New discounted price with animation */}
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-cyan-400">
                  {isVisible ? formatPrice(animatedPrice) : '$0'}
                </span>
                <span className="text-xl font-bold text-cyan-400">+</span>
              </div>
            </div>
          ) : (
            /* Regular pricing (non-promo) */
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">
                {isVisible ? formatPrice(animatedPrice) : '$0'}
              </span>
              <span className="text-xl font-bold text-white">+</span>
            </div>
          )}
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

        {/* CTA Button with smooth hover */}
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
