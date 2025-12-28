import { Link } from 'react-router-dom';
import { businessInfo } from '../../data/seo-data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    { name: 'Bedford', slug: 'bedford' },
    { name: 'Jasper', slug: 'jasper' },
    { name: 'Washington', slug: 'washington' },
    { name: 'Vincennes', slug: 'vincennes' },
    { name: 'Bloomington', slug: 'bloomington' },
    { name: 'Paoli', slug: 'paoli' },
    { name: 'Mitchell', slug: 'mitchell' },
    { name: 'Loogootee', slug: 'loogootee' }
  ];

  const industries = [
    { name: 'Restaurants', slug: 'restaurants' },
    { name: 'Contractors', slug: 'contractors' },
    { name: 'Real Estate', slug: 'real-estate' },
    { name: 'Healthcare', slug: 'healthcare' },
    { name: 'Retail', slug: 'retail' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Pryceless Solutions</h3>
            <p className="text-gray-400 text-sm mb-4">
              Custom websites, e-commerce, and web applications for small businesses in Southern Indiana.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <a href={`tel:${businessInfo.phone}`} className="hover:text-sky-400 transition-colors">
                  {businessInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${businessInfo.email}`} className="hover:text-sky-400 transition-colors">
                  {businessInfo.email}
                </a>
              </p>
              <p>{businessInfo.address.city}, {businessInfo.address.state}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-sky-400 transition-colors">Pricing</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-sky-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-sky-400 transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-sky-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-sky-400 transition-colors">Contact</Link></li>
              <li><Link to="/links" className="text-gray-400 hover:text-sky-400 transition-colors">All Links</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link to={`/areas/${area.slug}`} className="text-gray-400 hover:text-sky-400 transition-colors">
                    Web Design {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Industries We Serve</h3>
            <ul className="space-y-2 text-sm">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link to={`/industries/${industry.slug}`} className="text-gray-400 hover:text-sky-400 transition-colors">
                    {industry.name} Websites
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Pryceless Solutions. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Serving Southern Indiana: Bedford, Jasper, Washington, Vincennes, Bloomington & beyond
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
