/* HOLIDAY PROMO - Remove by setting HOLIDAY_PROMO.active = false in src/config/promo.js */
import { useState, useEffect, useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { HOLIDAY_PROMO, isPromoActive, getDiscountedPrice } from '../config/promo'

// EDIT: Pricing tiers - Modify pricing and features here
const pricingTiers = [
  {
    name: 'Starter',
    price: 750,
    priceDisplay: '$750+',
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
    price: 1800,
    priceDisplay: '$1,800+',
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
    price: 3500,
    priceDisplay: '$3,500+',
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

  // Animate to discounted price if promo is active, otherwise original price
  const targetPrice = showPromo ? getDiscountedPrice(tier.price) : tier.price
  const animatedPrice = useCountUp(targetPrice, 1200, isVisible)

  const formatPrice = (num) => {
    return '$' + num.toLocaleString()
  }

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${tier.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* HOLIDAY PROMO BADGE - Top right corner (responsive positioning) */}
      {showPromo && (
        <div className="absolute -top-2.5 right-2 sm:right-3 z-20">
          <span className="relative px-2 sm:px-2.5 py-1 bg-gradient-to-r from-cyan-500 to-cyan-400 text-dark-900 text-[10px] sm:text-xs font-bold rounded-full shadow-lg shadow-cyan-500/30 flex items-center gap-1">
            <span>🎄</span>
            <span>{HOLIDAY_PROMO.badgeText}</span>
          </span>
        </div>
      )}

      {/* Highlighted Badge with shimmer */}
      {tier.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="relative px-4 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full overflow-hidden">
            <span className="relative z-10">Most Popular</span>
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </span>
        </div>
      )}

      {/* Gradient glow for highlighted card */}
      {tier.highlighted && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-2xl opacity-20 blur-sm" />
      )}

      <div
        className={`glass-card h-full flex flex-col p-6 lg:p-8 transition-all duration-300 group relative ${
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
            <div className="flex flex-col gap-1">
              {/* Original price - strikethrough */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg text-slate-500 line-through font-medium">
                  {tier.priceDisplay}
                </span>
                {/* Holiday savings badge */}
                <span className="px-1.5 sm:px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-[10px] sm:text-xs font-semibold rounded-full whitespace-nowrap">
                  Save ${HOLIDAY_PROMO.discount}
                </span>
              </div>
              {/* New discounted price with animation */}
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white animate-pulse-slow">
                  {isVisible ? formatPrice(animatedPrice) : '$0'}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-cyan-400">+</span>
              </div>
            </div>
          ) : (
            /* Regular pricing (non-promo) */
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">
                {isVisible ? formatPrice(animatedPrice) : '$0'}
              </span>
              <span className="text-2xl font-bold text-white">+</span>
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
