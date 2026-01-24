import useScrollAnimation from '../hooks/useScrollAnimation'

const timelineSteps = [
  {
    id: 1,
    time: 'Day 1',
    title: 'Discovery Call',
    description: 'Free 30-minute call to understand your goals and project scope',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    time: 'Days 2-3',
    title: 'Proposal & Agreement',
    description: 'Detailed quote with timeline, scope, and transparent pricing',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-teal-500'
  },
  {
    id: 3,
    time: 'Week 1',
    title: 'Design Phase',
    description: 'Wireframes and visual mockups for your approval',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    gradient: 'from-teal-500 to-green-500'
  },
  {
    id: 4,
    time: 'Weeks 2-3',
    title: 'Development',
    description: 'Building your site with regular progress updates',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    time: 'Week 3-4',
    title: 'Review & Revisions',
    description: 'Your feedback shapes the final product',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-primary-500'
  },
  {
    id: 6,
    time: 'Launch Day',
    title: 'Go Live!',
    description: 'Your new website is live and ready for customers',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    gradient: 'from-primary-500 to-purple-500',
    highlight: true
  }
]

function ProcessTimeline({ className = '' }) {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="how-it-works" className={`py-16 lg:py-24 bg-dark-900 ${className}`}>
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subheading">
            A clear, predictable process from first call to launch
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500" />

          {/* Steps */}
          <div className="grid grid-cols-6 gap-4">
            {timelineSteps.map((step, index) => (
              <TimelineStep key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden space-y-4">
          {timelineSteps.map((step, index) => (
            <MobileTimelineStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineStep({ step, index }) {
  const [stepRef, isVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <div
      ref={stepRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Node */}
      <div className="flex justify-center mb-4">
        <div
          className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg ${
            step.highlight ? 'ring-4 ring-primary-500/30 animate-pulse-slow' : ''
          }`}
        >
          {step.icon}
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">
          {step.time}
        </span>
        <h3 className="text-sm font-bold text-white mt-1 mb-1">{step.title}</h3>
        <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

function MobileTimelineStep({ step, index }) {
  const [stepRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={stepRef}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-4">
        {/* Timeline Node */}
        <div className="flex flex-col items-center">
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0 ${
              step.highlight ? 'ring-2 ring-primary-500/30' : ''
            }`}
          >
            {step.icon}
          </div>
          {index < timelineSteps.length - 1 && (
            <div className="w-0.5 h-full min-h-[40px] bg-gradient-to-b from-dark-600 to-dark-700 mt-2" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-6">
          <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">
            {step.time}
          </span>
          <h3 className="text-lg font-bold text-white mt-1">{step.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{step.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProcessTimeline
