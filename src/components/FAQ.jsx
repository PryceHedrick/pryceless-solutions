import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

// EDIT: FAQ items - Add or modify frequently asked questions here
const faqItems = [
  {
    question: 'How does the free consultation work?',
    answer: "We hop on a 30-minute call where you share your vision. I ask questions to understand scope, then follow up with a proposal if it's a fit. No pressure, no obligation—just a conversation to see if we're a good match for your project."
  },
  {
    question: "What's your typical turnaround time?",
    answer: 'Landing pages: 1-2 weeks. Multi-page sites: 2-4 weeks. Web apps: 4-8 weeks depending on complexity. These are estimates—I\'ll give you a specific timeline in my proposal after understanding your project.'
  },
  {
    question: "I don't know exactly what I need. Can you help?",
    answer: "Absolutely. That's what the consultation is for. Many clients come to me with just an idea or a problem they're trying to solve. I'll help you clarify requirements, suggest the right approach, and create a roadmap that makes sense for your goals and budget."
  },
  {
    question: 'Do you offer maintenance and support?',
    answer: 'Yes. I offer monthly maintenance packages for ongoing updates, security patches, and performance monitoring. I also provide hourly support for ad-hoc fixes, improvements, or feature additions. We can discuss what makes sense for your project.'
  },
  {
    question: "What's the payment structure?",
    answer: '50% upfront to start work, 50% on completion before launch. For larger projects (typically $5,000+), we can break payments into milestones so you\'re not paying everything at once. I accept payment via invoice (PayPal, bank transfer, etc.).'
  },
  {
    question: 'Can you work with my existing website?',
    answer: 'Yes. I can update, redesign, or add features to existing sites depending on the platform. During our consultation, I\'ll take a look at what you have and let you know what\'s possible. Some platforms are easier to work with than others, but most are doable.'
  },
  {
    question: 'What if I need changes after the project is done?',
    answer: 'Revisions during the project are included as specified in your package. After launch, I offer a 30-day warranty period for bug fixes. Beyond that, I\'m available for ongoing support at hourly rates or through a maintenance package.'
  },
  {
    question: 'Do you work with clients outside your area?',
    answer: 'Absolutely! Most of my work is done remotely. We\'ll communicate via video calls, email, and messaging. I\'ve successfully worked with clients across different time zones. As long as we can schedule occasional calls, location isn\'t an issue.'
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-32 bg-dark-800/30">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">
            {/* EDIT: Section heading */}
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subheading">
            {/* EDIT: Section description */}
            Everything you need to know before we start working together
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            {/* EDIT: CTA text */}
            Still have questions?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Let's Chat
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ item, index, isOpen, onToggle }) {
  const [itemRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={itemRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <div className="glass-card overflow-hidden">
        {/* Question Button */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-700/30 transition-colors"
        >
          <span className="font-semibold text-white pr-4">{item.question}</span>
          <span
            className={`flex-shrink-0 w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <svg
              className="w-4 h-4 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        {/* Answer */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-5 pb-5 text-gray-300 border-t border-dark-700/50 pt-4">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
