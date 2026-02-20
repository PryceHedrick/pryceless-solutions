import useScrollAnimation from '../hooks/useScrollAnimation'

const differentiators = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'Solid Foundation',
    description: "CS degree + 5 years of real-world experience. Software that's architected correctly from the start."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Proven Results',
    description: "Award-winning work still running in production today. Not just demos—real systems for real businesses."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Code That Lasts',
    description: "Clean architecture and documentation. When you scale or bring on another developer, the codebase is an asset."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'No Surprises',
    description: "Regular updates, realistic timelines, and direct communication. You hear from me first, not when something's late."
  }
]

function About() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 })
  const [diffRef, diffVisible] = useScrollAnimation({ threshold: 0.1 })

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
                    <p className="text-white font-semibold">USI 2024</p>
                    <p className="text-gray-400 text-sm">Outstanding Senior Project Award</p>
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

            <div className="space-y-4 text-gray-300 mb-6">
              <p className="text-lg">
                CS grad from USI. IT technician by day. Builder by night.
              </p>
              <p className="text-lg">
                I started Pryceless Solutions to help local businesses get professional websites without agency prices. Now I&apos;m adding AI consulting — helping businesses integrate AI tools that actually do something useful.
              </p>
              <p className="text-lg">
                I care about code that works, systems that last, and not wasting your time or mine.
              </p>
            </div>

            {/* Guarantee */}
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-green-400 font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                You won&apos;t pay for something you don&apos;t love.
              </p>
            </div>

          </div>
        </div>

        {/* Why Work With Me - Differentiators */}
        <div
          ref={diffRef}
          className={`mt-16 lg:mt-24 transition-all duration-700 ${
            diffVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Tagline */}
          <div className="text-center mb-10">
            <div className="glass-card p-6 lg:p-8 max-w-2xl mx-auto border-primary-500/30">
              <p className="text-xl font-semibold text-white mb-2">
                Big agency results. Small business relationship.
              </p>
              <p className="text-gray-300 leading-relaxed">
                No account managers. No weeks waiting for replies. Just direct access to the person building your site.
              </p>
            </div>
          </div>

          {/* Differentiators Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="glass-card p-5 hover:bg-dark-700/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 mb-3">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
