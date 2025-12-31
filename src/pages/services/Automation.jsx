import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import { PackageCard, CTASection } from '../../components/ui';

const Automation = () => {
  const packages = [
    {
      name: 'Booking Integration',
      price: '$350',
      bestFor: 'Connect your calendar to your website',
      includes: [
        'Calendar system setup (Calendly, Acuity, or similar)',
        'Website integration',
        'Confirmation email setup',
        'Basic customization',
      ],
      notIncluded: [],
    },
    {
      name: 'Email Marketing Setup',
      price: '$400',
      bestFor: 'Stay in touch with customers automatically',
      includes: [
        'Email platform setup (Mailchimp, ConvertKit, etc.)',
        'Welcome sequence (3 emails)',
        'Sign-up form on your website',
        'List management basics',
      ],
      notIncluded: [],
    },
    {
      name: 'CRM Setup',
      price: '$600',
      bestFor: 'Keep track of every lead and customer',
      isPopular: true,
      includes: [
        'CRM platform setup',
        'Pipeline configuration',
        'Basic automation rules',
        'Import existing contacts',
        'Training walkthrough',
      ],
      notIncluded: [],
    },
    {
      name: 'Business Automation',
      price: '$800+',
      bestFor: 'Custom workflows for your specific needs',
      includes: [
        'Process analysis',
        'Custom automation design',
        'Implementation',
        'Testing and refinement',
        'Documentation',
      ],
      notIncluded: [],
      ctaText: "Let's Talk",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Business Automation & Systems Setup | Pryceless Solutions</title>
        <meta name="description" content="Stop doing everything manually. Booking systems, email marketing, CRM setup starting at $350. Save time, capture more leads." />
      </Helmet>

      <div className="min-h-screen bg-off-white">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-primary pt-32 pb-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Stop Doing Everything Manually
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Smart systems that save you time, capture more leads, and let you focus on what you do best.
            </p>
          </div>
        </section>

        {/* Packages Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-off-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-8">Why Automate?</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="card">
                  <div className="text-3xl mb-4">&#128337;</div>
                  <h3 className="text-lg font-bold text-primary-dark mb-2">Save Time</h3>
                  <p className="text-medium-gray text-sm">Stop doing repetitive tasks manually</p>
                </div>
                <div className="card">
                  <div className="text-3xl mb-4">&#128176;</div>
                  <h3 className="text-lg font-bold text-primary-dark mb-2">Capture More Leads</h3>
                  <p className="text-medium-gray text-sm">Never miss a potential customer</p>
                </div>
                <div className="card">
                  <div className="text-3xl mb-4">&#128170;</div>
                  <h3 className="text-lg font-bold text-primary-dark mb-2">Focus on Your Work</h3>
                  <p className="text-medium-gray text-sm">Do what you do best</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Ready to work smarter?"
          subtext="Let's set up systems that save you time and grow your business."
          primaryCta="Get Your Free Consultation"
          primaryCtaLink="/contact"
          variant="primary"
        />

        <Footer />
      </div>
    </>
  );
};

export default Automation;
