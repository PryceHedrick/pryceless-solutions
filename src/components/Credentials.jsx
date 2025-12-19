import useScrollAnimation from '../hooks/useScrollAnimation'

// EDIT: Credentials and achievements
const credentials = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'BS Computer Science',
    subtitle: 'University of Southern Indiana'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Outstanding Senior Project',
    subtitle: 'Award 2024'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Dean's List",
    subtitle: 'Fall 2022, Spring 2023'
  }
]

// EDIT: Tech stack - Add or modify technologies you work with
const techStack = [
  { name: 'Python', color: '#3776AB' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'C#', color: '#239120' },
  { name: 'React', color: '#61DAFB' },
  { name: 'SQL', color: '#4479A1' },
  { name: 'Flask', color: '#000000' },
  { name: 'ASP.NET', color: '#512BD4' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Git', color: '#F05032' },
  { name: 'REST APIs', color: '#FF6C37' }
]

function Credentials() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-16 bg-dark-900 border-y border-dark-700/50">
      <div
        ref={sectionRef}
        className={`section-container transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Credentials Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mb-12">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 glass-card hover:bg-dark-700/50 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400">
                {credential.icon}
              </div>
              <div>
                <p className="font-semibold text-white">{credential.title}</p>
                <p className="text-sm text-gray-400">{credential.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <p className="text-gray-400 mb-6 text-sm uppercase tracking-wider">
            {/* EDIT: Tech stack label */}
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group relative px-4 py-2 glass-card hover:bg-dark-700/50 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Credentials
