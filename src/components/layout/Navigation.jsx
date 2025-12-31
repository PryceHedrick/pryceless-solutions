import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'All Services', path: '/services', description: 'Overview of everything we offer' },
    { name: 'Websites', path: '/services/websites', description: 'Professional website design' },
    { name: 'Local Visibility', path: '/services/visibility', description: 'Get found on Google' },
    { name: 'Automation', path: '/services/automation', description: 'Save time with smart systems' },
  ];

  const navLinks = [
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'About', path: '/about' },
    { name: 'Process', path: '/process' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path) => {
    if (path === '/services') {
      return location.pathname.startsWith('/services');
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-light-gray shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            <span className="text-xl font-bold text-primary">Pryceless</span>
            <span className="text-accent font-bold text-xl">Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive(link.path) ? 'text-primary' : 'text-medium-gray hover:text-primary'
                    }`}
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-light-gray py-2 z-50">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-3 hover:bg-off-white transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="block font-medium text-primary-dark">{service.name}</span>
                          <span className="block text-sm text-medium-gray">{service.description}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path) ? 'text-primary' : 'text-medium-gray hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}

            <Button to="/contact" variant="primary" size="sm" className="ml-4">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-medium-gray hover:text-primary hover:bg-off-white"
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
        <div className="lg:hidden bg-white border-t border-light-gray">
          <div className="px-4 py-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-medium-gray hover:bg-off-white hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Services submenu */}
            <div className="border-l-2 border-light-gray ml-3 pl-3">
              <span className="block px-3 py-2 text-sm font-semibold text-primary-dark">Services</span>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block px-3 py-2 rounded-md text-sm text-medium-gray hover:bg-off-white hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-medium-gray hover:bg-off-white hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/process"
              className="block px-3 py-2 rounded-md text-medium-gray hover:bg-off-white hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Process
            </Link>
            <Link
              to="/portfolio"
              className="block px-3 py-2 rounded-md text-medium-gray hover:bg-off-white hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/faq"
              className="block px-3 py-2 rounded-md text-medium-gray hover:bg-off-white hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 bg-accent text-white rounded-md text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
