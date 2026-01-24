// =====================================================
// SEO DATA - Pryceless Solutions
// Central data store for all SEO content
// =====================================================

export const businessInfo = {
  name: "Pryceless Solutions",
  owner: "Pryce Hedrick",
  phone: "(812) 610-9805",
  phoneLink: "tel:+18126109805",
  email: "prycehedrick@gmail.com",
  address: {
    street: "",
    city: "Loogootee",
    state: "IN",
    zip: "47553",
    full: "Loogootee, IN 47553"
  },
  hours: "Monday - Friday, 9:00 AM - 5:00 PM",
  website: "https://prycehedrick.com",
  url: "https://prycehedrick.com",
  tagline: "Professional websites for small businesses. No monthly fees.",
  geo: {
    latitude: 38.6767,
    longitude: -86.9142
  },
  areasServed: [
    "Loogootee, Indiana",
    "Bedford, Indiana",
    "Jasper, Indiana",
    "Washington, Indiana",
    "Vincennes, Indiana",
    "Bloomington, Indiana",
    "Paoli, Indiana",
    "Mitchell, Indiana",
    "Martin County",
    "Lawrence County",
    "Dubois County",
    "Daviess County",
    "Knox County",
    "Monroe County",
    "Orange County",
    "Southern Indiana"
  ],
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61585462323495",
    linkedin: "https://www.linkedin.com/in/prycehedrick",
    github: "https://github.com/PryceHedrick"
  }
};

export const services = [
  {
    id: "starter",
    name: "Starter Website",
    price: "$750",
    priceValue: 750,
    description: "1-2 page mobile-responsive website with contact form, basic SEO setup, and Google Analytics integration.",
    timeline: "1-2 weeks",
    idealFor: "Small businesses, freelancers, entrepreneurs",
    includes: [
      "1-2 custom pages",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "Google Analytics",
      "1 round of revisions",
      "30-day support"
    ]
  },
  {
    id: "professional",
    name: "Professional Website",
    price: "$1,800",
    priceValue: 1800,
    description: "Up to 5 custom-designed pages with advanced SEO, animations, and Google Business Profile setup.",
    timeline: "2-4 weeks",
    idealFor: "Established small businesses",
    popular: true,
    includes: [
      "Up to 5 custom pages",
      "Premium design & animations",
      "Advanced SEO optimization",
      "Schema markup",
      "Google Business Profile setup",
      "Contact & lead forms",
      "2 rounds of revisions",
      "60-day support"
    ]
  },
  {
    id: "ecommerce",
    name: "E-Commerce Platform",
    price: "$2,500+",
    priceValue: 2500,
    description: "Full online store with product management, secure checkout, and payment processing.",
    timeline: "4-6 weeks",
    idealFor: "Retailers ready to sell online",
    includes: [
      "Product catalog & management",
      "Shopping cart & checkout",
      "Payment processing (Stripe/PayPal)",
      "Inventory tracking",
      "Order management",
      "Shipping integration",
      "Customer accounts",
      "90-day support"
    ]
  },
  {
    id: "webapp",
    name: "Custom Web Application",
    price: "$3,500+",
    priceValue: 3500,
    description: "Bespoke web applications including dashboards, booking systems, and API integrations.",
    timeline: "4-8 weeks",
    idealFor: "Businesses with unique digital needs",
    includes: [
      "Custom functionality",
      "User authentication",
      "Database integration",
      "Admin dashboard",
      "API integrations",
      "Responsive design",
      "Documentation",
      "90-day support"
    ]
  },
  {
    id: "landing",
    name: "Landing Pages",
    price: "$500+",
    priceValue: 500,
    description: "High-converting landing pages designed to capture leads and drive conversions.",
    timeline: "3-5 days",
    idealFor: "Marketing campaigns, product launches",
    includes: [
      "Single high-impact page",
      "Conversion optimization",
      "Lead capture form",
      "A/B testing ready",
      "Analytics integration",
      "1 round of revisions"
    ]
  },
  {
    id: "redesign",
    name: "Website Redesign",
    price: "$1,000+",
    priceValue: 1000,
    description: "Transform your outdated website into a modern, fast, mobile-responsive site.",
    timeline: "2-4 weeks",
    idealFor: "Businesses with outdated websites",
    includes: [
      "Modern design refresh",
      "Mobile optimization",
      "Performance improvements",
      "SEO migration",
      "Content migration",
      "Platform migration if needed",
      "60-day support"
    ]
  }
];

