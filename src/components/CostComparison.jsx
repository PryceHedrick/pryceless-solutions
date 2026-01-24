import useScrollAnimation from '../hooks/useScrollAnimation'

const comparisonData = {
  categories: [
    { key: 'upfront', label: 'Upfront Cost' },
    { key: 'monthly', label: 'Monthly Fees' },
    { key: 'threeYear', label: '3-Year Total' },
    { key: 'time', label: 'Your Time' },
    { key: 'design', label: 'Design Quality' }
  ],
  providers: [
    {
      name: 'DIY (Wix/Squarespace)',
      color: 'gray',
      values: {
        upfront: '$0 - $200',
        monthly: '$12 - $50/mo',
        threeYear: '$432 - $2,000',
        time: '40+ hours',
        design: 'Template'
      }
    },
    {
      name: 'WordPress Agency',
      color: 'gray',
      values: {
        upfront: '$500 - $2,000',
        monthly: '$30 - $100/mo',
        threeYear: '$1,500 - $5,600',
        time: '20+ hours',
        design: 'Template'
      }
    },
    {
      name: 'Pryceless Solutions',
      color: 'primary',
      highlighted: true,
      values: {
        upfront: '$750 - $1,800',
        monthly: '$0 - $20/mo',
        threeYear: '$750 - $2,500',
        time: '2-3 hours',
        design: 'Custom'
      }
    }
  ]
}

function CostComparison({ className = '' }) {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })
  const [tableRef, tableVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className={`py-16 lg:py-24 bg-dark-900 ${className}`}>
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">
            The True Cost of <span className="gradient-text">Your Website</span>
          </h2>
          <p className="section-subheading">
            Compare your options — the numbers speak for themselves
          </p>
          <div className="mt-4 max-w-xl mx-auto">
            <p className="text-gray-300 text-base leading-relaxed">
              Tired of fighting with Wix at midnight?
              <br />
              <span className="text-primary-400 font-medium">Your website should be bringing in customers, not eating your weekends.</span>
            </p>
          </div>
        </div>

        {/* Comparison Table - Desktop */}
        <div
          ref={tableRef}
          className={`hidden md:block transition-all duration-700 ${
            tableVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-600">
                  <th className="text-left p-4 text-gray-400 font-medium">Category</th>
                  {comparisonData.providers.map((provider, i) => (
                    <th
                      key={i}
                      className={`p-4 text-center font-semibold ${
                        provider.highlighted
                          ? 'text-primary-400 bg-primary-500/10'
                          : 'text-gray-300'
                      }`}
                    >
                      {provider.name}
                      {provider.highlighted && (
                        <span className="block text-xs text-primary-400/70 font-normal mt-1">
                          Recommended
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.categories.map((category, i) => (
                  <tr
                    key={category.key}
                    className={i < comparisonData.categories.length - 1 ? 'border-b border-dark-700' : ''}
                  >
                    <td className="p-4 text-gray-300 font-medium">{category.label}</td>
                    {comparisonData.providers.map((provider, j) => {
                      const value = provider.values[category.key]
                      const isHighlighted = provider.highlighted
                      const isBestValue = category.key === 'monthly' || category.key === 'time' || category.key === 'design'

                      return (
                        <td
                          key={j}
                          className={`p-4 text-center ${
                            isHighlighted
                              ? 'bg-primary-500/10 font-semibold text-white'
                              : 'text-gray-400'
                          }`}
                        >
                          {isHighlighted && isBestValue ? (
                            <span className="inline-flex items-center gap-1.5">
                              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {value}
                            </span>
                          ) : (
                            value
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {comparisonData.providers.map((provider, index) => (
            <MobileComparisonCard
              key={index}
              provider={provider}
              categories={comparisonData.categories}
              index={index}
            />
          ))}
        </div>

        {/* Key Differentiator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-green-400 font-medium">
              Zero recurring design fees — you own your site forever
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function MobileComparisonCard({ provider, categories, index }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`glass-card p-5 ${
          provider.highlighted ? 'border-primary-500/50 bg-primary-500/5' : ''
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className={`font-bold ${provider.highlighted ? 'text-primary-400' : 'text-white'}`}>
            {provider.name}
          </h3>
          {provider.highlighted && (
            <span className="px-2 py-1 text-xs font-medium bg-primary-500/20 text-primary-400 rounded-full">
              Recommended
            </span>
          )}
        </div>

        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.key} className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{category.label}</span>
              <span className={`text-sm font-medium ${provider.highlighted ? 'text-white' : 'text-gray-300'}`}>
                {provider.values[category.key]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CostComparison
