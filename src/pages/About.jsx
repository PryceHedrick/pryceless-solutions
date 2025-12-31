import { Helmet } from 'react-helmet-async';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import { Button, CTASection } from '../components/ui';

const About = () => {
  const values = [
    {
      title: 'Honest pricing beats hidden fees',
      description: 'You should know exactly what you\'re paying for.',
    },
    {
      title: 'Personal service beats call centers',
      description: 'You work directly with me, not a rotating support team.',
    },
    {
      title: 'Your ownership beats my control',
      description: 'You own your site, your content, your data. Period.',
    },
    {
      title: 'Done right beats done fast',
      description: 'I\'d rather take an extra day than deliver something I\'m not proud of.',
    },
  ];

  const credentials = [
    'BS in Computer Science, Business Administration & Finance (USI 2024)',
    'IT Specialist managing 500+ devices',
    'Web development using modern, professional tools',
    'Based in Southern Indiana, serving clients nationwide',
  ];

  return (
    <>
      <Helmet>
        <title>About Pryce Hedrick | Pryceless Solutions</title>
        <meta name="description" content="Web developer, IT professional, small business owner. Building professional websites for local businesses. Based in Southern Indiana." />
      </Helmet>

      <div className="min-h-screen bg-off-white">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-primary pt-32 pb-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Built by Someone Who Gets It
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              I'm Pryce Hedrick — web developer, IT professional, and small business owner myself.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <p className="text-lg text-dark-gray mb-6">
                  I know what it's like to wear every hat in a business. To stay up late working on something you believe in. To cringe every time someone asks for your website.
                </p>
                <p className="text-lg text-dark-gray mb-6">
                  I started Pryceless Solutions because I saw too many small businesses getting burned — by $5,000 agencies that over-promise, by DIY tools that under-deliver, and by "my nephew does websites" solutions that never get finished.
                </p>
                <p className="text-lg text-dark-gray mb-6">
                  You deserve better. You deserve a professional online presence that reflects the quality of your actual work — without the agency runaround or the template compromises.
                </p>
                <p className="text-xl font-semibold text-primary-dark">
                  That's what I build. Your vision, built right.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="section-padding bg-off-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading text-center mb-8">Background</h2>
              <div className="card">
                <ul className="space-y-4">
                  {credentials.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Values Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading text-center mb-12">What I Believe</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="card">
                    <h3 className="text-lg font-bold text-primary-dark mb-2">{value.title}</h3>
                    <p className="text-medium-gray">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Let's Work Together"
          subtext="Ready to build something you're proud of?"
          primaryCta="Get in Touch"
          primaryCtaLink="/contact"
          variant="primary"
        />

        <Footer />
      </div>
    </>
  );
};

export default About;
