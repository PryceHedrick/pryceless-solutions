import { useState, useEffect, useCallback } from 'react'

/**
 * Exit Intent Detection Hook
 * Detects when users are about to leave the page and triggers a popup.
 *
 * Detection methods:
 * - Desktop: Mouse leaves viewport (moves toward browser chrome/tabs)
 * - Mobile: Rapid scroll-up pattern (user scrolling to top quickly)
 *
 * Suppression logic:
 * - Show once per session (sessionStorage)
 * - Never show if user already submitted contact form
 * - Never show if popup was dismissed in last N days (localStorage)
 * - Delay initial trigger to avoid annoyance
 *
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Y position trigger for mouse leave (default: 0)
 * @param {number} options.delay - Delay before enabling detection in ms (default: 5000)
 * @param {number} options.cookieDays - Days to suppress after dismiss (default: 7)
 * @returns {Object} - { showPopup, dismiss, convert }
 */
export function useExitIntent(options = {}) {
  const {
    threshold = 0,
    delay = 5000,
    cookieDays = 7
  } = options

  const [showPopup, setShowPopup] = useState(false)

  // Check if popup should be suppressed
  const shouldSuppress = useCallback(() => {
    // Already shown this session
    if (sessionStorage.getItem('exitIntentShown')) return true

    // User already submitted contact form
    if (sessionStorage.getItem('contactFormSubmitted')) return true

    // User dismissed popup recently
    const dismissed = localStorage.getItem('exitIntentDismissed')
    if (dismissed) {
      const dismissedDate = new Date(dismissed)
      const daysSince = (Date.now() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24)
      if (daysSince < cookieDays) return true
    }

    return false
  }, [cookieDays])

  // Desktop: Mouse leave detection
  useEffect(() => {
    if (shouldSuppress()) return

    let enabled = false
    const timer = setTimeout(() => {
      enabled = true
    }, delay)

    const handleMouseLeave = (e) => {
      if (!enabled) return
      // Only trigger when mouse moves up toward browser chrome
      if (e.clientY <= threshold) {
        sessionStorage.setItem('exitIntentShown', 'true')
        setShowPopup(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [threshold, delay, shouldSuppress])

  // Mobile: Rapid scroll-up detection
  useEffect(() => {
    if (shouldSuppress()) return

    let lastScrollY = window.scrollY
    let enabled = false
    const timer = setTimeout(() => {
      enabled = true
    }, delay)

    const handleScroll = () => {
      if (!enabled) return

      const currentScrollY = window.scrollY
      const scrollDiff = lastScrollY - currentScrollY

      // Rapid upward scroll (100px+ in one frame) while near top of page
      if (scrollDiff > 100 && currentScrollY < 200) {
        sessionStorage.setItem('exitIntentShown', 'true')
        setShowPopup(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [delay, shouldSuppress])

  // Dismiss handler - stores dismiss date for future suppression
  const dismiss = useCallback(() => {
    setShowPopup(false)
    localStorage.setItem('exitIntentDismissed', new Date().toISOString())
  }, [])

  // Convert handler - marks form as submitted to suppress future popups
  const convert = useCallback(() => {
    setShowPopup(false)
    sessionStorage.setItem('contactFormSubmitted', 'true')
  }, [])

  return { showPopup, dismiss, convert }
}

export default useExitIntent
