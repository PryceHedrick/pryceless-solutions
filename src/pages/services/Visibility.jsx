import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import { Button, PackageCard, CTASection } from '../../components/ui';

const Visibility = () => {
  const packages = [
    {
      name: 'GBP Setup & Optimization',
      price: '$250',
      bestFor: 'Getting started with local search',
      includes: [
        'Google Business Profile setup or optimization',
        'Business information accuracy',
        'Category optimization',
        'Photo guidance',
        'Initial post creation',
        'Response templates for reviews',
      ],
      notIncluded: [],
    },
    {
      name: 'Local SEO Starter',
      price: '$500',
      bestFor: 'Establishing local search presence',
      includes: [
        'Everything in GBP Setup',
        'Basic keyword research',
        '5 local citations (Bing, Apple, Yelp, etc.)',
        'On-page SEO recommendations',
      ],
      notIncluded: [],
    },
    {
      name: 'Local SEO Pro',
      price: '$1,200',
      bestFor: 'Competing in local search results',
      isPopular: true,
      includes: [
        'Everything in Starter',
        '20+ local citations',
        'Competitor analysis',
        'Content recommendations',
        'Monthly ranking report (3 months)',
      ],
      notIncluded: [],
    },
    {
      name: 'Citation Building',
      price: '$300',
      bestFor: 'Expanding directory presence',
      includes: [
        '15 high-quality directory listings',
        'NAP consistency check',
        'Listing management guide',
      ],
      notIncluded: [],
    },
  ];

  const stats = [
    { stat: '46%', description: 'of Google searches are looking for local information' },
    { stat: '88%', description: 'of local searches result in a call or visit within 24 hours' },
    { stat: '2.7x', description: 'more likely to be considered reputable with complete GBP listings' },
  ];

  return (
    <>
      <Helmet>
        <title>Local SEO & Google Business Profile Setup | Pryceless Solutions</title>
        <meta name="description" content="Get found when customers search for what you do. GBP setup $250, Local SEO packages from $500. Southern Indiana and nationwide." />
      </Helmet>

      <div className="min-h-screen bg-off-white">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-primary pt-32 pb-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get Found When It Matters
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              When someone searches for what you do, they should find YOU — not your competitor down the street.
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

        {/* Why Local SEO Matters */}
        <section className="section-padding bg-off-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-heading">Why Local SEO Matters</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((item, index) => (
                <div key={index} className="text-center card">
                  <div className="text-4xl font-bold text-accent mb-2">{item.stat}</div>
                  <p className="text-medium-gray">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Ready to get found?"
          subtext="Let's put your business in front of customers who are searching for what you do."
          primaryCta="Get Your Free Consultation"
          primaryCtaLink="/contact"
          variant="primary"
        />

        <Footer />
      </div>
    </>
  );
};

export default Visibility;
