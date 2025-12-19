import useScrollAnimation from '../hooks/useScrollAnimation'

// EDIT: About section highlights
const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    title: 'BS Computer Science',
    description: 'University of Southern Indiana, 2024'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Award-Winning Work',
    description: 'Outstanding Senior Project 2024'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'IT Specialist',
    description: 'Managing 500+ device infrastructure'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'AI-Powered Delivery',
    description: 'Modern tools for faster results'
  }
]

function About() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" className="py-20 lg:py-32 bg-dark-900">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Main Image Placeholder */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden glass-card">
                {/* EDIT: Replace with your professional headshot */}
                {/* <img src="/path-to-your-headshot.jpg" alt="Pryce Hedrick" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-dark-700 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">Professional headshot placeholder</p>
                    <p className="text-gray-500 text-xs mt-1">Replace in About.jsx</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-2xl -z-10" />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-card p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">5+ Years</p>
                    <p className="text-gray-400 text-sm">Coding Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            ref={sectionRef}
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="section-heading">
              {/* EDIT: About section heading */}
              Hi, I'm <span className="gradient-text">Pryce</span>
            </h2>

            <div className="space-y-4 text-gray-300 mb-8">
              {/* EDIT: About section paragraphs */}
              <p className="text-lg">
                I'm a Computer Science graduate from the University of Southern Indiana with a passion for building digital solutions that actually solve problems.
              </p>
              <p>
                By day, I work as an IT Specialist managing infrastructure for 500+ devices. By night (and weekends), I help entrepreneurs and small businesses bring their digital ideas to life through custom development work.
              </p>
              <p>
                My approach combines formal CS training, real-world IT experience, and modern AI tools to deliver quality results efficiently. Whether you need a sleek landing page, a complex web application, or help integrating your tools—I've got you covered.
              </p>
              <p className="text-gray-400 italic">
                {/* EDIT: Personal touch */}
                When I'm not coding, I run a trading card business—so I understand what it means to build something from scratch and make it work.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-4 hover:bg-dark-700/50 transition-colors group"
                >
                  <div className="text-primary-400 mb-2 group-hover:scale-110 transition-transform inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
