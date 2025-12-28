import useScrollAnimation from '../hooks/useScrollAnimation'

// EDIT: About section highlights - Why Work With Me
const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    title: 'Solid Foundation',
    description: 'CS degree from USI. Algorithms, data structures, real engineering principles—not just YouTube tutorials.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Proven Results',
    description: 'Outstanding Senior Project Award 2024. Built an enterprise system still in production today.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Code That Lasts',
    description: 'Readable, maintainable, documented. Code you can build on—not throw away.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'No Surprises',
    description: 'Regular updates. Honest timelines. You always know where your project stands.'
  }
]

function About() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" className="py-16 lg:py-24 bg-dark-900">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Main Image Placeholder */}
              <div className="rounded-2xl overflow-hidden glass-card">
                <img src="/headshot.png" alt="Pryce Hedrick" className="w-full h-auto block" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-2xl -z-10" />

              {/* Floating Badge */}
              <div className="absolute -bottom-14 -right-4 glass-card p-4 animate-float">
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
              Meet <span className="gradient-text">Pryce</span>
            </h2>

            <div className="space-y-4 text-gray-300 mb-8">
              <p className="text-lg">
                I graduated from the University of Southern Indiana with degrees in Computer Science and Business Administration—while working full-time and raising a family. That taught me more than any textbook: how to manage time, prioritize ruthlessly, and deliver under real constraints. My senior capstone earned the Outstanding Senior Project Award, and that same discipline guides every project I take on: technically excellent, strategically sound, built to deliver.
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
