import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { industries, businessInfo } from '../data/seo-data';

const Industries = () => {
  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Industries We Serve",
    "itemListElement": industries.map((industry, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": industry.name,
        "description": industry.description
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Industries We Serve"
        description="Specialized web design for restaurants, contractors, healthcare, retail, and professional services. Industry-specific websites that drive results."
        keywords="restaurant website design, contractor website, healthcare web design, retail e-commerce, professional services website"
        canonical="/industries"
        schema={industriesSchema}
      />

      <main className="pt-20 min-h-screen bg-slate-900">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We <span className="text-sky-400">Serve</span>
            </h1>
            <p className="text-xl text-gray-300">
              Specialized web solutions tailored to your industry&apos;s unique needs
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  to={`/industries/${industry.slug}`}
                  className="bg-slate-800 rounded-xl p-8 hover:ring-2 hover:ring-sky-500 transition-all group"
                >
                  <div className="text-5xl mb-6">{industry.icon}</div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                    {industry.name}
                  </h2>
                  <p className="text-gray-400 mb-4">{industry.description}</p>
                  <p className="text-sky-400 font-semibold">{industry.pricing}</p>

                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <h3 className="text-sm font-semibold text-white mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {industry.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                          <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Industry-Specific */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Why Industry-Specific Matters</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-sky-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Know Your Pain Points</h3>
                <p className="text-gray-400 text-sm">We understand the challenges specific to your industry</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-sky-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Purpose-Built Features</h3>
                <p className="text-gray-400 text-sm">Get features that actually matter for your business type</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-sky-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-400 text-sm">Designs optimized for conversions in your industry</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t See Your Industry?</h2>
            <p className="text-gray-300 mb-8">
              We work with businesses of all types. Let&apos;s talk about your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors"
              >
                Get a Custom Quote
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

export default Industries;
