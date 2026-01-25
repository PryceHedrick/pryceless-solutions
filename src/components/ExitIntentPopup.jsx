import { useState, useEffect, useRef, useCallback } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { trackCTAClick, trackFormSubmission } from '../utils/analytics'

/**
 * Exit Intent Popup Component
 * A modal that appears when users show exit intent, offering a free consultation.
 *
 * Features:
 * - Animated entrance/exit with Framer Motion
 * - Form submission via Formspree
 * - Full keyboard accessibility (ESC to close, focus trap)
 * - ARIA attributes for screen readers
 */
function ExitIntentPopup({ isOpen, onDismiss, onConvert }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const modalRef = useRef(null)
  const firstFocusableRef = useRef(null)
  const lastFocusableRef = useRef(null)
  const previousActiveElement = useRef(null)

  // Track popup impression when opened
  useEffect(() => {
    if (isOpen) {
      trackCTAClick('exit_intent_popup_shown')
      // Store the previously focused element
      previousActiveElement.current = document.activeElement
    }
  }, [isOpen])

  // Focus management - move focus to modal when opened
  useEffect(() => {
    if (isOpen && firstFocusableRef.current) {
      // Small delay to ensure animation has started
      const timer = setTimeout(() => {
        firstFocusableRef.current?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Return focus when closed
  useEffect(() => {
    if (!isOpen && previousActiveElement.current) {
      previousActiveElement.current.focus()
    }
  }, [isOpen])

  // Dismiss handler - memoized for use in effects
  const handleDismiss = useCallback(() => {
    trackCTAClick('exit_intent_popup_dismissed')
    onDismiss()
  }, [onDismiss])

  // ESC key handler
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleDismiss()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleDismiss])

  // Focus trap
  const handleTabKey = useCallback((e) => {
    if (e.key !== 'Tab') return

    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    if (!focusableElements || focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/xzdpvvlr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message || 'Exit intent popup submission - Free consultation request',
          source: 'Exit Intent Popup'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        trackFormSubmission('exit_intent', {
          has_message: !!formData.message
        })
        setFormData({ name: '', email: '', message: '' })

        // Close after success message
        setTimeout(() => {
          onConvert()
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleDismiss}
        >
          {/* Backdrop */}
          <m.div
            className="absolute inset-0 bg-dark-900/90 backdrop-blur-sm"
            variants={backdropVariants}
          />

          {/* Modal */}
          <m.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
            className="relative glass-card max-w-lg w-full p-6 sm:p-8"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleTabKey}
          >
            {/* Close Button */}
            <button
              ref={firstFocusableRef}
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-800"
              aria-label="Close popup"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/20 text-primary-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 id="exit-intent-title" className="text-2xl font-bold text-white mb-2">
                Wait! Before you go...
              </h2>
              <p className="text-gray-400">
                Get a <span className="text-primary-400 font-semibold">free 15-minute consultation</span> to discuss your website needs. No obligation, just helpful advice.
              </p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <m.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-green-400">You&apos;re all set!</p>
                    <p className="text-green-300 text-sm">I&apos;ll reach out within 24 hours to schedule your consultation.</p>
                  </div>
                </div>
              </m.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <m.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-400 font-medium">Something went wrong. Please try again.</p>
                </div>
              </m.div>
            )}

            {/* Form */}
            {submitStatus !== 'success' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="exit-name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="exit-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="form-input"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="exit-email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="exit-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="form-input"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="exit-message" className="block text-sm font-medium text-gray-300 mb-1">
                    Tell me about your project <span className="text-gray-500">(optional)</span>
                  </label>
                  <textarea
                    id="exit-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What kind of website do you need?"
                    rows={3}
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Claim My Free Consultation
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Dismiss Link */}
            <button
              ref={lastFocusableRef}
              onClick={handleDismiss}
              className="w-full mt-4 text-center text-gray-500 hover:text-gray-400 text-sm transition-colors focus:outline-none focus:text-gray-400"
            >
              No thanks, I&apos;ll keep browsing
            </button>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}

export default ExitIntentPopup
