import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { businessInfo, services } from '../data/seo-data';

const Pricing = () => {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Web Design Pricing | Pryceless Solutions",
    "description": "Transparent pricing for custom website development in Indiana. Starter packages from $750, Professional from $1,800, E-Commerce from $2,500.",
    "url": `${businessInfo.url}/pricing`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "name": service.name,
        "description": service.description,
        "price": service.priceValue || service.price.replace(/[^0-9]/g, ''),
        "priceCurrency": "USD",
        "seller": {
          "@type": "LocalBusiness",
          "name": businessInfo.name
        }
      }))
    }
  };

  const packages = [
    {
      name: 'Starter',
      price: '$750',
      description: 'Perfect for new businesses needing an online presence',
      features: [
        '1-2 page website',
        'Mobile-responsive design',
        'Contact form',
        'Basic SEO setup',
        'Social media links',
        '2 rounds of revisions'
      ],
      ideal: 'New businesses, personal brands, simple landing pages',
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,800',
      description: 'Ideal for established businesses ready to grow',
      features: [
        'Up to 5 pages',
        'Custom design',
        'Advanced SEO optimization',
        'Google Analytics setup',
        'Speed optimization',
        'Contact forms with validation',
        '3 rounds of revisions',
        '30 days support'
      ],
      ideal: 'Established small businesses, service providers',
      popular: true
    },
    {
      name: 'E-Commerce',
      price: '$2,500+',
      description: 'Full online store with payment processing',
      features: [
        'Complete online store',
        'Product catalog',
        'Shopping cart',
        'Secure payment processing',
        'Inventory management',
        'Order notifications',
        'Customer accounts',
        '60 days support'
      ],
      ideal: 'Retail businesses, product sellers',
      popular: false
    },
    {
      name: 'Custom Web App',
      price: '$3,500+',
      description: 'Complex applications with custom functionality',
      features: [
        'Custom functionality',
        'Database integration',
        'User authentication',
        'API development',
        'Admin dashboards',
        'Third-party integrations',
        'Ongoing support available'
      ],
      ideal: 'Unique business requirements, SaaS ideas',
      popular: false
    }
  ];

  const addons = [
    { name: 'Logo Design', price: '$150-300' },
    { name: 'Content Writing', price: '$50/page' },
    { name: 'Professional Photography', price: '$200+' },
    { name: 'Monthly Maintenance', price: '$75/month' },
    { name: 'Additional Pages', price: '$100/page' },
    { name: 'Rush Delivery', price: '+25%' }
  ];

  return (
    <>
      <SEOHead
        title="Web Design Pricing"
        description="Transparent, affordable web design pricing for Indiana small businesses. Custom websites from $750, e-commerce from $2,500. No hidden fees. See our packages."
        keywords="web design pricing Indiana, website cost, affordable web development, small business website pricing, web design packages"
        canonical="/pricing"
        schema={pricingSchema}
      />

      <main className="pt-20 min-h-screen bg-slate-900">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent <span className="text-sky-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees. No surprise invoices. Know exactly what you're paying for upfront.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative rounded-xl p-6 ${
                    pkg.popular
                      ? 'bg-sky-600 ring-2 ring-sky-400'
                      : 'bg-slate-800'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-white mb-4">{pkg.price}</p>
                  <p className={`text-sm mb-6 ${pkg.popular ? 'text-sky-100' : 'text-gray-400'}`}>
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-sky-200' : 'text-sky-400'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className={pkg.popular ? 'text-white' : 'text-gray-300'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`text-xs mb-6 ${pkg.popular ? 'text-sky-200' : 'text-gray-500'}`}>
                    Ideal for: {pkg.ideal}
                  </p>
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-white text-sky-600 hover:bg-gray-100'
                        : 'bg-sky-600 text-white hover:bg-sky-700'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Optional Add-ons</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {addons.map((addon) => (
                <div key={addon.name} className="bg-slate-800 rounded-lg p-4 flex justify-between items-center">
                  <span className="text-gray-300">{addon.name}</span>
                  <span className="text-sky-400 font-semibold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Package?</h2>
            <p className="text-gray-300 mb-8">
              Let's chat about your project. I'll recommend the best option for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${businessInfo.phone}`}
                className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
              >
                Call {businessInfo.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Pricing;
