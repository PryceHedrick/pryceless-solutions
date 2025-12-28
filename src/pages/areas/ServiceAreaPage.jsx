import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { serviceAreas, services, businessInfo } from '../../data/seo-data';

const ServiceAreaPage = () => {
  const { slug } = useParams();
  const area = serviceAreas.find(a => a.slug === slug);

  if (!area) {
    return <Navigate to="/areas-served" replace />;
  }

  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${businessInfo.name} - ${area.city} Web Design`,
    "description": area.description,
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "url": `${businessInfo.url}/areas/${area.slug}`,
    "areaServed": {
      "@type": "City",
      "name": area.city,
      "containedIn": {
        "@type": "State",
        "name": area.state
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Services",
      "itemListElement": services.slice(0, 4).map(s => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.name
        }
      }))
    }
  };

  const otherAreas = serviceAreas.filter(a => a.slug !== slug).slice(0, 4);

  return (
    <>
      <SEOHead
        title={`Web Design ${area.city}, ${area.state}`}
        description={area.description}
        keywords={area.keywords.join(', ')}
        canonical={`/areas/${area.slug}`}
        schema={areaSchema}
      />

      <main className="pt-20 min-h-screen bg-slate-900">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-4xl mx-auto">
            <Link to="/areas-served" className="text-sky-400 hover:text-sky-300 text-sm mb-4 inline-block">
              ← All Service Areas
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Web Design in <span className="text-sky-400">{area.city}, {area.state}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {area.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${businessInfo.phone}`}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
              >
                Call {businessInfo.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Area Info */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-slate-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">About {area.city}</h2>
                  <p className="text-gray-300 mb-6">{area.localInfo}</p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-700 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-sky-400">{area.population}</div>
                      <div className="text-gray-400 text-sm">Population</div>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-sky-400">{area.distance}</div>
                      <div className="text-gray-400 text-sm">From Loogootee</div>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-sky-400">{area.county}</div>
                      <div className="text-gray-400 text-sm">County</div>
                    </div>
                  </div>

                  {area.landmarks && (
                    <>
                      <h3 className="text-lg font-semibold text-white mb-3">Local Landmarks</h3>
                      <div className="flex flex-wrap gap-2">
                        {area.landmarks.map((landmark, i) => (
                          <span key={i} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                            {landmark}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="bg-slate-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Our Services in {area.city}</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.slice(0, 4).map((service) => (
                      <div key={service.id} className="bg-slate-700 rounded-lg p-4">
                        <h3 className="text-white font-semibold mb-2">{service.name}</h3>
                        <p className="text-sky-400 font-bold mb-2">{service.price}</p>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Link to="/pricing" className="text-sky-400 hover:text-sky-300">
                      View all pricing →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Get Started Today</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Ready for a professional website for your {area.city} business?
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors mb-3"
                  >
                    Request a Quote
                  </Link>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="block w-full text-center py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                </div>

                <div className="bg-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Other Areas We Serve</h3>
                  <ul className="space-y-3">
                    {otherAreas.map((otherArea) => (
                      <li key={otherArea.id}>
                        <Link
                          to={`/areas/${otherArea.slug}`}
                          className="flex items-center justify-between text-gray-300 hover:text-sky-400 transition-colors"
                        >
                          <span>{otherArea.city}, IN</span>
                          <span className="text-gray-500 text-sm">{otherArea.distance}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <Link to="/areas-served" className="text-sky-400 hover:text-sky-300 text-sm">
                      View all areas →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for a Website That Works for Your {area.city} Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Get a custom quote for your project. No obligation, no pressure.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors"
            >
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceAreaPage;
