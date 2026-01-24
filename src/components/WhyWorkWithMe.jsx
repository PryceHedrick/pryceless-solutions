import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'Solid Foundation',
    description: "A Computer Science degree teaches you how to think, not just how to code. Four years of algorithms, system design, and engineering principles means I build software that's architected correctly from the start—not patched together and hoping for the best."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Proven Results',
    description: "My senior project wasn't a demo that got deleted after graduation. I built a full order management system with shipping API integration for Panda International—and it earned the Outstanding Senior Project Award at USI. That system is still in production today."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Code That Lasts',
    description: "Every line I write is meant to be read by someone else. Clean architecture, meaningful documentation, and zero \"I'll fix it later\" shortcuts. When your business scales or you bring on another developer, the codebase will be an asset, not a liability."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'No Surprises',
    description: "You'll get regular updates without having to ask. Timelines are realistic, not optimistic. And if anything changes, you hear it from me first—not when you're wondering why something is late. That's not extra service; that's just how projects should run."
  }
]

function WhyWorkWithMe() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="why-me" className="py-16 lg:py-24 bg-dark-800/30">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">
            Why Work <span className="gradient-text">With Me</span>
          </h2>
          <p className="section-subheading">
            What you get when we work together
          </p>
        </div>

        {/* vs. Agency Positioning */}
        <div
          className={`max-w-2xl mx-auto mb-16 transition-all duration-700 delay-100 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card p-6 lg:p-8 text-center border-primary-500/30">
            <p className="text-xl font-semibold text-white mb-2">
              Big agency results. Small business relationship.
            </p>
            <p className="text-gray-300 leading-relaxed">
              No account managers. No weeks waiting for replies. Just direct access to the person building your site.
            </p>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ reason, index }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Only animate once
  if (isVisible && !hasAnimated) {
    setHasAnimated(true)
  }

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass-card p-6 lg:p-8 h-full hover:bg-dark-700/50 transition-all duration-300 ease-out group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/10">
        {/* Icon with bounce animation on scroll */}
        <div className={`w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-5 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300 ${hasAnimated ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 100 + 200}ms` }}>
          {reason.icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
        <p className="text-gray-400 leading-relaxed">{reason.description}</p>
      </div>
    </div>
  )
}

export default WhyWorkWithMe
