import { useState, useEffect } from 'react'

// Configuration - Update these values as availability changes
const AVAILABILITY_CONFIG = {
  projectSlots: 2,          // Number of projects accepting
  currentMonth: null,       // null = auto-detect, or set like "February"
  nextAvailable: null,      // null = accepting now, or set like "Feb 15"
  isAccepting: true         // Set to false if fully booked
}

function AvailabilityBanner({ variant = 'inline', className = '' }) {
  const [currentMonth, setCurrentMonth] = useState('')

  useEffect(() => {
    // Get current month name
    const month = AVAILABILITY_CONFIG.currentMonth ||
      new Date().toLocaleString('en-US', { month: 'long' })
    setCurrentMonth(month)
  }, [])

  // Don't show if not accepting projects
  if (!AVAILABILITY_CONFIG.isAccepting) {
    return null
  }

  // Inline variant (for placement near CTAs)
  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-2 text-sm ${className}`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-gray-400">
          {AVAILABILITY_CONFIG.nextAvailable ? (
            <>Next available: <span className="text-green-400 font-medium">{AVAILABILITY_CONFIG.nextAvailable}</span></>
          ) : (
            <>Accepting <span className="text-green-400 font-medium">{AVAILABILITY_CONFIG.projectSlots} new projects</span> for {currentMonth}</>
          )}
        </span>
      </div>
    )
  }

  // Banner variant (for prominent placement)
  if (variant === 'banner') {
    return (
      <div className={`bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4 ${className}`}>
        <div className="flex items-center justify-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-gray-300">
            {AVAILABILITY_CONFIG.nextAvailable ? (
              <>
                <span className="font-semibold text-white">Next Available: </span>
                <span className="text-green-400 font-medium">{AVAILABILITY_CONFIG.nextAvailable}</span>
              </>
            ) : (
              <>
                <span className="font-semibold text-white">Currently accepting </span>
                <span className="text-green-400 font-medium">{AVAILABILITY_CONFIG.projectSlots} new projects</span>
                <span className="font-semibold text-white"> for {currentMonth}</span>
              </>
            )}
          </p>
        </div>
      </div>
    )
  }

  // Compact variant (for footer or small spaces)
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-1.5 text-xs ${className}`}>
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
        </span>
        <span className="text-gray-500">
          {AVAILABILITY_CONFIG.projectSlots} slots open
        </span>
      </div>
    )
  }

  return null
}

export default AvailabilityBanner
