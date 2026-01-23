import useScrollAnimation from '../hooks/useScrollAnimation'

// Process steps - 5 step process as specified
const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'We discuss your vision, goals, and timeline. No pressure, no obligation.',
    emoji: '📞',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Custom Proposal',
    description: 'Clear scope, fixed price, and realistic timeline tailored to your needs.',
    emoji: '📋',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Design Preview',
    description: 'See your site take shape with mockups and wireframes before development.',
    emoji: '🎨',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Build & Launch',
    description: 'I build your site with regular updates, then launch when you approve.',
    emoji: '🚀',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description: '30 days of bug fixes included. Maintenance packages available.',
    emoji: '🛡️',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
]

function HowItWorks() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-dark-800/30">
      <div className="section-container">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subheading">
            A simple, transparent process from idea to launch
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Connector Line */}
          <div className="absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary-500/20 via-primary-500/50 to-primary-500/20" />

          {/* Steps Grid */}
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <DesktopStepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Stacked Cards */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <MobileStepCard key={index} step={step} index={index} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DesktopStepCard({ step, index }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Number Badge with Emoji */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="w-[120px] h-[120px] rounded-2xl bg-dark-700/80 border border-dark-600 flex flex-col items-center justify-center text-center group hover:border-primary-500/50 hover:bg-dark-700 transition-all duration-300">
            <span className="text-3xl mb-1" role="img" aria-label={step.title}>{step.emoji}</span>
            <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
              {step.icon}
            </div>
          </div>
          {/* Step Number */}
          <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs font-bold">
            {step.number}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center px-2">
        <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

function MobileStepCard({ step, index, isLast }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass-card p-5 hover:bg-dark-700/50 transition-all duration-300">
        <div className="flex items-start gap-4">
          {/* Left: Number + Emoji */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-dark-700 border border-dark-600 flex flex-col items-center justify-center relative">
              <span className="text-xl" role="img" aria-label={step.title}>{step.emoji}</span>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center text-white text-[10px] font-bold">
                {step.number}
              </div>
            </div>
            {/* Connector line to next step */}
            {!isLast && (
              <div className="w-0.5 h-6 bg-gradient-to-b from-primary-500/50 to-transparent mt-2" />
            )}
          </div>

          {/* Right: Content */}
          <div className="flex-1 pt-1">
            <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
            <p className="text-sm text-gray-400">{step.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
