import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/90 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold gradient-text flex-shrink-0">LeadFlowAI</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Product dropdown */}
            <div className="relative" onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm">
                Product
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#0f0f1a] border border-white/10 rounded-lg shadow-xl py-2">
                  <Link to="/ai-lead-finder" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">AI Lead Finder</Link>
                  <Link to="/crm-integrations" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">CRM Integrations</Link>
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
            <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">Testimonials</a>
            <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a>
            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/get-started" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Login
            </Link>
            <Link to="/get-started" className="btn-primary text-sm flex items-center gap-2">
              Get Started Free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4 space-y-1 border-t border-white/5">
            <div className="py-2">
              <div className="text-xs text-gray-500 uppercase tracking-wider px-2 mb-1">Product</div>
              <Link to="/ai-lead-finder" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white py-2 px-2 rounded hover:bg-white/5">AI Lead Finder</Link>
              <Link to="/crm-integrations" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white py-2 px-2 rounded hover:bg-white/5">CRM Integrations</Link>
            </div>
            <Link to="/pricing" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white py-2 px-2 rounded hover:bg-white/5">Pricing</Link>
            <a href="#testimonials" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white py-2 px-2 rounded hover:bg-white/5">Testimonials</a>
            <a href="#faq" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white py-2 px-2 rounded hover:bg-white/5">FAQ</a>
            <a href="#features" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white py-2 px-2 rounded hover:bg-white/5">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white py-2 px-2 rounded hover:bg-white/5">Contact</a>
            <div className="pt-3 space-y-2">
              <Link to="/get-started" onClick={() => setOpen(false)} className="block text-center text-gray-300 border border-white/20 rounded-lg py-2 hover:border-white/40">Login</Link>
              <Link to="/get-started" onClick={() => setOpen(false)} className="btn-primary block text-center">Get Started Free →</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
