import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

// EDIT: FAQ items - Add or modify frequently asked questions here
const faqItems = [
  {
    question: 'How does the free consultation work?',
    answer: "We hop on a 30-minute call, you tell me what you're building, I ask questions to understand the scope. If it's a fit, I send a proposal. No pressure, no obligation."
  },
  {
    question: "What's your typical turnaround time?",
    answer: "Landing pages: 1-2 weeks. Multi-page sites: 2-4 weeks. Web apps: 4-8 weeks. You'll get a specific timeline in your proposal."
  },
  {
    question: "I don't know exactly what I need. Can you help?",
    answer: "That's exactly what the consultation is for. Bring the idea, I'll help you shape it into a plan that fits your goals and budget."
  },
  {
    question: 'Do you offer maintenance and support?',
    answer: "Yes—monthly packages for ongoing updates and security, or hourly support for one-off fixes. We'll figure out what makes sense for you."
  },
  {
    question: "What's the payment structure?",
    answer: '50% to start, 50% on completion. Larger projects can be split into milestones. I invoice via PayPal or bank transfer.'
  },
  {
    question: 'Can you work with my existing website?',
    answer: "Usually, yes. I'll take a look during our consultation and tell you what's possible. Most platforms are workable."
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'Revisions during the project are included. After launch, you get 30 days of bug fixes. Beyond that, I offer hourly support or maintenance packages.'
  },
  {
    question: 'Do you work with clients outside your area?',
    answer: "Absolutely. Most of my work is remote—video calls, email, messaging. Time zones aren't an issue."
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
      <div
        className={`glass-card overflow-hidden transition-all duration-300 ${
          isOpen ? 'border-l-2 border-l-cyan-400' : 'border-l-2 border-l-transparent'
        }`}
      >
        {/* Question Button */}
        <button
          onClick={onToggle}
          className={`w-full flex items-center justify-between p-5 text-left transition-colors duration-300 ${
            isOpen ? 'bg-dark-700/50' : 'hover:bg-dark-700/30'
          }`}
        >
          <span className={`font-semibold pr-4 transition-colors duration-300 ${
            isOpen ? 'text-cyan-400' : 'text-white'
          }`}>
            {item.question}
          </span>
          <span
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isOpen ? 'bg-cyan-500/20 rotate-180' : 'bg-dark-700'
            }`}
          >
            <svg
              className={`w-4 h-4 transition-colors duration-300 ${
                isOpen ? 'text-cyan-400' : 'text-primary-400'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        {/* Answer with smooth height animation */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 text-gray-300 border-t border-dark-700/50 pt-4">
              {item.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
