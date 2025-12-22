import useScrollAnimation from '../hooks/useScrollAnimation'

// EDIT: Process steps - Modify the steps of your process here
const steps = [
  {
    number: '01',
    title: 'Free Discovery Call',
    description: 'We discuss your vision, goals, and timeline.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Custom Proposal',
    description: 'Clear scope, fixed pricing, and realistic timeline.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'I Build, You Launch',
    description: 'Regular updates, revisions included, and support after launch.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
]

function HowItWorks() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-dark-800/30">
      <div className="section-container">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">
            {/* EDIT: Section heading */}
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subheading">
            {/* EDIT: Section description */}
            A simple, transparent process from idea to launch
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Connector Lines (Desktop) */}
        <div className="hidden md:flex justify-center items-center mt-8">
          <div className="flex items-center gap-4">
            <div className="w-24 lg:w-32 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <div className="w-24 lg:w-32 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <div className="w-24 lg:w-32 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="glass-card p-8 text-center h-full hover:bg-dark-700/50 transition-all duration-300 group">
        {/* Step Number */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 rounded-full text-white font-bold text-sm">
          {step.number}
        </div>

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300">
          {step.icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
        <p className="text-gray-400">{step.description}</p>
      </div>

      {/* Mobile Connector */}
      {index < steps.length - 1 && (
        <div className="md:hidden flex justify-center py-4">
          <div className="w-px h-8 bg-gradient-to-b from-primary-500/50 to-transparent" />
        </div>
      )}
    </div>
  )
}

export default HowItWorks
