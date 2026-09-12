import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'

const homeAnchor = hash => `${import.meta.env.BASE_URL}${hash}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const navRef = useRef(null)

  // Close all menus whenever the route changes
  useEffect(() => {
    setProductOpen(false)
    setMenuOpen(false)
    setOpen(false)
  }, [location])

  // Close dropdowns on click outside the navbar
  useEffect(() => {
    const onDoc = e => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setProductOpen(false)
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  const initials = user ? (user.name || user.email || '?').trim().charAt(0).toUpperCase() : ''

  const handleLogout = () => {
    logout()
    setMenuOpen(false)
    setOpen(false)
    navigate('/')
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/90 backdrop-blur border-b border-white/5" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold gradient-text flex-shrink-0">LeadFlowAI</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Product dropdown — opens on hover AND click */}
            <div
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProductOpen(v => !v)}
                className="appearance-none bg-transparent border-0 p-0 m-0 flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm focus:outline-none"
              >
                Product
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productOpen && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-[#0f0f1a] border border-white/10 rounded-lg shadow-xl py-2">
                    <Link to="/ai-lead-finder" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">AI Lead Finder</Link>
                    <Link to="/crm-integrations" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">CRM Integrations</Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
            <a href={homeAnchor('#testimonials')} className="text-gray-400 hover:text-white transition-colors text-sm">Testimonials</a>
            <a href={homeAnchor('#faq')} className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a>
            <a href={homeAnchor('#features')} className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
            <a href={homeAnchor('#contact')} className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div
                className="relative"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMenuOpen(v => !v)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <span className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-semibold">{initials}</span>
                  {user.name || user.email}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {menuOpen && (
                  <div className="absolute top-full right-0 pt-2 w-52">
                    <div className="bg-[#0f0f1a] border border-white/10 rounded-lg shadow-xl py-2">
                      <div className="px-4 py-2 text-xs text-gray-500 border-b border-white/5 mb-1">Signed in via {user.method || 'email'} &middot; demo mode</div>
                      <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">Log out</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
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
              </>
            )}
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
            <a href={homeAnchor('#testimonials')} onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white py-2 px-2 rounded hover:bg-white/5">Testimonials</a>
            <a href={homeAnchor('#faq')} onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white py-2 px-2 rounded hover:bg-white/5">FAQ</a>
            <a href={homeAnchor('#features')} onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white py-2 px-2 rounded hover:bg-white/5">About</a>
            <a href={homeAnchor('#contact')} onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white py-2 px-2 rounded hover:bg-white/5">Contact</a>
            <div className="pt-3 space-y-2">
              {user ? (
                <>
                  <div className="text-center text-sm text-gray-400 py-1">Signed in as {user.name || user.email}</div>
                  <button onClick={handleLogout} className="block w-full text-center text-gray-300 border border-white/20 rounded-lg py-2 hover:border-white/40">Log out</button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setOpen(false)} className="block text-center text-gray-300 border border-white/20 rounded-lg py-2 hover:border-white/40">Login</Link>
                  <Link to="/get-started" onClick={() => setOpen(false)} className="btn-primary block text-center">Get Started Free →</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
