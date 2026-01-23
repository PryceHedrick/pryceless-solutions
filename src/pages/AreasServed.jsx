import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { serviceAreas, businessInfo } from '../data/seo-data';

const AreasServed = () => {
  const areasSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": businessInfo.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Areas Served",
            "item": `${businessInfo.url}/areas-served`
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": businessInfo.name,
        "areaServed": serviceAreas.map(area => ({
          "@type": "City",
          "name": `${area.city}, ${area.state}`
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Areas Served"
        description="Pryceless Solutions provides web design services throughout Southern Indiana including Bedford, Jasper, Washington, Vincennes, Bloomington, and more."
        keywords="web design Indiana, web developer southern Indiana, website designer Bedford, Jasper web design"
        canonical="/areas-served"
        schema={areasSchema}
      />

      <main className="pt-20 min-h-screen bg-slate-900">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Areas We <span className="text-sky-400">Serve</span>
            </h1>
            <p className="text-xl text-gray-300">
              Professional web design for businesses throughout Southern Indiana and beyond
            </p>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceAreas.map((area) => (
                <Link
                  key={area.id}
                  to={`/areas/${area.slug}`}
                  className="bg-slate-800 rounded-xl p-6 hover:ring-2 hover:ring-sky-500 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">📍</span>
                    {area.distance === 'Home base' && (
                      <span className="bg-sky-500 text-white text-xs px-2 py-1 rounded">HQ</span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {area.city}
                  </h2>
                  <p className="text-gray-400 text-sm mb-3">{area.county}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{area.distance}</span>
                    <span>•</span>
                    <span>Pop. {area.population}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Based in Loogootee, Serving All of Indiana</h2>
            <p className="text-gray-300 mb-8">
              While we&apos;re headquartered in Loogootee, we work with businesses throughout Indiana and nationwide.
              All consultations and communication can be done remotely via video calls and email.
            </p>
            <div className="bg-slate-700 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-sky-400 mb-2">{serviceAreas.length}</div>
                  <div className="text-gray-400">Service Areas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-sky-400 mb-2">50+</div>
                  <div className="text-gray-400">Miles Radius</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-sky-400 mb-2">100%</div>
                  <div className="text-gray-400">Remote Capable</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Website for Your Business?</h2>
            <p className="text-gray-300 mb-8">
              Get a free quote today. We&apos;ll discuss your project and provide a custom proposal.
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

export default AreasServed;
