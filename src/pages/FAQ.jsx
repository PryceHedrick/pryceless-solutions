import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { businessInfo, faqs } from '../data/seo-data';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": businessInfo.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "FAQ",
            "item": `${businessInfo.url}/faq`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const groupedFaqs = categories.reduce((acc, category) => {
    acc[category] = faqs.filter(faq => faq.category === category);
    return acc;
  }, {});

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions"
        description="Common questions about web design, pricing, timelines, and working with Pryceless Solutions. Get answers about custom website development in Indiana."
        keywords="web design FAQ, website development questions, web design process, website pricing questions, Indiana web design"
        canonical="/faq"
        schema={faqSchema}
      />

      <main className="pt-20 min-h-screen bg-slate-900">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-sky-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-300">
              Everything you need to know about working with Pryceless Solutions
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {categories.map((category) => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
                  {category}
                </h2>
                <div className="space-y-4">
                  {groupedFaqs[category].map((faq) => {
                    const globalIndex = faqs.indexOf(faq);
                    const isOpen = openIndex === globalIndex;
                    return (
                      <div
                        key={globalIndex}
                        className="bg-slate-800 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-700/50 transition-colors"
                        >
                          <span className="text-white font-medium pr-4">{faq.question}</span>
                          <svg
                            className={`w-5 h-5 text-sky-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-8">
              I&apos;m happy to answer any questions you have about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors"
              >
                Contact Me
              </Link>
              <a
                href={`tel:${businessInfo.phone}`}
                className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
              >
                Call {businessInfo.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;
