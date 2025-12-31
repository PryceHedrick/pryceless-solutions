import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Websites from './pages/services/Websites'
import Visibility from './pages/services/Visibility'
import Automation from './pages/services/Automation'
import About from './pages/About'
import Process from './pages/Process'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

// 404 Page
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-off-white">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-medium-gray mb-8">Page not found</p>
      <a href="/" className="text-accent hover:text-accent-dark transition-colors">
        &larr; Back to Home
      </a>
    </div>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/websites" element={<Websites />} />
          <Route path="/services/visibility" element={<Visibility />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