export const serviceAreas = [
  {
    city: "Loogootee",
    state: "Indiana",
    slug: "loogootee-indiana",
    distance: "0 miles",
    population: "2,600",
    county: "Martin County",
    description: "Based in Loogootee, we're your local web development partner. We understand the unique needs of Martin County businesses and are committed to helping our neighbors succeed online.",
    keywords: ["web design Loogootee", "website developer Martin County", "Loogootee web developer"],
    highlights: ["Home base - fastest response times", "Deep local market knowledge", "Face-to-face meetings available"]
  },
  {
    city: "Bedford",
    state: "Indiana",
    slug: "bedford-indiana",
    distance: "20 miles",
    population: "13,400",
    county: "Lawrence County",
    description: "Bedford's thriving business community deserves professional web presence. From limestone quarries to local retail, we help Bedford businesses compete in the digital age.",
    keywords: ["web design Bedford IN", "website developer Lawrence County", "Bedford Indiana web developer"],
    highlights: ["Lawrence County's largest city", "Growing business district", "Tourism and hospitality focus"]
  },
  {
    city: "Jasper",
    state: "Indiana",
    slug: "jasper-indiana",
    distance: "25 miles",
    population: "15,800",
    county: "Dubois County",
    description: "Jasper's German heritage and strong manufacturing economy make it a hub of business activity. We help Jasper businesses showcase their quality online.",
    keywords: ["web design Jasper IN", "website developer Dubois County", "Jasper Indiana web developer"],
    highlights: ["Strong manufacturing sector", "Active downtown business district", "Growing tourism industry"]
  },
  {
    city: "Washington",
    state: "Indiana",
    slug: "washington-indiana",
    distance: "30 miles",
    population: "12,000",
    county: "Daviess County",
    description: "Washington's diverse economy from agriculture to retail benefits from strong online presence. We help Washington businesses reach customers beyond the county line.",
    keywords: ["web design Washington IN", "website developer Daviess County", "Washington Indiana web developer"],
    highlights: ["County seat with government offices", "Agricultural hub", "Growing retail sector"]
  },
  {
    city: "Vincennes",
    state: "Indiana",
    slug: "vincennes-indiana",
    distance: "40 miles",
    population: "17,000",
    county: "Knox County",
    description: "Indiana's first city deserves first-class websites. Vincennes businesses compete across state lines, and we help them stand out with professional web presence.",
    keywords: ["web design Vincennes IN", "website developer Knox County", "Vincennes Indiana web developer"],
    highlights: ["Indiana's oldest city", "Vincennes University community", "Cross-state commerce with Illinois"]
  },
  {
    city: "Bloomington",
    state: "Indiana",
    slug: "bloomington-indiana",
    distance: "45 miles",
    population: "85,000",
    county: "Monroe County",
    description: "Bloomington's vibrant economy, driven by Indiana University and a thriving arts scene, demands modern digital solutions. We help Bloomington businesses compete.",
    keywords: ["web design Bloomington IN", "website developer Monroe County", "Bloomington Indiana web developer"],
    highlights: ["Indiana University market", "Arts and culture hub", "Tech-savvy customer base"]
  },
  {
    city: "Paoli",
    state: "Indiana",
    slug: "paoli-indiana",
    distance: "35 miles",
    population: "3,700",
    county: "Orange County",
    description: "Paoli's tourism industry around the ski resort and surrounding natural beauty needs strong web presence. We help Paoli businesses capture seasonal visitors.",
    keywords: ["web design Paoli IN", "website developer Orange County", "Paoli Indiana web developer"],
    highlights: ["Paoli Peaks ski resort area", "Tourism destination", "Growing hospitality sector"]
  },
  {
    city: "Mitchell",
    state: "Indiana",
    slug: "mitchell-indiana",
    distance: "30 miles",
    population: "4,300",
    county: "Lawrence County",
    description: "Mitchell, home to Spring Mill State Park and Virgil Grissom's legacy, attracts visitors year-round. We help Mitchell businesses capture that traffic online.",
    keywords: ["web design Mitchell IN", "website developer Mitchell Indiana", "Mitchell web developer"],
    highlights: ["Spring Mill State Park tourism", "Historic significance", "Growing small business community"]
  }
];

