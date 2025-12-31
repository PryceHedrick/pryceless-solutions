/**
 * PRYCELESS SOLUTIONS — PRICING CONFIGURATION
 * ============================================
 * GOVERNANCE DECISION: Show both prices with strikethrough on base price
 * This is the SINGLE SOURCE OF TRUTH for all pricing on the site
 *
 * Last Updated: December 31, 2025
 * Approved By: Ari Governance Council
 */

export const PRICING = {
  starter: {
    id: 'starter',
    name: 'Starter',
    basePrice: 750,
    holidayPrice: 600,
    priceNote: 'Starting at',
    description: 'Clean and simple - perfect for getting online fast',
    features: [
      '1-2 page website',
      'Mobile responsive design',
      'Contact form integration',
      'Basic SEO setup',
      '2 rounds of revisions',
      '1-2 week delivery'
    ],
    notIncluded: [
      'Content writing',
      'Ongoing maintenance',
      'Advanced SEO'
    ],
    bestFor: 'Personal sites, landing pages, coming soon pages',
    popular: false,
    showOnHomepage: true
  },

  professional: {
    id: 'professional',
    name: 'Professional',
    basePrice: 1800,
    holidayPrice: 1650,
    priceNote: 'Starting at',
    description: 'Everything a growing business needs to stand out',
    features: [
      'Up to 5 pages',
      'Custom design & branding',
      'Smooth animations & interactions',
      'Full SEO optimization',
      'Google Analytics setup',
      '3 rounds of revisions',
      '2-4 week delivery'
    ],
    notIncluded: [
      'E-commerce functionality',
      'Content writing',
      'Ongoing maintenance'
    ],
    bestFor: 'Small businesses, professional portfolios, local services',
    popular: true,
    showOnHomepage: true
  },

  ecommerce: {
    id: 'ecommerce',
    name: 'E-Commerce',
    basePrice: 2500,
    holidayPrice: 2250,
    priceNote: 'Starting at',
    description: 'Sell your products online with a professional store',
    features: [
      'Everything in Professional',
      'Product catalog (up to 50 products)',
      'Shopping cart & checkout',
      'Payment processing setup',
      'Inventory management basics',
      '3-4 week delivery'
    ],
    notIncluded: [
      'Product photography',
      'Inventory management software',
      'Ongoing maintenance'
    ],
    bestFor: 'Retail shops, artisans, product-based businesses',
    popular: false,
    showOnHomepage: false  // Only on /pricing page
  },

  custom: {
    id: 'custom',
    name: 'Custom',
    basePrice: 3500,
    holidayPrice: 3350,
    priceNote: 'Starting at',
    description: 'Built from scratch for your specific needs',
    features: [
      'Web applications & dashboards',
      'Complex e-commerce solutions',
      'API integrations',
      'Custom functionality',
      'Priority communication',
      'Ongoing support available',
      'Timeline varies by scope'
    ],
    notIncluded: [],
    bestFor: 'Businesses with unique requirements, complex projects',
    popular: false,
    showOnHomepage: true
  }
};

// Budget ranges for contact form dropdown
export const BUDGET_RANGES = [
  { value: '', label: 'Select your budget range' },
  { value: 'starter', label: `Starter ($${PRICING.starter.holidayPrice} - $${PRICING.starter.basePrice})` },
  { value: 'professional', label: `Professional ($${PRICING.professional.holidayPrice} - $${PRICING.professional.basePrice})` },
  { value: 'ecommerce', label: `E-Commerce ($${PRICING.ecommerce.holidayPrice}+)` },
  { value: 'custom', label: `Custom ($${PRICING.custom.holidayPrice}+)` },
  { value: 'not-sure', label: "Not sure yet - let's discuss" }
];

// Payment terms
export const PAYMENT_TERMS = {
  deposit: 50,
  final: 50,
  description: '50% deposit to start, 50% before launch',
  note: 'For larger projects, we can arrange milestone payments.'
};

// Helper functions
export const getHomepageTiers = () => {
  return Object.values(PRICING).filter(tier => tier.showOnHomepage);
};

export const getAllTiers = () => {
  return Object.values(PRICING);
};

export const getTierById = (tierId) => {
  return PRICING[tierId];
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
