import { useState } from 'react'
import { Link } from 'react-router-dom'

const features = [
  { icon: '🔍', title: 'Smart Lead Discovery', desc: 'AI identifies your ideal customer profile and finds matching prospects across 50M+ verified contacts.' },
  { icon: '⚡', title: 'AI Lead Scoring', desc: 'Machine learning algorithms predict conversion likelihood and prioritize your hottest leads.' },
  { icon: '✉️', title: 'Personalized Outreach', desc: 'Generate unique, compelling messages for each prospect using advanced language AI.' },
  { icon: '📊', title: 'Real-time Analytics', desc: 'Track opens, clicks, replies, and conversions with detailed performance dashboards.' },
  { icon: '🌍', title: 'Multi-language Support', desc: 'Reach global markets with AI-powered translations in 5+ languages.' },
  { icon: '🔒', title: 'Data Compliance', desc: 'GDPR and CCPA compliant data handling with built-in consent management.' },
  { icon: '🔄', title: 'Auto Follow-ups', desc: 'Intelligent sequences that adapt based on prospect engagement patterns.' },
  { icon: '🔗', title: 'CRM Integration', desc: 'Seamless sync with Salesforce, HubSpot, Pipedrive, and 20+ other platforms.' },
]

const steps = [
  { num: '01', title: 'Discover Leads', desc: 'AI scans millions of data points to find your ideal prospects by industry, job title, company size, and region.' },
  { num: '02', title: 'Qualify & Score', desc: 'Our AI validates contact data, enriches profiles, and assigns intelligent lead scores based on conversion likelihood.' },
  { num: '03', title: 'Personalized Outreach', desc: "Generate hyper-personalized email sequences that resonate with each prospect's unique context." },
  { num: '04', title: 'Track & Convert', desc: 'Monitor opens, clicks, and replies in real-time. Let AI optimize your sequences for maximum conversions.' },
]

const testimonials = [
  { name: 'Sarah Chen', role: 'VP of Sales', company: 'TechScale Inc.', quote: "LeadFlowAI transformed our outbound sales. We've 3x'd our qualified meetings in just 2 months.", initials: 'SC' },
  { name: 'Marcus Johnson', role: 'Founder & CEO', company: 'GrowthHack Agency', quote: "As an agency, we needed a solution that scales. LeadFlowAI's white-label features are game changers.", initials: 'MJ' },
  { name: 'Emily Rodriguez', role: 'Head of Marketing', company: 'CloudFirst SaaS', quote: 'The lead scoring accuracy is remarkable. Our conversion rate has doubled.', initials: 'ER' },
  { name: 'David Kim', role: 'Sales Director', company: 'Enterprise Solutions', quote: 'LeadFlowAI is the only tool that delivers consistent, qualified leads at scale.', initials: 'DK' },
]

const faqs = [
  { q: 'How does LeadFlowAI find leads?', a: 'Our AI scans 50M+ verified contacts across multiple databases, social platforms, and business registries to find prospects matching your ideal customer profile.' },
  { q: 'Is the data GDPR compliant?', a: 'Yes. We maintain strict GDPR and CCPA compliance with built-in consent management, data minimization, and right-to-erasure workflows.' },
  { q: 'How accurate is the email verification?', a: 'Our email verification achieves 98% accuracy through multi-step validation including syntax check, domain verification, and real-time SMTP validation.' },
  { q: 'Can I integrate with my existing CRM?', a: 'Absolutely. LeadFlowAI integrates with 20+ CRMs including Salesforce, HubSpot, Pipedrive, Zoho, and more via native integrations and Zapier.' },
  { q: "What's included in the free plan?", a: 'The free plan includes 100 leads/month, 50 outreach emails, basic lead scoring, and email templates.' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  const useCases = [
    { label: 'Marketing Agencies', stats: ['500K+ Leads Generated', '4.2x Avg. ROI', '80% Time Saved'], desc: 'Help your clients grow with AI-powered lead generation. Manage multiple campaigns and deliver consistent results.' },
    { label: 'SaaS Companies', stats: ['10x Pipeline Growth', '3.5x Conversion', '60% Less Manual Work'], desc: 'Scale your product-led growth with AI that finds companies who fit your ICP and automates outreach.' },
    { label: 'Sales Teams', stats: ['2x More Meetings', '45% Quota Attainment', '70% Less Prospecting Time'], desc: 'Let your reps focus on closing, not prospecting. AI finds, scores, and warms up leads automatically.' },
    { label: 'Recruiters', stats: ['300% More Candidates', '5x Faster Placement', '90% Response Rate'], desc: 'Find top talent before they are on the market. AI scans professional networks to identify passive candidates.' },
  ]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 text-sm text-indigo-400 mb-6">
            <span>✨</span> AI-Powered Lead Generation Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Find & Convert<br />
            <span className="gradient-text">High-Quality Leads</span><br />
            with AI
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Discover, qualify, and reach your ideal customers automatically. LeadFlowAI uses advanced AI to identify prospects, personalize outreach, and maximize conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/get-started" className="btn-primary text-lg">Start Free Trial</Link>
            <Link to="/ai-lead-finder" className="btn-secondary text-lg">See How It Works</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[['50M+','Verified Contacts'],['98%','Email Accuracy'],['3x','Avg. Revenue Growth'],['10K+','Happy Customers']].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold gradient-text">{val}</div>
                <div className="text-sm text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How LeadFlowAI Works</h2>
            <p className="text-gray-400 text-lg">Four simple steps to transform your lead generation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="card">
                <div className="text-4xl font-bold gradient-text mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to <span className="gradient-text">Generate More Revenue</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A complete AI-powered platform for modern sales and marketing teams</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Built for Every <span className="gradient-text">Revenue Team</span></h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {useCases.map((uc, i) => (
              <button key={uc.label} onClick={() => setActiveTab(i)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeTab === i ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                {uc.label}
              </button>
            ))}
          </div>
          <div className="card max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {useCases[activeTab].stats.map(s => (
                <div key={s} className="text-center">
                  <div className="text-xl font-bold gradient-text">{s.split(' ')[0]}</div>
                  <div className="text-xs text-gray-400">{s.split(' ').slice(1).join(' ')}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-300">{useCases[activeTab].desc}</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Loved by <span className="gradient-text">Sales Teams</span> Worldwide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <p className="text-gray-300 text-sm mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold">{t.initials}</div>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{faq.q}</h3>
                  <span className="text-indigo-400 ml-4">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && <p className="text-gray-400 text-sm mt-3">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to <span className="gradient-text">10x Your Pipeline?</span></h2>
          <p className="text-gray-400 mb-8">Join 10,000+ sales teams already using LeadFlowAI to close more deals.</p>
          <Link to="/get-started" className="btn-primary text-lg">Start Your Free Trial</Link>
          <p className="text-sm text-gray-500 mt-4">No credit card required · 14-day free trial · Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
