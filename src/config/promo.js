/**
 * HOLIDAY PROMO CONFIGURATION
 * ============================
 * Set 'active' to false to disable ALL holiday promotional elements:
 * - Top banner
 * - Strikethrough pricing on all cards
 * - Holiday badges on pricing cards
 *
 * To remove holiday promo: Simply set active: false
 */

export const HOLIDAY_PROMO = {
  // Master switch - set to false to remove all holiday elements
  active: true,

  // Discount amount in dollars
  discount: 150,

  // Promo end date (banner auto-hides after this date)
  endDate: '2025-01-31',

  // Banner message
  message: 'Holiday Special: Save on all projects through January 31st',

  // Badge text for pricing cards
  badgeText: 'Holiday Special',

  // Savings label
  savingsText: 'Holiday Pricing',

  // Urgency text
  urgencyText: 'Holiday pricing ends January 31st'
}

/**
 * Helper function to check if promo is currently valid
 * Returns true if promo is active AND before end date
 */
export const isPromoActive = () => {
  if (!HOLIDAY_PROMO.active) return false
  const endDate = new Date(HOLIDAY_PROMO.endDate)
  return new Date() < endDate
}

/**
 * Calculate discounted price
 */
export const getDiscountedPrice = (originalPrice) => {
  return originalPrice - HOLIDAY_PROMO.discount
}
