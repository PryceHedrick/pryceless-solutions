// src/config/pricing.js
// Single source of truth for all pricing

export const PRICING = {
  starter: {
    name: 'Starter',
    basePrice: 750,
    holidayPrice: 600,
    description: 'Clean and simple - perfect for getting online fast',
    features: [
      '1-2 page website',
      'Mobile responsive design',
      'Contact form integration',
      '2 rounds of revisions',
      '1-2 week delivery'
    ],
    bestFor: 'Personal sites, landing pages',
    popular: false
  },
  professional: {
    name: 'Professional',
    basePrice: 1800,
    holidayPrice: 1650,
    description: 'Everything a growing business needs',
    features: [
      'Up to 5 pages',
      'Custom design & branding',
      'Smooth animations',
      'SEO optimization + Analytics',
      '3 rounds of revisions',
      '2-4 week delivery'
    ],
    bestFor: 'Small businesses, portfolios',
    popular: true
  },
  custom: {
    name: 'Custom',
    basePrice: 3500,
    holidayPrice: 3350,
    description: 'Built from scratch for your needs',
    features: [
      'Web applications',
      'E-commerce solutions',
      'API integrations',
      'Complex functionality',
      'Priority support'
    ],
    bestFor: 'Unique requirements',
    popular: false
  }
};

export const BUDGET_RANGES = [
  { value: '', label: 'Select budget range' },
  { value: 'starter', label: 'Starter ($600 - $750)' },
  { value: 'professional', label: 'Professional ($1,650 - $1,800)' },
  { value: 'custom', label: 'Custom ($3,350+)' },
  { value: 'not-sure', label: "Not sure yet" }
];

export const PAYMENT_TERMS = {
  deposit: 50,
  final: 50,
  note: 'Larger projects can use milestone payments.'
};
