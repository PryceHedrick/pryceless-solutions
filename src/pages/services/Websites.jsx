import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import { Button, PackageCard, FAQAccordion, CTASection } from '../../components/ui';

const Websites = () => {
  const packages = [
    {
      name: 'Starter',
      price: '$750',
      bestFor: 'Simple online presence',
      includes: [
        '1-2 page website',
        'Mobile responsive',
        'Contact form',
        'Basic SEO setup',
        '1 round of revisions',
        '1-week delivery',
      ],
      notIncluded: ['Content writing', 'Ongoing maintenance'],
    },
    {
      name: 'Professional',
      price: '$1,500',
      bestFor: 'Local businesses ready to grow',
      isPopular: true,
      includes: [
        '3-5 page website',
        'Mobile responsive design',
        'Contact form with email delivery',
        'Google Business Profile setup',
        'Basic SEO (titles, metas, schema)',
        '2 rounds of design revisions',
        '2 rounds of development revisions',
        '2-week delivery',
        'Full ownership transfer',
        '30-day question support',
      ],
      notIncluded: ['E-commerce', 'Content writing', 'Ongoing maintenance'],
    },
    {
      name: 'E-Commerce',
      price: '$2,500+',
      bestFor: 'Selling products online',
      includes: [
        'Everything in Professional',
        'Product catalog (up to 25 products)',
        'Shopping cart',
        'Payment processing setup',
        'Basic inventory management',
        '3-4 week delivery',
      ],
      notIncluded: [],
    },
    {
      name: 'Custom',
      price: '$3,500+',
      bestFor: 'Complex requirements',
      includes: [
        'Custom web applications',
        'API integrations',
        'Advanced functionality',
        'Dedicated project scope',
        'Timeline varies by project',
      ],
      notIncluded: [],
      ctaText: "Let's Talk",
    },
  ];

  const qualityStandards = [
    'Mobile responsive (passes Google test)',
    'Fast loading (under 3 seconds)',
    'SEO foundations (titles, metas, schema, sitemap)',
    'Forms that actually work',
    'Secure (HTTPS, no warnings)',
    'Works on all major browsers',
    'Accessible to all users',
    'Documented handoff',
  ];

  const faqs = [
    {
      question: 'How long does a website take?',
      answer: 'Starter sites: 1 week. Professional sites: 2 weeks. E-commerce: 3-4 weeks. Custom projects vary based on scope.',
    },
    {
      question: 'What do I need to provide?',
      answer: 'Your logo, photos of your business/work, and basic information (hours, contact info, services). We\'ll guide you through everything.',
    },
    {
      question: 'Can I update the site myself?',
      answer: 'We build sites that are easy to maintain. For simple updates, we can set up an editing solution. For ongoing changes, consider our Care Plan.',
    },
    {
      question: 'What if I don\'t like it?',
      answer: 'You\'ll see a mockup before we build anything. If you\'re not happy at that stage, you get a full refund. We don\'t move forward until you love it.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Professional Website Design | Starting at $750 | Pryceless Solutions</title>
        <meta name="description" content="Custom websites for local businesses. Mobile responsive, SEO-ready, you own everything. Professional package $1,500. 2-week delivery." />
      </Helmet>

      <div className="min-h-screen bg-off-white">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-primary pt-32 pb-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Professional Websites That Actually Work
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Your business deserves more than a template. Get a custom site that makes you look as professional as you actually are.
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

        {/* What Built Right Means */}
        <section className="section-padding bg-off-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="section-heading">What "Built Right" Means</h2>
                <p className="section-subheading mx-auto">
                  Every website meets our quality standards
                </p>
              </div>

              <div className="card">
                <div className="grid sm:grid-cols-2 gap-4">
                  {qualityStandards.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-dark-gray">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="section-heading">Common Questions</h2>
              </div>
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Ready to get started?"
          subtext="Let's build something you're proud of."
          primaryCta="Get Your Free Consultation"
          primaryCtaLink="/contact"
          variant="primary"
        />

        <Footer />
      </div>
    </>
  );
};

export default Websites;
