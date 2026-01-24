import { useState, useMemo } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

// Industry defaults for the calculator
const industryDefaults = {
  restaurant: {
    name: 'Restaurant / Cafe',
    monthlyVisitors: 1000,
    conversionRate: 3,
    avgOrderValue: 35,
    websiteCost: 1800
  },
  contractor: {
    name: 'Contractor / Home Services',
    monthlyVisitors: 500,
    conversionRate: 5,
    avgOrderValue: 2000,
    websiteCost: 1800
  },
  retail: {
    name: 'Retail / E-Commerce',
    monthlyVisitors: 800,
    conversionRate: 2.5,
    avgOrderValue: 75,
    websiteCost: 2500
  },
  professional: {
    name: 'Professional Services',
    monthlyVisitors: 400,
    conversionRate: 4,
    avgOrderValue: 500,
    websiteCost: 1800
  }
}

function ROICalculator({ className = '' }) {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })
  const [calcRef, calcVisible] = useScrollAnimation({ threshold: 0.1 })

  const [selectedIndustry, setSelectedIndustry] = useState('restaurant')
  const [customValues, setCustomValues] = useState(null)

  const currentDefaults = industryDefaults[selectedIndustry]

  // Memoize values to prevent recalculation on every render
  const values = useMemo(() => customValues || {
    monthlyVisitors: currentDefaults.monthlyVisitors,
    conversionRate: currentDefaults.conversionRate,
    avgOrderValue: currentDefaults.avgOrderValue,
    websiteCost: currentDefaults.websiteCost
  }, [customValues, currentDefaults])

  // Calculate ROI metrics
  const calculations = useMemo(() => {
    const monthlyLeads = Math.round(values.monthlyVisitors * (values.conversionRate / 100))
    const monthlyRevenue = monthlyLeads * values.avgOrderValue
    const annualRevenue = monthlyRevenue * 12
    const roiPercent = Math.round((annualRevenue / values.websiteCost) * 100)
    const paybackMonths = monthlyRevenue > 0 ? Math.ceil(values.websiteCost / monthlyRevenue) : 0

    return {
      monthlyLeads,
      monthlyRevenue,
      annualRevenue,
      roiPercent,
      paybackMonths
    }
  }, [values])

  const handleIndustryChange = (industry) => {
    setSelectedIndustry(industry)
    setCustomValues(null) // Reset to defaults when changing industry
  }

  const handleValueChange = (field, value) => {
    const numValue = parseFloat(value) || 0
    setCustomValues({
      ...values,
      [field]: numValue
    })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={`py-16 lg:py-24 bg-dark-800/30 ${className}`}>
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">
            Calculate Your <span className="gradient-text">ROI</span>
          </h2>
          <p className="section-subheading">
            See how quickly a professional website pays for itself
          </p>
        </div>

        {/* Calculator */}
        <div
          ref={calcRef}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            calcVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card p-6 lg:p-8">
            {/* Industry Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Select Your Industry
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {Object.entries(industryDefaults).map(([key, industry]) => (
                  <button
                    key={key}
                    onClick={() => handleIndustryChange(key)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      selectedIndustry === key
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                        : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                    }`}
                  >
                    {industry.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Sliders */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label id="visitors-label" className="block text-sm font-medium text-gray-300 mb-2">
                  Monthly Website Visitors
                </label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={values.monthlyVisitors}
                  onChange={(e) => handleValueChange('monthlyVisitors', e.target.value)}
                  className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  aria-labelledby="visitors-label"
                  aria-valuemin={100}
                  aria-valuemax={5000}
                  aria-valuenow={values.monthlyVisitors}
                />
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">100</span>
                  <span className="text-primary-400 font-semibold">{values.monthlyVisitors.toLocaleString()}</span>
                  <span className="text-gray-500">5,000</span>
                </div>
              </div>

              <div>
                <label id="conversion-label" className="block text-sm font-medium text-gray-300 mb-2">
                  Conversion Rate (%)
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.5"
                  value={values.conversionRate}
                  onChange={(e) => handleValueChange('conversionRate', e.target.value)}
                  className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  aria-labelledby="conversion-label"
                  aria-valuemin={0.5}
                  aria-valuemax={10}
                  aria-valuenow={values.conversionRate}
                />
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">0.5%</span>
                  <span className="text-primary-400 font-semibold">{values.conversionRate}%</span>
                  <span className="text-gray-500">10%</span>
                </div>
              </div>

              <div>
                <label id="ordervalue-label" className="block text-sm font-medium text-gray-300 mb-2">
                  Average Order/Job Value ($)
                </label>
                <input
                  type="range"
                  min="25"
                  max="5000"
                  step="25"
                  value={values.avgOrderValue}
                  onChange={(e) => handleValueChange('avgOrderValue', e.target.value)}
                  className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  aria-labelledby="ordervalue-label"
                  aria-valuemin={25}
                  aria-valuemax={5000}
                  aria-valuenow={values.avgOrderValue}
                />
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">$25</span>
                  <span className="text-primary-400 font-semibold">${values.avgOrderValue.toLocaleString()}</span>
                  <span className="text-gray-500">$5,000</span>
                </div>
              </div>

              <div>
                <label id="investment-label" className="block text-sm font-medium text-gray-300 mb-2">
                  Website Investment ($)
                </label>
                <input
                  type="range"
                  min="750"
                  max="5000"
                  step="250"
                  value={values.websiteCost}
                  onChange={(e) => handleValueChange('websiteCost', e.target.value)}
                  className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  aria-labelledby="investment-label"
                  aria-valuemin={750}
                  aria-valuemax={5000}
                  aria-valuenow={values.websiteCost}
                />
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">$750</span>
                  <span className="text-primary-400 font-semibold">${values.websiteCost.toLocaleString()}</span>
                  <span className="text-gray-500">$5,000</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="border-t border-dark-600 pt-8">
              <h3 className="text-lg font-semibold text-white mb-6 text-center">Your Projected Results</h3>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-dark-700/50 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">{calculations.monthlyLeads}</div>
                  <div className="text-sm text-gray-400">Monthly Leads</div>
                </div>
                <div className="text-center p-4 bg-dark-700/50 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">${calculations.monthlyRevenue.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Monthly Revenue</div>
                </div>
                <div className="text-center p-4 bg-dark-700/50 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">${calculations.annualRevenue.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Annual Revenue</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                  <div className="text-3xl font-bold text-green-400 mb-1">{calculations.roiPercent}%</div>
                  <div className="text-sm text-green-400/70">First Year ROI</div>
                </div>
              </div>

              {/* Payback CTA */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary-500/10 border border-primary-500/30 rounded-xl mb-6">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-lg">
                    <span className="text-gray-300">Your website pays for itself in </span>
                    <span className="text-primary-400 font-bold">
                      {calculations.paybackMonths === 1 ? '1 month' : `${calculations.paybackMonths} months`}
                    </span>
                  </span>
                </div>

                <div>
                  <button onClick={scrollToContact} className="btn-primary inline-flex items-center gap-2">
                    Start Growing Your Business
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ROICalculator
