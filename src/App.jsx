import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import BlogPost from './pages/blog/BlogPost'
import AreasServed from './pages/AreasServed'
import ServiceAreaPage from './pages/areas/ServiceAreaPage'
import Industries from './pages/Industries'
import IndustryPage from './pages/industries/IndustryPage'
import Links from './pages/Links'

// 404 Page
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-500 mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8">Page not found</p>
      <a href="/" className="text-sky-400 hover:text-sky-300 transition-colors">
        ← Back to Home
      </a>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page uses its own nav */}
        <Route path="/" element={<Home />} />

        {/* Links page is standalone */}
        <Route path="/links" element={<Links />} />

        {/* All other pages use shared layout */}
        <Route path="/*" element={
          <div className="flex flex-col min-h-screen bg-slate-900">
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/areas-served" element={<AreasServed />} />
                <Route path="/areas/:slug" element={<ServiceAreaPage />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/industries/:slug" element={<IndustryPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
