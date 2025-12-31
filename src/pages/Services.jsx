import { Helmet } from 'react-helmet-async';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import { Button, CTASection } from '../components/ui';

const Services = () => {
  const buildPackages = [
    { name: 'Starter Website', price: '$750' },
    { name: 'Professional Website', price: '$1,500', popular: true },
    { name: 'E-Commerce', price: '$2,500+' },
    { name: 'Custom Web App', price: '$3,500+' },
  ];

  const growPackages = [
    { name: 'GBP Setup & Optimization', price: '$250' },
    { name: 'Local SEO Starter', price: '$500' },
    { name: 'Local SEO Pro', price: '$1,200' },
    { name: 'Citation Building', price: '$300' },
  ];

  const automatePackages = [
    { name: 'Booking Integration', price: '$350' },
    { name: 'Email Marketing Setup', price: '$400' },
    { name: 'CRM Setup', price: '$600' },
    { name: 'Business Automation', price: '$800+' },
  ];

  const alwaysIncluded = [
    'Mobile responsive design',
    'Basic SEO setup',
    'You own everything',
    'Handoff documentation',
    '30-day support for questions',
  ];

  return (
    <>
      <Helmet>
        <title>Web Design & Digital Services | Pryceless Solutions</title>
        <meta name="description" content="Websites, local SEO, and business automation for small businesses. Honest pricing starting at $250. Get online, get found, work smarter." />
      </Helmet>

      <div className="min-h-screen bg-off-white">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-primary pt-32 pb-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Services Built Around Your Business
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Everything you need to get online, get found, and work smarter.
            </p>
          </div>
        </section>

        {/* Three Pillars Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            {/* BUILD Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <span className="text-accent font-semibold uppercase tracking-wide">Build</span>
                <h2 className="text-3xl font-bold text-primary-dark mt-2">Get Online</h2>
                <p className="text-medium-gray mt-2">Professional websites that work for your business</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {buildPackages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`card text-center ${pkg.popular ? 'border-2 border-accent' : ''}`}
                  >
                    {pkg.popular && (
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">Most Popular</span>
                    )}
                    <h3 className="text-lg font-bold text-primary-dark mt-2">{pkg.name}</h3>
                    <p className="text-2xl font-bold text-accent mt-2">{pkg.price}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <Button to="/services/websites" variant="outline">
                  View Website Packages
                </Button>
              </div>
            </div>

            {/* GROW Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <span className="text-accent font-semibold uppercase tracking-wide">Grow</span>
                <h2 className="text-3xl font-bold text-primary-dark mt-2">Get Found</h2>
                <p className="text-medium-gray mt-2">Local SEO and visibility services</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {growPackages.map((pkg, index) => (
                  <div key={index} className="card text-center">
                    <h3 className="text-lg font-bold text-primary-dark">{pkg.name}</h3>
                    <p className="text-2xl font-bold text-accent mt-2">{pkg.price}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <Button to="/services/visibility" variant="outline">
                  View Visibility Services
                </Button>
              </div>
            </div>

            {/* AUTOMATE Section */}
            <div>
              <div className="text-center mb-8">
                <span className="text-accent font-semibold uppercase tracking-wide">Automate</span>
                <h2 className="text-3xl font-bold text-primary-dark mt-2">Work Smarter</h2>
                <p className="text-medium-gray mt-2">Business automation and systems</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {automatePackages.map((pkg, index) => (
                  <div key={index} className="card text-center">
                    <h3 className="text-lg font-bold text-primary-dark">{pkg.name}</h3>
                    <p className="text-2xl font-bold text-accent mt-2">{pkg.price}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <Button to="/services/automation" variant="outline">
                  View Automation Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Always Included */}
        <section className="section-padding bg-off-white">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-heading mb-8">What's Always Included</h2>
              <div className="card">
                <p className="text-medium-gray mb-6">Every project includes:</p>
                <ul className="space-y-3">
                  {alwaysIncluded.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-dark-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Not sure what you need?"
          subtext="Let's figure it out together. No pressure, no obligation."
          primaryCta="Get a Free Consultation"
          primaryCtaLink="/contact"
          variant="primary"
        />

        <Footer />
      </div>
    </>
  );
};

export default Services;
