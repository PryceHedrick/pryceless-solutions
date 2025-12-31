import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import { Button, ServiceCard, CTASection } from '../components/ui';

// Icons as components
const MonitorIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ZapIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const Home = () => {
  const services = [
    {
      icon: MonitorIcon,
      tagline: 'Build',
      title: 'Get Online',
      description: 'Professional websites that work on every device, load fast, and make you look like the professional you are.',
      price: '$1,500',
      link: '/services/websites',
    },
    {
      icon: SearchIcon,
      tagline: 'Grow',
      title: 'Get Found',
      description: 'Google Business Profile setup, local SEO, and directory listings that put you in front of customers searching for what you do.',
      price: '$250',
      link: '/services/visibility',
    },
    {
      icon: ZapIcon,
      tagline: 'Automate',
      title: 'Work Smarter',
      description: 'Booking systems, email marketing, and business tools that save you time and capture more leads.',
      price: '$350',
      link: '/services/automation',
    },
  ];

  const whyChooseUs = [
    {
      title: 'We Listen First',
      description: 'Your website should reflect YOUR business, not our template.',
    },
    {
      title: 'Honest Pricing',
      description: 'No hidden fees. No monthly payments required. No surprises.',
    },
    {
      title: 'You Own Everything',
      description: 'Your site, your content, your data. No hostage situations.',
    },
    {
      title: 'Personal Service',
      description: 'Work directly with me. Not a call center. Not a chatbot.',
    },
  ];

  const processSteps = [
    { number: '1', title: 'Discovery', description: 'Tell us about your business and goals' },
    { number: '2', title: 'Proposal', description: 'Get a clear scope, price, and timeline' },
    { number: '3', title: 'Design', description: 'Review mockups before we build anything' },
    { number: '4', title: 'Build', description: 'We create your site with your feedback' },
    { number: '5', title: 'Launch', description: 'Go live with a site you\'re proud of' },
  ];

  const problems = [
    {
      title: 'Looking Unprofessional Online',
      description: 'Your website is often the first impression. A bad one costs you customers.',
    },
    {
      title: 'Burned by Agencies or DIY',
      description: 'You\'ve tried Wix. You\'ve hired a friend. You\'ve paid $5,000 for nothing.',
    },
    {
      title: 'Too Busy to Figure It Out',
      description: 'You run a business. You don\'t have time to become a web designer.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Pryceless Solutions | Professional Websites for Local Businesses</title>
        <meta name="description" content="Your Vision. Built Right. Professional websites for local businesses who can't afford to look unprofessional. Based in Southern Indiana, serving nationwide." />
      </Helmet>

      <div className="min-h-screen bg-off-white">
        <Navigation />

        {/* Hero Section */}
        <section className="hero-gradient min-h-screen flex items-center pt-16">
          <div className="section-container py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                Your Vision. <span className="text-accent">Built Right.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
                Professional websites for local businesses who can't afford to look unprofessional. We listen first, build second.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
                <Button to="/services" variant="primary" size="lg">
                  See Our Services
                </Button>
                <Button to="/contact" variant="outline-white" size="lg">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-heading">Your Business Deserves Better Than a Template</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {problems.map((problem, index) => (
                <div key={index} className="card-hover text-center">
                  <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-2">{problem.title}</h3>
                  <p className="text-medium-gray">{problem.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center bg-primary/5 rounded-2xl p-8">
              <p className="text-lg text-dark-gray">
                We build professional websites that make your business look as good as it actually is — at a price that makes sense, with a process that respects your time.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="section-padding bg-off-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-heading">What We Do</h2>
              <p className="section-subheading mx-auto">
                Three ways to grow your business online
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-heading">Why Pryceless Solutions?</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="feature-icon mx-auto mb-4">
                    <CheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-2">{item.title}</h3>
                  <p className="text-medium-gray text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Preview Section */}
        <section className="section-padding bg-off-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-heading">How It Works</h2>
              <p className="section-subheading mx-auto">
                Simple process. Professional results.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="step-number">{step.number}</div>
                  <div>
                    <p className="font-semibold text-primary-dark">{step.title}</p>
                    <p className="text-sm text-medium-gray">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <svg className="w-6 h-6 text-light-gray hidden lg:block ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button to="/process" variant="outline">
                See Our Full Process
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Section (Placeholder) */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-heading">What Our Clients Say</h2>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <div className="card p-8">
                <p className="text-lg text-medium-gray italic mb-4">
                  "Testimonials coming soon from our first clients."
                </p>
                <p className="text-sm text-primary">
                  Want to be featured? <Link to="/contact" className="text-accent hover:underline">Start your project today.</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Ready to Look Professional Online?"
          subtext="Let's talk about your project. No pressure, no obligation — just a conversation about what you need."
          primaryCta="Get Your Free Consultation"
          primaryCtaLink="/contact"
          badges={['No Monthly Fees', '2-Week Delivery', 'You Own Everything']}
          variant="primary"
        />

        <Footer />
      </div>
    </>
  );
};

export default Home;
