import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

function FreeAuditCTA({ className = '' }) {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const [formData, setFormData] = useState({
    businessName: '',
    currentWebsite: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.businessName.trim() || !formData.email.trim()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/xzdpvvlr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: formData.businessName,
          currentWebsite: formData.currentWebsite || 'No current website',
          email: formData.email,
          source: 'Free Website Audit Request'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ businessName: '', currentWebsite: '', email: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      className={`py-16 lg:py-20 bg-gradient-to-b from-dark-900 to-dark-800 ${className}`}
    >
      <div
        className={`section-container transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto">
          {/* Card with gradient border */}
          <div className="relative">
            {/* Gradient border glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/50 via-primary-500/50 to-cyan-500/50 rounded-2xl blur-sm" />
            <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/30 via-primary-500/30 to-cyan-500/30 rounded-2xl" />

            {/* Content */}
            <div className="relative glass-card p-8 lg:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Get a Free Website Audit
                </h2>
                <p className="text-gray-400 text-lg">
                  I&apos;ll review your online presence and share honest feedback on what&apos;s working and what could improve.
                </p>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-green-400 font-medium">Request received!</p>
                      <p className="text-green-300/70 text-sm">I&apos;ll review your site and get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 font-medium">Something went wrong. Please try again.</p>
                </div>
              )}

              {/* Form */}
              {submitStatus !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="audit-business" className="block text-sm font-medium text-gray-300 mb-1">
                        Business Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="audit-business"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your Business Name"
                        required
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="audit-website" className="block text-sm font-medium text-gray-300 mb-1">
                        Current Website <span className="text-gray-500">(if any)</span>
                      </label>
                      <input
                        type="url"
                        id="audit-website"
                        name="currentWebsite"
                        value={formData.currentWebsite}
                        onChange={handleChange}
                        placeholder="https://example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="audit-email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="audit-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="form-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                        Get My Free Audit
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-500 text-sm">
                    No sales pitch. Just honest feedback about your online presence.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeAuditCTA
