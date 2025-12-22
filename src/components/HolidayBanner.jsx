/* HOLIDAY PROMO - Remove by setting HOLIDAY_PROMO.active = false in src/config/promo.js */
import { useState, useEffect } from 'react'
import { HOLIDAY_PROMO, isPromoActive } from '../config/promo'

function HolidayBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check master promo switch and expiration
    if (!isPromoActive()) return

    // Check if banner was dismissed (persists across sessions)
    const dismissed = localStorage.getItem('holidayBannerDismissed')

    if (!dismissed) {
      setIsVisible(true)
      // Trigger slide-down animation after mount
      setTimeout(() => setIsLoaded(true), 50)
    }
  }, [])

  const handleDismiss = (e) => {
    e.stopPropagation()
    setIsLoaded(false)
    setTimeout(() => {
      setIsVisible(false)
      localStorage.setItem('holidayBannerDismissed', 'true')
    }, 300)
  }

  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <>
      {/* HOLIDAY PROMO BANNER - Fixed at absolute top */}
      <div
        onClick={handleClick}
        className={`fixed top-0 left-0 right-0 z-[100] cursor-pointer
          bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900
          border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10
          transform transition-transform duration-300 ease-out
          ${isLoaded ? 'translate-y-0' : '-translate-y-full'}
          hover:bg-dark-800/90 group`}
      >
        {/* Cyan glow effect */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 py-3 md:py-2.5">
          <div className="flex items-center justify-center gap-3 md:gap-4">
            {/* Tree icon */}
            <span className="text-lg md:text-xl flex-shrink-0">🎄</span>

            {/* Main text - responsive */}
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
              <span className="text-sm md:text-base text-gray-200">
                <span className="font-bold text-white">Holiday Special:</span>
                {' '}
                <span className="inline-block animate-shimmer bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-[length:200%_100%] bg-clip-text text-transparent font-bold">
                  ${HOLIDAY_PROMO.discount} off
                </span>
                {' '}any project booked before Jan 1st
              </span>
            </div>

            {/* Book Now CTA */}
            <span className="hidden sm:flex items-center gap-1 text-cyan-400 font-semibold text-sm whitespace-nowrap group-hover:text-cyan-300 transition-colors">
              Book Now
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="Dismiss banner"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to push content down when banner is visible */}
      <div className={`transition-all duration-300 ${isLoaded ? 'h-12 md:h-11' : 'h-0'}`} />
    </>
  )
}

export default HolidayBanner
