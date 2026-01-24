import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

// EDIT: FAQ items - Add or modify frequently asked questions here
// Organized: Process → Pricing → Concerns (objection handling)
const faqItems = [
  // Process Questions
  {
    question: 'How does the free consultation work?',
    answer: "We hop on a 15-30 minute call, you tell me what you're building, I ask questions to understand the scope. If it's a fit, I send a proposal. No pressure, no obligation."
  },
  {
    question: "What's your typical turnaround time?",
    answer: "Starter sites: 1-2 weeks. Professional sites: 2-4 weeks. E-commerce: 4-6 weeks. Web apps: 4-8 weeks. You'll get a specific timeline in your proposal."
  },
  {
    question: "What's the payment structure?",
    answer: "50% deposit to start, 50% before launch. You don't pay the final balance until you're happy with the site. Larger projects can be split into milestones."
  },
  // Pricing Questions
  {
    question: "Do you charge monthly fees?",
    answer: "No. You pay once and own it forever. The only ongoing cost is hosting (typically $0-20/month through Vercel). No surprise bills, no hidden fees."
  },
  {
    question: "Why are you cheaper than agencies?",
    answer: "No overhead. You work directly with me — no account managers, project coordinators, or layers of bureaucracy. Same quality, fraction of the cost."
  },
  // Objection Handling - Common Hesitations
  {
    question: "I don't think I need a website right now.",
    answer: "That's fair if word-of-mouth is working. But 70% of customers search online before visiting a local business. Without a website, they find your competitors. When you're ready, I'm here."
  },
  {
    question: "What if I don't like the design?",
    answer: "You'll see the design before paying the final balance. Every package includes revision rounds to adjust colors, layouts, and content. You're never stuck with something you don't love."
  },
  {
    question: "Can I update the website myself after it's done?",
    answer: "For text and image updates, I can train you or set up a simple CMS. For complex changes, I offer affordable maintenance packages. You're never locked in or held hostage."
  },
  {
    question: "I had a bad experience with a web developer before.",
    answer: "We've heard this too often. That's why we work differently: clear pricing upfront, regular check-ins (no ghosting), and you don't pay the final balance until you're happy. I'm local, accountable, and actually answer my phone."
  },
  {
    question: "What happens after the website launches?",
    answer: "All packages include 30-90 days of post-launch support. After that, no mandatory contracts — you're free. If you need updates later, just reach out."
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 lg:py-24 bg-dark-800/30">
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
            className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <span className="sm:hidden">Free Consultation</span>
            <span className="hidden sm:inline">Book a Free Consultation</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
