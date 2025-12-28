import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">Pryceless</span>
            <span className="text-sky-400">Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? 'text-sky-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>

            <Link
              to="/pricing"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/pricing') ? 'text-sky-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/portfolio"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/portfolio') ? 'text-sky-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Portfolio
            </Link>

            {/* Areas Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAreasOpen(!areasOpen)}
                onBlur={() => setTimeout(() => setAreasOpen(false), 200)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                  location.pathname.startsWith('/areas') ? 'text-sky-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Areas Served
                <svg className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/areas-served"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                  >
                    All Areas
                  </Link>
                  <div className="border-t border-slate-700 my-1"></div>
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/areas/${area.slug}`}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                onBlur={() => setTimeout(() => setIndustriesOpen(false), 200)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                  location.pathname.startsWith('/industries') ? 'text-sky-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Industries
                <svg className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/industries"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                  >
                    All Industries
                  </Link>
                  <div className="border-t border-slate-700 my-1"></div>
                  {industries.map((industry) => (
                    <Link
                      key={industry.slug}
                      to={`/industries/${industry.slug}`}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname.startsWith('/blog') ? 'text-sky-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/faq"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/faq') ? 'text-sky-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className="ml-4 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md text-sm font-medium transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-3 space-y-2">
            <Link to="/" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/pricing" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link to="/portfolio" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link to="/areas-served" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700" onClick={() => setIsOpen(false)}>Areas Served</Link>
            <Link to="/industries" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700" onClick={() => setIsOpen(false)}>Industries</Link>
            <Link to="/blog" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/faq" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700" onClick={() => setIsOpen(false)}>FAQ</Link>
            <Link to="/contact" className="block px-3 py-2 bg-sky-600 text-white rounded-md text-center" onClick={() => setIsOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
