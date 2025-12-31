import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import { Button, CTASection } from '../components/ui';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Our Work | Website Portfolio | Pryceless Solutions</title>
        <meta name="description" content="Real websites for real businesses. See examples of our professional web design work for local businesses." />
      </Helmet>

      <div className="min-h-screen bg-off-white">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-primary pt-32 pb-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Work
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Real websites for real businesses.
            </p>
          </div>
        </section>

        {/* Portfolio Placeholder Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              {/* Placeholder Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="aspect-video bg-light-gray rounded-xl flex items-center justify-center"
                  >
                    <div className="text-center p-4">
                      <svg className="w-12 h-12 text-medium-gray mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-medium-gray">Coming Soon</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coming Soon Message */}
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-primary-dark mb-4">
                  Portfolio Coming Soon
                </h2>
                <p className="text-lg text-medium-gray mb-6">
                  We're currently building our first client projects and will showcase them here.
                </p>
                <p className="text-primary mb-8">
                  Want to be one of our first featured clients?
                </p>
                <Button to="/contact" variant="primary" size="lg">
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Ready to Be Featured?"
          subtext="Let's create something great for your business."
          primaryCta="Get in Touch"
          primaryCtaLink="/contact"
          variant="primary"
        />

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
