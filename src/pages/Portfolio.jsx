import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/seo-data';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Store',
      category: 'E-Commerce',
      description: 'Full-featured online store with product catalog, cart, and secure checkout.',
      image: '/images/portfolio/ecommerce-placeholder.jpg',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      results: ['200% increase in online sales', 'Mobile-first design', 'Under 2s load time']
    },
    {
      title: 'Restaurant Website',
      category: 'Restaurant',
      description: 'Modern restaurant website with online menu, reservations, and location info.',
      image: '/images/portfolio/restaurant-placeholder.jpg',
      tags: ['React', 'Tailwind CSS', 'Google Maps'],
      results: ['50% more reservations', 'Mobile-friendly menu', 'Google Maps integration']
    },
    {
      title: 'Contractor Portfolio',
      category: 'Contractor',
      description: 'Professional portfolio showcasing projects with before/after galleries.',
      image: '/images/portfolio/contractor-placeholder.jpg',
      tags: ['React', 'Contact Forms', 'Image Gallery'],
      results: ['3x more quote requests', 'Project gallery', 'Lead capture forms']
    },
    {
      title: 'Healthcare Practice',
      category: 'Healthcare',
      description: 'Medical practice website with appointment booking and patient resources.',
      image: '/images/portfolio/healthcare-placeholder.jpg',
      tags: ['React', 'HIPAA Compliant', 'Booking System'],
      results: ['Online appointment booking', 'Patient portal', 'HIPAA considerations']
    },
    {
      title: 'Real Estate Agency',
      category: 'Real Estate',
      description: 'Property listing website with search filters and agent profiles.',
      image: '/images/portfolio/realestate-placeholder.jpg',
      tags: ['React', 'MLS Integration', 'Search Filters'],
      results: ['Property search', 'Agent profiles', 'Lead generation']
    },
    {
      title: 'Local Retail Shop',
      category: 'Retail',
      description: 'Retail website with product showcase and store information.',
      image: '/images/portfolio/retail-placeholder.jpg',
      tags: ['React', 'Product Catalog', 'SEO'],
      results: ['Local SEO optimized', 'Product showcase', 'Store locator']
    }
  ];

  const portfolioSchema = {
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
            "name": "Portfolio",
            "item": `${businessInfo.url}/portfolio`
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "name": "Web Design Portfolio | Pryceless Solutions",
        "description": "View our portfolio of custom websites for Indiana small businesses. See examples of e-commerce, restaurant, contractor, and professional service websites.",
        "url": `${businessInfo.url}/portfolio`,
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": projects.map((project, index) => ({
            "@type": "CreativeWork",
            "position": index + 1,
            "name": project.title,
            "description": project.description
          }))
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Portfolio"
        description="View our portfolio of custom websites built for Indiana small businesses. Examples include e-commerce stores, restaurant websites, contractor portfolios, and more."
        keywords="web design portfolio, website examples, Indiana web design work, custom website examples, small business websites"
        canonical="/portfolio"
        schema={portfolioSchema}
      />

      <main className="pt-20 min-h-screen bg-slate-900">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-sky-400">Work</span>
            </h1>
            <p className="text-xl text-gray-300">
              Custom websites built for Indiana small businesses. Quality work that delivers results.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl overflow-hidden group hover:ring-2 hover:ring-sky-500 transition-all"
                >
                  <div className="aspect-video bg-slate-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 to-purple-600/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/20">{project.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sky-400 text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-slate-700 pt-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-gray-400 text-sm flex items-center gap-2">
                            <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8">
              Let&apos;s create something great for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
