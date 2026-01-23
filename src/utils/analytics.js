/**
 * Google Analytics 4 Utility Functions
 * Measurement ID: G-8TKJWD3N6M
 *
 * Usage:
 *   import { trackEvent, trackFormSubmission, trackCTAClick } from '../utils/analytics'
 *
 *   // Track custom event
 *   trackEvent('button_click', { button_name: 'get_started' })
 *
 *   // Track form submission
 *   trackFormSubmission('contact', { project_type: 'new-website' })
 *
 *   // Track CTA click
 *   trackCTAClick('hero_see_pricing')
 */

// Check if gtag is available (prevents errors if GA fails to load)
const isGtagAvailable = () => typeof window !== 'undefined' && typeof window.gtag === 'function'

/**
 * Track a custom event
 * @param {string} eventName - Name of the event
 * @param {object} params - Event parameters
 */
export const trackEvent = (eventName, params = {}) => {
  if (!isGtagAvailable()) {
    console.debug('[Analytics] gtag not available, skipping:', eventName)
    return
  }

  window.gtag('event', eventName, params)
}

/**
 * Track form submission (conversion event)
 * @param {string} formName - Name of the form (e.g., 'contact', 'newsletter')
 * @param {object} params - Additional parameters
 */
export const trackFormSubmission = (formName, params = {}) => {
  trackEvent('form_submission', {
    form_name: formName,
    ...params
  })

  // Also track as a conversion event
  trackEvent('generate_lead', {
    currency: 'USD',
    value: formName === 'contact' ? 100 : 10, // Estimated lead value
    ...params
  })
}

/**
 * Track CTA button clicks
 * @param {string} ctaName - Identifier for the CTA (e.g., 'hero_see_pricing', 'nav_get_started')
 * @param {object} params - Additional parameters
 */
export const trackCTAClick = (ctaName, params = {}) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    ...params
  })
}

/**
 * Track outbound link clicks
 * @param {string} url - The destination URL
 * @param {string} linkText - Text of the link
 */
export const trackOutboundClick = (url, linkText = '') => {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: linkText,
    transport_type: 'beacon',
    outbound_url: url
  })
}

/**
 * Track page section views (scroll tracking)
 * @param {string} sectionName - Name of the section viewed
 */
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    section_name: sectionName
  })
}

/**
 * Track pricing tier interest
 * @param {string} tierName - Name of the pricing tier
 * @param {number} price - Price of the tier
 */
export const trackPricingInterest = (tierName, price) => {
  trackEvent('view_item', {
    currency: 'USD',
    value: price,
    items: [{
      item_name: tierName,
      item_category: 'pricing_tier',
      price: price
    }]
  })
}

export default {
  trackEvent,
  trackFormSubmission,
  trackCTAClick,
  trackOutboundClick,
  trackSectionView,
  trackPricingInterest
}
