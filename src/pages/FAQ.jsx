import { Helmet } from 'react-helmet-async';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import { FAQAccordion, CTASection } from '../components/ui';

const FAQ = () => {
  const faqCategories = [
    {
      title: 'Pricing & Payment',
      faqs: [
        {
          question: 'How much does a website cost?',
          answer: 'Our Professional Website package is $1,500 and includes everything most local businesses need. Starter sites begin at $750. Custom projects start at $3,500. You\'ll always get a clear price before we start.',
        },
        {
          question: 'Do you require monthly payments?',
          answer: 'No. You pay for the project, and you own it. We offer an optional Care Plan ($97/month) for ongoing maintenance, but it\'s never required.',
        },
        {
          question: 'What\'s included in the price?',
          answer: 'Everything listed in the package. No hidden fees for hosting setup, "rush" delivery, or basic revisions. What we quote is what you pay.',
        },
        {
          question: 'When do I pay?',
          answer: '50% deposit to start, 50% before launch. For larger projects, we can discuss milestone payments.',
        },
      ],
    },
    {
      title: 'Process & Timeline',
      faqs: [
        {
          question: 'How long does a website take?',
          answer: 'Starter: 1 week. Professional: 2 weeks. E-commerce: 3-4 weeks. Custom projects vary based on scope.',
        },
        {
          question: 'What do I need to provide?',
          answer: 'Your logo (if you have one), photos of your business/work, and basic info (hours, services, contact). We guide you through everything.',
        },
        {
          question: 'How many revisions do I get?',
          answer: 'Professional package includes 2 rounds of design revisions and 2 rounds of development revisions. Additional revisions are $75/hour.',
        },
        {
          question: 'What if I don\'t like the design?',
          answer: 'You\'ll see a mockup before we build. If you\'re not happy at that stage, full refund, no questions asked.',
        },
      ],
    },
    {
      title: 'Ownership & Support',
      faqs: [
        {
          question: 'Do I own my website?',
          answer: 'Yes, 100%. Your site, your content, your data, your domain. We provide complete handoff documentation. You\'re never locked in.',
        },
        {
          question: 'Can I update the site myself?',
          answer: 'We can discuss editing solutions based on your needs. For simple updates, we recommend our Care Plan or hourly support.',
        },
        {
          question: 'What happens after launch?',
          answer: 'You get 30 days of support for questions. After that, you can purchase our Care Plan or contact us for hourly help as needed.',
        },
        {
          question: 'What if something breaks?',
          answer: 'We build sites properly, so this is rare. But if something breaks in the first 30 days, we fix it free. After that, Care Plan clients get priority support.',
        },
      ],
    },
    {
      title: 'General',
      faqs: [
        {
          question: 'Do you work with businesses outside Southern Indiana?',
          answer: 'Yes! While we\'re based in Southern Indiana, we work with clients nationwide. Most of our process is virtual anyway.',
        },
        {
          question: 'What makes you different from other web designers?',
          answer: 'Personal service (you work directly with me), honest pricing (no hidden fees), and you own everything (no hostage situations). Plus we actually listen to what you need instead of pushing a template.',
        },
        {
          question: 'Do you do [specific thing]?',
          answer: 'Maybe! If it\'s not listed in our services, just ask. We\'re happy to discuss custom requirements or point you in the right direction.',
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Pryceless Solutions</title>
        <meta name="description" content="Answers about pricing, process, timeline, and what's included. Everything you need to know before starting your website project." />
      </Helmet>

      <div className="min-h-screen bg-off-white">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-primary pt-32 pb-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Everything you need to know about working with us.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto space-y-12">
              {faqCategories.map((category, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-primary-dark mb-6 pb-2 border-b border-light-gray">
                    {category.title}
                  </h2>
                  <FAQAccordion items={category.faqs} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Still Have Questions?"
          subtext="I'm happy to answer any questions about your project."
          primaryCta="Contact Me"
          primaryCtaLink="/contact"
          secondaryCta="Call (812) 709-2406"
          secondaryCtaLink="tel:+18127092406"
          variant="primary"
        />

        <Footer />
      </div>
    </>
  );
};

export default FAQ;
