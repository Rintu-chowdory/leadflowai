import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function GetStarted() {
  const [form, setForm] = useState({ name: '', email: '', company: '', password: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Full name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.company.trim()) errs.company = 'Company name is required'
    if (!form.password || form.password.length < 8) errs.password = 'Password must be at least 8 characters'
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
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="pt-24 pb-16 px-4 min-h-screen flex items-center">
        <div className="max-w-md mx-auto w-full text-center">
          <div className="card">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background:'rgba(34,197,94,0.15)'}}>
              <svg className="w-8 h-8" style={{color:'#4ade80'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">You're all set, {form.name.split(' ')[0]}! 🎉</h2>
            <p className="text-gray-400 mb-2">Account created for <span className="text-indigo-400">{form.email}</span></p>
            <p className="text-gray-500 text-sm mb-8">Your 14-day free trial has started. No credit card required.</p>
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
          <h1 className="text-3xl font-bold mt-4 mb-2">Start Your Free Trial</h1>
          <p className="text-gray-400">No credit card required · 14-day free trial</p>
        </div>
        <div className="card">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => alert('Google OAuth — coming soon!')}
              className="btn-secondary py-2 text-sm flex items-center justify-center gap-2 w-full"
            >
              🔵 Google
            </button>
            <button
              type="button"
              onClick={() => alert('LinkedIn OAuth — coming soon!')}
              className="btn-secondary py-2 text-sm flex items-center justify-center gap-2 w-full"
            >
              💼 LinkedIn
            </button>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-4">
              {[
                ['name', 'Full Name', 'text', 'John Smith'],
                ['email', 'Work Email', 'email', 'john@company.com'],
                ['company', 'Company Name', 'text', 'Acme Inc.'],
                ['password', 'Password', 'password', 'Min. 8 characters'],
              ].map(([id, label, type, placeholder]) => (
                <div key={id}>
                  <label className="text-sm text-gray-400 mb-1 block">{label}</label>
                  <input
                    type={type}
                    name={id}
                    placeholder={placeholder}
                    value={form[id]}
                    onChange={handleChange}
                    style={{
                      borderColor: errors[id] ? '#ef4444' : undefined
                    }}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 text-white placeholder-gray-500 transition-colors"
                  />
                  {errors[id] && <p className="text-red-400 text-xs mt-1">{errors[id]}</p>}
                </div>
              ))}
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
                    Creating account...
                  </>
                ) : 'Create Free Account'}
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{' '}
            <Link to="/get-started" className="text-indigo-400 hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
