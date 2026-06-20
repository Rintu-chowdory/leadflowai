import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function GetStarted() {
  const [form, setForm] = useState({ name: '', email: '', company: '', password: '' })
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

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
            <button className="btn-secondary py-2 text-sm flex items-center justify-center gap-2">🔵 Google</button>
            <button className="btn-secondary py-2 text-sm flex items-center justify-center gap-2">💼 LinkedIn</button>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="space-y-4">
            {[
              ['name', 'Full Name', 'text'],
              ['email', 'Work Email', 'email'],
              ['company', 'Company Name', 'text'],
              ['password', 'Password', 'password']
            ].map(([id, ph, type]) => (
              <div key={id}>
                <label className="text-sm text-gray-400 mb-1 block">{ph}</label>
                <input
                  type={type}
                  name={id}
                  placeholder={ph}
                  value={form[id]}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 text-white placeholder-gray-500"
                />
              </div>
            ))}
            <button className="btn-primary w-full text-center">Create Free Account</button>
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account? <a href="#" className="text-indigo-400 hover:underline">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  )
}
