import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/seo-data';
import { getAllTiers, PAYMENT_TERMS } from '../config/pricing';
import { isPromoActive, HOLIDAY_PROMO } from '../config/promo';

const Pricing = () => {
  const allTiers = getAllTiers();
  const showPromo = isPromoActive();

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Web Design Pricing | Pryceless Solutions",
    "description": "Transparent pricing for custom website development in Indiana. Starter packages from $600, Professional from $1,650, E-Commerce from $2,250.",
    "url": `${businessInfo.url}/pricing`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allTiers.map((tier, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "name": tier.name,
        "description": tier.description,
        "price": showPromo ? tier.holidayPrice : tier.basePrice,
        "priceCurrency": "USD",
        "seller": {
          "@type": "LocalBusiness",
          "name": businessInfo.name
        }
      }))
    }
  };

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
        description="Transparent, affordable web design pricing for Indiana small businesses. Custom websites from $600, e-commerce from $2,250. No hidden fees. See our packages."
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              No hidden fees. No surprise invoices. Know exactly what you&apos;re paying for upfront.
            </p>
            {showPromo && (
              <p className="text-cyan-400 font-medium">
                {HOLIDAY_PROMO.urgencyText}
              </p>
            )}
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative rounded-xl p-6 ${
                    tier.popular
                      ? 'bg-sky-600 ring-2 ring-sky-400'
                      : 'bg-slate-800'
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  {showPromo && !tier.popular && (
                    <span className="absolute -top-3 right-4 bg-cyan-400 text-slate-900 text-xs font-semibold px-2 py-1 rounded-full">
                      {HOLIDAY_PROMO.badgeText}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>

                  {/* Price with strikethrough for promo */}
                  <div className="mb-4">
                    {showPromo ? (
                      <>
                        <span className="text-lg text-gray-400 line-through mr-2">
                          ${tier.basePrice.toLocaleString()}
                        </span>
                        <span className="text-3xl font-bold text-cyan-400">
                          ${tier.holidayPrice.toLocaleString()}+
                        </span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-white">
                        ${tier.basePrice.toLocaleString()}+
                      </span>
                    )}
                  </div>

                  <p className={`text-sm mb-6 ${tier.popular ? 'text-sky-100' : 'text-gray-400'}`}>
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-sky-200' : 'text-sky-400'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className={tier.popular ? 'text-white' : 'text-gray-300'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`text-xs mb-6 ${tier.popular ? 'text-sky-200' : 'text-gray-500'}`}>
                    Best for: {tier.bestFor}
                  </p>
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      tier.popular
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

        {/* Payment Terms */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400">
              <span className="text-sky-400 font-medium">{PAYMENT_TERMS.deposit}% upfront</span> to start,{' '}
              <span className="text-sky-400 font-medium">{PAYMENT_TERMS.final}% on completion</span>.{' '}
              {PAYMENT_TERMS.note}
            </p>
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
              Let&apos;s chat about your project. I&apos;ll recommend the best option for your needs and budget.
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
