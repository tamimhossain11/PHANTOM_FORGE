import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import DroneDashboard from './pages/DroneDashboard'
import AUVDashboard from './pages/AUVDashboard'
import ROVDashboard from './pages/ROVDashboard'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg cyber-grid relative">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drone" element={<DroneDashboard />} />
            <Route path="/auv" element={<AUVDashboard />} />
            <Route path="/rov" element={<ROVDashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  )
}

export default App
