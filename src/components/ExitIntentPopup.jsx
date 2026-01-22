import { useState } from 'react'
import useExitIntent from '../hooks/useExitIntent'

function ExitIntentPopup() {
  const { showPopup, closePopup } = useExitIntent({
    threshold: 20,
    delay: 5000, // Wait 5 seconds before enabling
    oncePerSession: true
  })

  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/xzdpvvlr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'Exit Intent Popup - Website Audit Checklist'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setTimeout(() => {
          closePopup()
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

  if (!showPopup) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={closePopup}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark-900/95 backdrop-blur-sm animate-fade-in" />

      {/* Popup Content */}
      <div
        className="relative glass-card max-w-md w-full p-8 animate-scale-in border-primary-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Wait! Before You Go...
          </h3>
          <p className="text-gray-400">
            Get our free <span className="text-primary-400 font-medium">Website Audit Checklist</span> —
            15 things your website needs to convert visitors into customers.
          </p>
        </div>

        {/* Success State */}
        {submitStatus === 'success' ? (
          <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center">
            <svg className="w-8 h-8 text-green-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-green-400 font-medium">Check your inbox!</p>
            <p className="text-green-300/70 text-sm">The checklist is on its way.</p>
          </div>
        ) : (
          <>
            {/* Error State */}
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="form-input text-center"
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
                    Send Me the Checklist
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* No Thanks Link */}
            <button
              onClick={closePopup}
              className="w-full mt-4 text-sm text-gray-500 hover:text-gray-400 transition-colors"
            >
              No thanks, I&apos;ll figure it out myself
            </button>
          </>
        )}

        {/* Trust Note */}
        <p className="text-center text-gray-500 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}

export default ExitIntentPopup
