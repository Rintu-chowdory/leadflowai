const integrations = [
  { name: 'Salesforce', icon: '☁️', desc: 'Sync leads, contacts, and opportunities bidirectionally.', category: 'CRM' },
  { name: 'HubSpot', icon: '🟠', desc: 'Automatic lead import, deal creation, and pipeline sync.', category: 'CRM' },
  { name: 'Pipedrive', icon: '🔵', desc: 'Push qualified leads directly into your sales pipeline.', category: 'CRM' },
  { name: 'Zoho CRM', icon: '🟣', desc: 'Full bidirectional sync with Zoho CRM and modules.', category: 'CRM' },
  { name: 'Slack', icon: '💬', desc: 'Get real-time alerts when hot leads engage.', category: 'Communication' },
  { name: 'Gmail', icon: '📧', desc: 'Send personalized outreach directly from Gmail.', category: 'Email' },
  { name: 'Zapier', icon: '⚡', desc: 'Connect with 5,000+ apps through automated workflows.', category: 'Automation' },
  { name: 'LinkedIn', icon: '💼', desc: 'Find and connect with prospects on LinkedIn automatically.', category: 'Social' },
  { name: 'Outlook', icon: '📨', desc: 'Sync emails and calendar events with Microsoft Outlook.', category: 'Email' },
  { name: 'Intercom', icon: '🟢', desc: 'Trigger personalized messages based on lead behavior.', category: 'Support' },
]

export default function CRMIntegrations() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">CRM & Tool <span className="gradient-text">Integrations</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto">Connect LeadFlowAI with your existing tools and CRMs for a seamless workflow</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integ) => (
            <div key={integ.name} className="card flex gap-4">
              <div className="text-3xl flex-shrink-0">{integ.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{integ.name}</h3>
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-gray-400">{integ.category}</span>
                </div>
                <p className="text-gray-400 text-sm">{integ.desc}</p>
                <button className="text-indigo-400 text-sm mt-2 hover:text-indigo-300">Connect →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