export const industries = [
  {
    id: "restaurants",
    name: "Restaurants & Cafes",
    slug: "restaurant-website-design",
    icon: "🍽️",
    shortDesc: "Websites that make customers hungry",
    description: "Professional restaurant websites that showcase your menu, ambiance, and make it easy for customers to find you, order online, or make reservations.",
    painPoints: [
      "Menu changes are impossible to update on current site",
      "Customers can't find hours or location easily",
      "No online ordering or reservation system",
      "Website looks outdated compared to competitors",
      "Not showing up in 'restaurants near me' searches"
    ],
    solutions: [
      "Easy-to-update menu system you control",
      "Prominent hours, location, and contact info",
      "Online ordering integration (if desired)",
      "Modern, appetizing design with food photography",
      "Local SEO to rank for 'near me' searches"
    ],
    features: [
      { name: "Digital Menu", desc: "Easy-to-update menu with pricing and photos" },
      { name: "Online Ordering", desc: "Take orders directly or integrate with delivery apps" },
      { name: "Reservations", desc: "Let customers book tables online" },
      { name: "Gallery", desc: "Showcase your food and atmosphere" },
      { name: "Local SEO", desc: "Rank for 'restaurants near me' searches" },
      { name: "Social Integration", desc: "Connect Instagram feeds and reviews" }
    ],
    pricing: "Starting at $1,800 for a complete restaurant website",
    keywords: ["restaurant website design", "cafe website", "menu website", "restaurant online ordering"]
  },
  {
    id: "barbershops",
    name: "Barbershops & Salons",
    slug: "barbershop-salon-website-design",
    icon: "💈",
    shortDesc: "Book more appointments online",
    description: "Modern salon and barbershop websites with online booking, service menus, and the professional look that reflects your style.",
    painPoints: [
      "Phone tag with customers trying to book",
      "No way to showcase your work",
      "Competitors with better online presence stealing clients",
      "Can't display services and pricing clearly",
      "No reviews or social proof visible"
    ],
    solutions: [
      "24/7 online booking system",
      "Portfolio gallery of your best work",
      "Clear service menu with pricing",
      "Review integration and testimonials",
      "Social media integration"
    ],
    features: [
      { name: "Online Booking", desc: "24/7 appointment scheduling" },
      { name: "Service Menu", desc: "Clear pricing for all services" },
      { name: "Portfolio Gallery", desc: "Show off your best cuts and styles" },
      { name: "Staff Profiles", desc: "Introduce your team with bios" },
      { name: "Reviews", desc: "Display Google and Facebook reviews" },
      { name: "Contact & Location", desc: "Easy-to-find directions and hours" }
    ],
    pricing: "Starting at $1,500 for a complete salon website",
    keywords: ["barbershop website design", "salon website", "hair salon website", "spa website design"]
  },
  {
    id: "contractors",
    name: "Contractors & Home Services",
    slug: "contractor-website-design",
    icon: "🔨",
    shortDesc: "Win more bids with credibility",
    description: "Professional contractor websites that showcase your work, build trust, and generate leads for plumbers, electricians, HVAC, and construction businesses.",
    painPoints: [
      "Losing jobs to competitors with better websites",
      "No way to show past project quality",
      "Customers can't verify you're licensed/insured",
      "Phone is only contact method",
      "Not ranking in local search results"
    ],
    solutions: [
      "Professional site that builds instant trust",
      "Project gallery with before/after photos",
      "Prominently display licenses and insurance",
      "Quote request forms for lead generation",
      "Local SEO for '[service] near me' searches"
    ],
    features: [
      { name: "Project Gallery", desc: "Before/after photos of your work" },
      { name: "Quote Requests", desc: "Lead capture forms for estimates" },
      { name: "Service Areas", desc: "Show where you work" },
      { name: "Credentials", desc: "Display licenses, insurance, certifications" },
      { name: "Testimonials", desc: "Customer reviews and ratings" },
      { name: "Emergency Contact", desc: "24/7 contact for urgent jobs" }
    ],
    pricing: "Starting at $1,800 for a complete contractor website",
    keywords: ["contractor website design", "plumber website", "electrician website", "HVAC website", "construction website"]
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    slug: "retail-ecommerce-website-design",
    icon: "🛒",
    shortDesc: "Sell products online 24/7",
    description: "Complete e-commerce solutions for retailers ready to sell online, with product management, secure checkout, and inventory tracking.",
    painPoints: [
      "Only selling during store hours",
      "Customers can't browse products online",
      "Losing sales to Amazon and big box stores",
      "No way to manage inventory digitally",
      "Complex checkout processes losing customers"
    ],
    solutions: [
      "24/7 online store that never closes",
      "Beautiful product catalog with search",
      "Compete with your own branded experience",
      "Integrated inventory management",
      "Streamlined checkout with multiple payment options"
    ],
    features: [
      { name: "Product Catalog", desc: "Easy-to-manage product listings" },
      { name: "Shopping Cart", desc: "Smooth add-to-cart experience" },
      { name: "Secure Checkout", desc: "SSL encrypted payments" },
      { name: "Inventory Tracking", desc: "Real-time stock management" },
      { name: "Order Management", desc: "Track and fulfill orders" },
      { name: "Customer Accounts", desc: "Order history and wishlists" }
    ],
    pricing: "Starting at $2,500 for a complete e-commerce store",
    keywords: ["retail website design", "e-commerce website", "online store", "shop website"]
  },
  {
    id: "professional",
    name: "Professional Services",
    slug: "professional-services-website-design",
    icon: "💼",
    shortDesc: "Establish authority and trust",
    description: "Websites for lawyers, accountants, consultants, and other professionals that establish credibility and generate qualified leads.",
    painPoints: [
      "Outdated website hurting professional image",
      "Clients can't find information about services",
      "No clear way for prospects to get in touch",
      "Competitors appearing more established",
      "No way to share expertise (blog, resources)"
    ],
    solutions: [
      "Modern, professional design that builds trust",
      "Clear service descriptions with outcomes",
      "Easy consultation scheduling or contact",
      "Case studies and testimonials",
      "Blog/resource section for thought leadership"
    ],
    features: [
      { name: "Professional Design", desc: "Clean, trustworthy aesthetic" },
      { name: "Service Pages", desc: "Detailed descriptions of each service" },
      { name: "Team Bios", desc: "Introduce your experts" },
      { name: "Case Studies", desc: "Show results and outcomes" },
      { name: "Blog", desc: "Establish thought leadership" },
      { name: "Lead Capture", desc: "Consultation request forms" }
    ],
    pricing: "Starting at $1,800 for a professional services website",
    keywords: ["lawyer website design", "accountant website", "consultant website", "professional website"]
  }
];

