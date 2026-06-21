import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-3">LeadFlowAI</h3>
            <p className="text-gray-400 text-sm">AI-powered lead generation for modern sales teams.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-300">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/ai-lead-finder" className="hover:text-white transition-colors">AI Lead Finder</Link></li>
              <li><Link to="/crm-integrations" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-300">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-300">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          © 2024 LeadFlowAI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
