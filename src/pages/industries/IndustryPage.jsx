import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { industries, businessInfo } from '../../data/seo-data';

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = industries.find(i => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": industry.heroTitle,
    "description": industry.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": businessInfo.name,
      "telephone": businessInfo.phone
    },
    "areaServed": {
      "@type": "State",
      "name": "Indiana"
    }
  };

  const otherIndustries = industries.filter(i => i.slug !== slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={industry.heroTitle}
        description={industry.description}
        keywords={industry.keywords.join(', ')}
        canonical={`/industries/${industry.slug}`}
        schema={industrySchema}
      />

      <main className="pt-20 min-h-screen bg-slate-900">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{industry.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {industry.heroTitle}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {industry.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors"
              >
                {industry.cta}
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

        {/* Pain Points & Solutions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Pain Points */}
              <div className="bg-slate-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-red-400">❌</span> Common Problems
                </h2>
                <ul className="space-y-4">
                  {industry.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-400 text-sm">!</span>
                      </span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-slate-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-green-400">✓</span> Our Solutions
                </h2>
                <ul className="space-y-4">
                  {industry.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What's Included in Your {industry.name} Website
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {industry.features.map((feature, i) => (
                <div key={i} className="bg-slate-800 rounded-lg p-4 flex items-center gap-3">
                  <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing</h2>
            <p className="text-4xl font-bold text-sky-400 mb-4">{industry.pricing}</p>
            <p className="text-gray-400 mb-8">
              No monthly fees. You own your website forever.
            </p>
            <Link
              to="/pricing"
              className="text-sky-400 hover:text-sky-300"
            >
              View all pricing options →
            </Link>
          </div>
        </section>

        {/* Other Industries */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Other Industries We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherIndustries.map((other) => (
                <Link
                  key={other.id}
                  to={`/industries/${other.slug}`}
                  className="bg-slate-800 rounded-xl p-6 text-center hover:ring-2 hover:ring-sky-500 transition-all"
                >
                  <div className="text-4xl mb-4">{other.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{other.name}</h3>
                  <p className="text-gray-400 text-sm">{other.pricing}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Grow Your {industry.name.replace(' & ', ' and ')} Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Get a custom quote for your project. Free consultation, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors"
              >
                {industry.cta}
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

export default IndustryPage;