export const faqs = [
  // Pricing Category
  {
    category: "Pricing",
    question: "How much does a website cost in Indiana?",
    answer: "Our websites start at $750 for a simple 1-2 page site, $1,800 for a full 5-page professional site with SEO, $2,500+ for e-commerce stores, and $3,500+ for custom web applications. Unlike agencies charging $10,000+, we offer premium quality at small business prices with no monthly fees."
  },
  {
    category: "Pricing",
    question: "Do you charge monthly fees for websites?",
    answer: "No. We charge a one-time fee for your website. You only pay for hosting (typically $0-20/month through Vercel). No surprise bills, no recurring design charges, no hidden costs. Many competitors charge $100-500/month forever - we don't."
  },
  {
    category: "Pricing",
    question: "Do you offer payment plans?",
    answer: "Our standard terms are 50% deposit to start and 50% before launch. For larger projects ($3,500+), we can discuss milestone-based payments. We want to make professional web development accessible to small businesses."
  },
  {
    category: "Pricing",
    question: "What's included in the price?",
    answer: "All packages include custom design (no templates), mobile responsiveness, basic SEO setup, contact forms, and post-launch support. Higher tiers add more pages, advanced SEO, animations, and additional features. We never nickel-and-dime you for basics."
  },
  // Process Category
  {
    category: "Process",
    question: "How long does it take to build a website?",
    answer: "Starter sites take 1-2 weeks. Professional sites take 2-4 weeks. E-commerce platforms take 4-6 weeks. Custom web applications take 4-8 weeks. We provide a specific timeline before starting and stick to it."
  },
  {
    category: "Process",
    question: "How do I get started?",
    answer: "Easy! Email prycehedrick@gmail.com or use the contact form. We'll schedule a free 15-minute consultation to discuss your project, then provide a detailed quote within 24-48 hours."
  },
  {
    category: "Process",
    question: "What do you need from me to start?",
    answer: "Just your vision, brand colors/logo if you have them, and content (text, photos). If you don't have content ready, we can work with placeholder content and swap it out later. We guide you through everything."
  },
  {
    category: "Process",
    question: "How many revisions are included?",
    answer: "Starter packages include 1 round of revisions, Professional includes 2 rounds. A revision round means collecting all your feedback and implementing it at once. We're reasonable - minor tweaks don't count against your rounds."
  },
  // Technical Category
  {
    category: "Technical",
    question: "Will my website work on mobile phones?",
    answer: "Every website we build is mobile-responsive and mobile-first. Over 60% of web traffic comes from mobile devices, so we design for phones first, then scale up. Your site will look great on all devices."
  },
  {
    category: "Technical",
    question: "Will my website show up on Google?",
    answer: "Yes. Every site includes SEO fundamentals: proper meta tags, schema markup, fast loading, and mobile optimization. We also submit to Google Search Console. Local businesses typically see Google visibility within 2-4 weeks."
  },
  {
    category: "Technical",
    question: "What technology do you use?",
    answer: "We use modern technologies: React, Next.js, TypeScript, and Tailwind CSS. Sites are hosted on Vercel for maximum speed. Our sites load in under 2 seconds and score 90+ on Google PageSpeed - 3-5x faster than WordPress."
  },
  {
    category: "Technical",
    question: "Do you provide hosting?",
    answer: "We set up hosting on Vercel, which offers free hosting for most sites. You own the hosting account directly - we just set it up. No middleman fees, no vendor lock-in."
  },
  // Services Category
  {
    category: "Services",
    question: "Do you serve businesses outside Loogootee?",
    answer: "Absolutely! While based in Loogootee, we serve all of Southern Indiana: Bedford, Jasper, Washington, Vincennes, Bloomington, Paoli, Mitchell, and beyond. We also work nationwide - everything is done digitally."
  },
  {
    category: "Services",
    question: "Can you build e-commerce websites?",
    answer: "Yes! We build full e-commerce platforms with product management, shopping carts, secure checkout, inventory tracking, and payment processing (Stripe, PayPal, Square). E-commerce sites start at $2,500."
  },
  {
    category: "Services",
    question: "Do you build custom web applications?",
    answer: "Absolutely. We create dashboards, booking systems, client portals, membership sites, and API integrations. If you can dream it, we can probably build it. Custom applications start at $3,500."
  },
  {
    category: "Services",
    question: "Can you help with SEO?",
    answer: "Yes! Every website includes SEO fundamentals. For businesses wanting to dominate local search, we offer comprehensive local SEO: Google Business Profile optimization, schema markup, and content strategy."
  },
  // Comparison Category
  {
    category: "Comparison",
    question: "Why hire you instead of using Wix or Squarespace?",
    answer: "DIY builders seem cheap but cost more long-term ($200-500/year in fees), load slowly (hurting SEO), look generic, and limit growth. A custom site is a one-time investment that performs better, ranks higher, and represents your unique brand."
  },
  {
    category: "Comparison",
    question: "How are you different from other web designers?",
    answer: "Three key differences: 1) No monthly fees - you pay once and own it forever. 2) Modern technology - our sites are 3-5x faster than WordPress. 3) Personal service - you work directly with the developer, not account managers or overseas teams."
  }
];

