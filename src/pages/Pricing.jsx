import { useState } from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    desc: 'Perfect for getting started',
    features: ['100 leads/month', '50 outreach emails', 'Basic lead scoring', 'Email templates', 'CSV export'],
    cta: 'Get Started Free',
    highlight: false
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    yearlyPrice: 39,
    desc: 'For growing sales teams',
    features: ['5,000 leads/month', 'Unlimited outreach', 'Advanced AI scoring', 'Personalized sequences', 'CRM integrations', 'Priority support', 'Analytics dashboard'],
    cta: 'Start Pro Trial',
    highlight: true
  },
  {
    name: 'Enterprise',
    monthlyPrice: 149,
    yearlyPrice: 119,
    desc: 'For large organizations',
    features: ['Unlimited leads', 'Unlimited everything', 'Custom AI models', 'White-label option', 'Dedicated account manager', 'SSO & advanced security', 'Custom integrations', 'SLA guarantee'],
    cta: 'Contact Sales',
    highlight: false
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, <span className="gradient-text">Transparent Pricing</span></h1>
          <p className="text-gray-400 mb-6">Start free, scale as you grow</p>
          <div className="inline-flex items-center gap-3 bg-white/5 p-1 rounded-full">
            <button onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all ${!yearly ? 'bg-indigo-600 text-white' : 'text-gray-400'}`}>
              Monthly
            </button>
            <button onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all ${yearly ? 'bg-indigo-600 text-white' : 'text-gray-400'}`}>
              Yearly <span className="text-green-400 text-xs ml-1">Save 20%</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`card relative ${plan.highlight ? 'border-indigo-500/50 bg-indigo-950/20' : ''}`}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${yearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <Link to="/get-started"
                className={`block text-center mb-6 ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}>
                {plan.cta}
              </Link>
              <ul className="space-y-2">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-indigo-400">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
