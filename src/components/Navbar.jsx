import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/90 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold gradient-text">LeadFlowAI</Link>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
            <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
            <Link to="/crm-integrations" className="text-gray-400 hover:text-white transition-colors text-sm">Integrations</Link>
          </div>
          <Link to="/get-started" className="btn-primary text-sm hidden md:block">Get Started Free</Link>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden py-4 space-y-3 border-t border-white/5">
            <a href="#features" className="block text-gray-400 hover:text-white py-2">Features</a>
            <a href="#how-it-works" className="block text-gray-400 hover:text-white py-2">How It Works</a>
            <Link to="/pricing" className="block text-gray-400 hover:text-white py-2">Pricing</Link>
            <Link to="/crm-integrations" className="block text-gray-400 hover:text-white py-2">Integrations</Link>
            <Link to="/get-started" className="btn-primary block text-center">Get Started Free</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
