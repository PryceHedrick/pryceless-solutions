import useScrollAnimation from '../hooks/useScrollAnimation'

// Testimonials with real project outcomes
const testimonials = [
  {
    id: 1,
    quote: "Pryce delivered exactly what we needed — on time and on budget. Our new site has already brought in new customers we wouldn't have reached before.",
    name: "Jason T.",
    initials: "JT",
    business: "Panda International Cuisine",
    location: "Loogootee, IN",
    result: "Website launched in 2 weeks",
    metric: "New customer inquiries up 40%",
    avatarColor: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    quote: "Professional, responsive, and actually listened to what we wanted. The site works perfectly on mobile — which is where most of our customers find us.",
    name: "Mike R.",
    initials: "MR",
    business: "Card Guys Sports Cards",
    location: "Southern Indiana",
    result: "Mobile-first e-commerce platform",
    metric: "Expanded beyond eBay marketplace",
    avatarColor: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    quote: "The order management system Pryce built streamlined our entire fulfillment process. What used to take hours now takes minutes.",
    name: "Operations Team",
    initials: "PI",
    business: "Panda International",
    location: "Loogootee, IN",
    result: "Award-winning system in production",
    metric: "20+ hours saved weekly",
    avatarColor: "from-green-500 to-emerald-500"
  }
]

function Testimonials() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-dark-800/30">
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
            What <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="section-subheading">
            {/* EDIT: Section description */}
            Don&apos;t just take my word for it
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="glass-card p-6 lg:p-8 h-full flex flex-col hover:bg-dark-700/50 transition-colors">
        {/* Quote Icon */}
        <div className="text-primary-500/30 mb-4">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote */}
        <blockquote className="text-gray-300 text-lg mb-6 flex-grow">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Avatar with Initials */}
          <div className={`w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center`}>
            <span className="text-white font-bold text-sm">{testimonial.initials}</span>
          </div>

          {/* Name & Business */}
          <div>
            <p className="font-semibold text-white">{testimonial.name}</p>
            <p className="text-sm text-gray-400">{testimonial.business}</p>
            <p className="text-xs text-gray-500">{testimonial.location}</p>
          </div>
        </div>

        {/* Result & Metric Badges */}
        <div className="mt-4 pt-4 border-t border-dark-600 space-y-2">
          {testimonial.result && (
            <span className="inline-flex items-center gap-2 text-xs text-green-400 font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {testimonial.result}
            </span>
          )}
          {testimonial.metric && (
            <div className="block">
              <span className="inline-flex items-center gap-2 text-xs text-primary-400 font-medium bg-primary-500/10 px-2 py-1 rounded-full">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {testimonial.metric}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
