import { useState } from 'react'
import { Link } from 'react-router-dom'
import OAuthButtons from '../components/OAuthButtons'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [remember, setRemember] = useState(true)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [social, setSocial] = useState(null)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const errs = {}
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.password) errs.password = 'Password is required'
    return errs
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Demo mode — replace with a real API call when a backend exists.
    setTimeout(() => {
      setLoading(false)
      setSocial({ label: 'your account', email: form.email })
    }, 1500)
  }

  if (social) {
    return (
      <div className="pt-24 pb-16 px-4 min-h-screen flex items-center">
        <div className="max-w-md mx-auto w-full text-center">
          <div className="card">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background:'rgba(34,197,94,0.15)'}}>
              <svg className="w-8 h-8" style={{color:'#4ade80'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Welcome back! 🎉</h2>
            <p className="text-gray-400 mb-2">Signed in as <span className="text-indigo-400">{social.email}</span> via {social.label}</p>
            <p className="text-gray-500 text-sm mb-8">Demo mode — no real session is created yet.</p>
            <div className="space-y-3">
              <Link to="/" className="btn-primary block text-center">Go to Dashboard →</Link>
              <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors block">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen flex items-center">
      <div className="max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-bold gradient-text">LeadFlowAI</Link>
          <h1 className="text-3xl font-bold mt-4 mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue to your workspace</p>
        </div>
        <div className="card">
          <OAuthButtons onSuccess={p => setSocial({ label: p.label, email: `${p.id}-user@company.com` })} columns={2} />
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-400 text-sm">or sign in with email</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Work Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={handleChange}
                  style={{ borderColor: errors.email ? '#ef4444' : undefined }}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 text-white placeholder-gray-500 transition-colors"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={form.password}
                  onChange={handleChange}
                  style={{ borderColor: errors.password ? '#ef4444' : undefined }}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 text-white placeholder-gray-500 transition-colors"
                />
                {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-400 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    className="w-4 h-4 rounded bg-white/5 border border-white/20 accent-indigo-500"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  onClick={() => alert('Password reset — coming soon!')}
                  className="text-indigo-400 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2"
                style={{ opacity: loading ? 0.8 : 1 }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Signing in...
                  </>
                ) : 'Sign In'}
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-400 mt-4">
            New to LeadFlowAI?{' '}
            <Link to="/get-started" className="text-indigo-400 hover:underline">Start your free trial</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
