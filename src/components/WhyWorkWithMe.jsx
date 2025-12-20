import useScrollAnimation from '../hooks/useScrollAnimation'

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'Formal CS Education',
    description: 'BS in Computer Science from the University of Southern Indiana. Strong foundation in algorithms, data structures, and software engineering principles.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Award-Winning Work',
    description: 'Outstanding Senior Project Award 2024. My capstone project for Panda International delivered an enterprise-grade solution that is still in use today.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Clean Code Practices',
    description: 'Readable, maintainable, well-documented. Code that you or another developer can build on down the road.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Clear Communication',
    description: 'Regular updates, honest timelines, and straightforward explanations. You will always know where your project stands.'
  }
]

function WhyWorkWithMe() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="why-me" className="py-20 lg:py-32 bg-dark-800/30">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
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

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass-card p-6 lg:p-8 h-full hover:bg-dark-700/50 transition-colors group">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-5 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300">
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
