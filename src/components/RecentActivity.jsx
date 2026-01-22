import { useState, useEffect } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const recentActivities = [
  {
    id: 1,
    type: 'launch',
    message: 'Just launched: Card Guys E-Commerce Store',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: 'text-green-400',
    bgColor: 'bg-green-500/20'
  },
  {
    id: 2,
    type: 'milestone',
    message: 'Panda OMS: 10,000th order processed',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20'
  },
  {
    id: 3,
    type: 'review',
    message: 'New 5-star review received',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/20'
  }
]

function RecentActivity({ className = '' }) {
  const [activityRef, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  // Rotate through activities
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recentActivities.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const currentActivity = recentActivities[currentIndex]

  return (
    <div
      ref={activityRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      <div className="glass-card p-4 max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Recent Activity
          </span>
          <span className="flex gap-1">
            {recentActivities.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  i === currentIndex ? 'bg-primary-400' : 'bg-dark-600'
                }`}
              />
            ))}
          </span>
        </div>

        {/* Activity Item */}
        <div
          key={currentActivity.id}
          className="flex items-center gap-3 animate-fade-in"
        >
          <div className={`w-8 h-8 rounded-lg ${currentActivity.bgColor} flex items-center justify-center ${currentActivity.color} flex-shrink-0`}>
            {currentActivity.icon}
          </div>
          <p className="text-sm text-gray-300">{currentActivity.message}</p>
        </div>
      </div>
    </div>
  )
}

// Alternative: Static list version for sections
export function RecentActivityList({ className = '' }) {
  const [listRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={listRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      <div className="glass-card p-5">
        <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
          Recent Activity
        </h3>

        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <div
              key={activity.id}
              className="flex items-center gap-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-8 h-8 rounded-lg ${activity.bgColor} flex items-center justify-center ${activity.color} flex-shrink-0`}>
                {activity.icon}
              </div>
              <p className="text-sm text-gray-300">{activity.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentActivity
