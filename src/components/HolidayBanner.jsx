import { useState, useEffect } from 'react'

function HolidayBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    // Check if banner was dismissed in this session
    const dismissed = sessionStorage.getItem('holidayBannerDismissed')
    if (dismissed) {
      setIsVisible(false)
    }

    // Check if offer has expired (after January 1st, 2025)
    const expirationDate = new Date('2025-01-01T00:00:00')
    if (new Date() >= expirationDate) {
      setIsExpired(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem('holidayBannerDismissed', 'true')
  }

  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!isVisible || isExpired) return null

  return (
    <div className="relative z-[60] bg-dark-800/95 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-4">
        <button
          onClick={handleClick}
          className="flex items-center gap-2 text-sm text-gray-200 hover:text-cyan-400 transition-colors group"
        >
          <span className="text-base">🎄</span>
          <span>
            <span className="font-semibold text-cyan-400">Holiday Special:</span>{' '}
            $150 off any project booked before January 1st
          </span>
          <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
        </button>

        <button
          onClick={handleDismiss}
          className="ml-2 p-1 text-gray-400 hover:text-gray-200 transition-colors"
          aria-label="Dismiss holiday banner"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default HolidayBanner
