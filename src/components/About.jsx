import useScrollAnimation from '../hooks/useScrollAnimation'

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

            <div className="space-y-4 text-gray-300 mb-6">
              <p className="text-lg">
                I&apos;m a web developer based in Southern Indiana with a Computer Science degree and a simple mission: build websites that actually help small businesses grow.
              </p>
              <p className="text-lg">
                I started Pryceless Solutions because I saw too many local businesses paying too much for websites that didn&apos;t work, or settling for DIY templates that made them look amateur. You deserve better.
              </p>
              <p className="text-lg">
                Every site I build is custom-designed for YOUR business, loads fast, looks professional on every device, and—most importantly—helps bring in customers. No monthly fees, no lock-in, no surprises.
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
      </div>
    </section>
  )
}

export default About
