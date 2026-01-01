import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { MotionProvider } from './components/motion/MotionConfig'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <MotionProvider>
        <App />
      </MotionProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