export const testimonials = [
  {
    name: "Coming Soon",
    role: "Business Owner",
    quote: "We're collecting testimonials from our happy clients. Yours could be here!",
    rating: 5
  }
];

// Case studies with measurable results
export const caseStudies = [
  {
    id: 1,
    client: "Panda International",
    project: "Order Management System",
    description: "Custom OMS that handles everything from order intake to shipping labels",
    metrics: {
      hoursSaved: "20+",
      errors: "0",
      years: "2+"
    },
    award: "USI Outstanding Senior Project 2024"
  },
  {
    id: 2,
    client: "Card Guys",
    project: "E-Commerce Store",
    description: "Full online store that expanded their business beyond eBay",
    metrics: {
      revenueChannel: "new",
      syncType: "auto",
      paymentOptions: "3+"
    },
    link: "https://cardguys.store"
  }
];

// ROI Calculator industry defaults
export const roiDefaults = {
  restaurant: {
    name: "Restaurant / Cafe",
    monthlyVisitors: 1000,
    conversionRate: 3,
    avgOrderValue: 35,
    websiteCost: 1800
  },
  contractor: {
    name: "Contractor / Home Services",
    monthlyVisitors: 500,
    conversionRate: 5,
    avgOrderValue: 2000,
    websiteCost: 1800
  },
  retail: {
    name: "Retail / E-Commerce",
    monthlyVisitors: 800,
    conversionRate: 2.5,
    avgOrderValue: 75,
    websiteCost: 2500
  },
  professional: {
    name: "Professional Services",
    monthlyVisitors: 400,
    conversionRate: 4,
    avgOrderValue: 500,
    websiteCost: 1800
  }
};

// Recent activity feed items
export const recentActivities = [
  {
    id: 1,
    type: "launch",
    message: "Just launched: Card Guys E-Commerce Store",
    date: "2024-12"
  },
  {
    id: 2,
    type: "milestone",
    message: "Panda OMS: 10,000th order processed",
    date: "2024-11"
  },
  {
    id: 3,
    type: "review",
    message: "New 5-star review received",
    date: "2024-12"
  }
];
