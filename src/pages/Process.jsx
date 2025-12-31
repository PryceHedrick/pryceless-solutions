import { Helmet } from 'react-helmet-async';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import { ProcessStep, CTASection } from '../components/ui';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Discovery',
      timeline: '1-2 days',
      description: 'We start with a conversation to understand your business, goals, and what success looks like for you.',
      whatHappens: [
        '30-minute call to understand your business',
        'Questions about your goals, customers, and competition',
        'Review of any existing materials (logo, photos, content)',
        'Identify what success looks like for you',
      ],
      whatYouProvide: [
        'Your time for a conversation',
        'Basic business information',
        'Examples of sites you like (optional)',
      ],
    },
    {
      number: 2,
      title: 'Proposal',
      timeline: '1-2 days',
      description: 'You get a clear scope, fixed price, and timeline before we start anything.',
      whatHappens: [
        'Clear scope document: exactly what you\'re getting',
        'Fixed price: no surprises, no scope creep fees',
        'Timeline: when you\'ll see each deliverable',
        'Terms: payment schedule, revision policy',
      ],
      whatYouProvide: [
        'Review and approval (or questions/changes)',
      ],
    },
    {
      number: 3,
      title: 'Design',
      timeline: '3-5 days',
      description: 'See your site before we build it. We refine until you love it.',
      whatHappens: [
        'Homepage mockup: see your site before we build it',
        'Design review call: walk through together',
        'Revisions: refine until you love it',
      ],
      whatYouProvide: [
        'Feedback on the design',
        'Final approval before we build',
      ],
    },
    {
      number: 4,
      title: 'Build',
      timeline: '5-7 days',
      description: 'We develop your full website with regular check-ins for your feedback.',
      whatHappens: [
        'Development of full website',
        'Content integration',
        'Mobile optimization',
        'Testing across devices and browsers',
        'Development revisions based on your feedback',
      ],
      whatYouProvide: [
        'Final content (text, photos) if not already received',
        'Feedback during build reviews',
      ],
    },
    {
      number: 5,
      title: 'Launch',
      timeline: '1-2 days',
      description: 'Final review, last adjustments, then go live with a site you\'re proud of.',
      whatHappens: [
        'Final review together',
        'Any last adjustments',
        'DNS/hosting setup',
        'Go live!',
        'Handoff documentation with all credentials',
        '30-day support for questions',
      ],
      whatYouProvide: [
        'Final approval',
        'Final payment before launch',
        'Domain access (if you own it) or we purchase for you',
      ],
    },
  ];

  const qualityStandards = [
    'Mobile responsive',
    'Fast loading (<3 seconds)',
    'SEO foundations',
    'Working forms',
    'Secure (HTTPS)',
    'Cross-browser tested',
    'Accessible',
    'Documented',
  ];

  return (
    <>
      <Helmet>
        <title>Our Process | How We Build Websites | Pryceless Solutions</title>
        <meta name="description" content="Simple 5-step process: Discovery, Proposal, Design, Build, Launch. See your site before we build it. Professional results in 2 weeks." />
      </Helmet>

      <div className="min-h-screen bg-off-white">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-primary pt-32 pb-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              How We Build Your Website
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A simple process that respects your time and delivers results.
            </p>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="mb-12 last:mb-0">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="step-number text-xl">{step.number}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-primary-dark">{step.title}</h2>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {step.timeline}
                        </span>
                      </div>
                      <p className="text-medium-gray mb-6">{step.description}</p>
                    </div>
                  </div>

                  <div className="ml-14 grid md:grid-cols-2 gap-6">
                    <div className="card">
                      <h3 className="font-semibold text-primary-dark mb-3">What happens:</h3>
                      <ul className="space-y-2">
                        {step.whatHappens.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-dark-gray">
                            <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="card bg-off-white border-none">
                      <h3 className="font-semibold text-primary-dark mb-3">What you provide:</h3>
                      <ul className="space-y-2">
                        {step.whatYouProvide.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-dark-gray">
                            <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="ml-14 mt-8 border-b border-light-gray" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standards Section */}
        <section className="section-padding bg-off-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="section-heading">What's Included in "Built Right"</h2>
                <p className="section-subheading mx-auto">
                  Quality standards we hit on every project
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

        {/* CTA Section */}
        <CTASection
          headline="Ready to Get Started?"
          subtext="Let's talk about your project."
          primaryCta="Get Your Free Consultation"
          primaryCtaLink="/contact"
          variant="primary"
        />

        <Footer />
      </div>
    </>
  );
};

export default Process;
