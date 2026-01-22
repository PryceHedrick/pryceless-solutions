import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'pryceless_exit_intent_shown'

export default function useExitIntent(options = {}) {
  const {
    threshold = 20, // Distance from top of viewport to trigger
    delay = 1000, // Delay before enabling (ms)
    oncePerSession = true // Only show once per session
  } = options

  const [showPopup, setShowPopup] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

  // Check if already shown this session
  const hasBeenShown = useCallback(() => {
    if (!oncePerSession) return false
    try {
      return sessionStorage.getItem(STORAGE_KEY) === 'true'
    } catch {
      return false
    }
  }, [oncePerSession])

  // Mark as shown
  const markAsShown = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Ignore storage errors
    }
  }, [])

  // Handle mouse leave (exit intent)
  const handleMouseLeave = useCallback((e) => {
    if (!isEnabled || hasBeenShown()) return

    // Only trigger when mouse leaves through the top of the viewport
    if (e.clientY <= threshold) {
      setShowPopup(true)
      markAsShown()
    }
  }, [isEnabled, threshold, hasBeenShown, markAsShown])

  // Close the popup
  const closePopup = useCallback(() => {
    setShowPopup(false)
  }, [])

  // Enable after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnabled(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  // Add mouse leave listener
  useEffect(() => {
    if (!isEnabled) return

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isEnabled, handleMouseLeave])

  return {
    showPopup,
    closePopup
  }
}
