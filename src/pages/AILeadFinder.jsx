import { useState } from 'react'

const mockLeads = [
  { name: 'John Smith', title: 'VP of Sales', company: 'TechCorp Inc.', email: 'j.smith@techcorp.com', score: 92, status: 'Hot' },
  { name: 'Sarah Johnson', title: 'Head of Marketing', company: 'GrowthCo', email: 's.johnson@growthco.com', score: 78, status: 'Warm' },
  { name: 'Michael Chen', title: 'CTO', company: 'StartupXYZ', email: 'm.chen@startupxyz.com', score: 65, status: 'Warm' },
  { name: 'Emily Davis', title: 'CEO', company: 'ScaleUp Ltd', email: 'e.davis@scaleup.com', score: 88, status: 'Hot' },
  { name: 'Robert Wilson', title: 'Sales Director', company: 'Enterprise Solutions', email: 'r.wilson@entsol.com', score: 45, status: 'Cold' },
  { name: 'Amanda Foster', title: 'Growth Manager', company: 'VentureHQ', email: 'a.foster@venturehq.com', score: 71, status: 'Warm' },
]

export default function AILeadFinder() {
  const [industry, setIndustry] = useState('')
  const [region, setRegion] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [searched, setSearched] = useState(false)

  const statusColors = {
    Hot: 'bg-red-500/20 text-red-400',
    Warm: 'bg-yellow-500/20 text-yellow-400',
    Cold: 'bg-blue-500/20 text-blue-400'
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI <span className="gradient-text">Lead Finder</span></h1>
          <p className="text-gray-400">Discover high-quality leads matching your ideal customer profile</p>
        </div>

        <div className="card max-w-3xl mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Industry</label>
              <select value={industry} onChange={e => setIndustry(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 text-white">
                <option value="" className="bg-gray-900">All Industries</option>
                <option className="bg-gray-900">SaaS / Software</option>
                <option className="bg-gray-900">Marketing Agency</option>
                <option className="bg-gray-900">E-commerce</option>
                <option className="bg-gray-900">Finance</option>
                <option className="bg-gray-900">Healthcare</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Region</label>
              <select value={region} onChange={e => setRegion(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 text-white">
                <option value="" className="bg-gray-900">All Regions</option>
                <option className="bg-gray-900">North America</option>
                <option className="bg-gray-900">Europe</option>
                <option className="bg-gray-900">Asia Pacific</option>
                <option className="bg-gray-900">Latin America</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Job Title</label>
              <input value={jobTitle} onChange={e => setJobTitle(e.target.value)}
                placeholder="e.g. VP of Sales"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 text-white placeholder-gray-500" />
            </div>
          </div>
          <button onClick={() => setSearched(true)} className="btn-primary w-full text-center">
            🔍 Find Leads with AI
          </button>
        </div>

        {searched && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-400 text-sm">{mockLeads.length} leads found</p>
              <button className="btn-secondary text-sm py-2 px-4">Export CSV</button>
            </div>
            <div className="card overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    {['Name', 'Title', 'Company', 'Email', 'Score', 'Status', 'Action'].map(h => (
                      <th key={h} className="text-left py-3 px-4 text-gray-400 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mockLeads.map((lead) => (
                    <tr key={lead.email} className="border-b border-white/5 hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-medium">{lead.name}</td>
                      <td className="py-3 px-4 text-gray-400">{lead.title}</td>
                      <td className="py-3 px-4 text-gray-400">{lead.company}</td>
                      <td className="py-3 px-4 text-gray-400">{lead.email}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-white/10 rounded-full">
                            <div className="h-1.5 rounded-full bg-indigo-500" style={{ width: `${lead.score}%` }} />
                          </div>
                          <span>{lead.score}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${statusColors[lead.status]}`}>{lead.status}</span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-indigo-400 hover:text-indigo-300 text-xs">Contact →</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
