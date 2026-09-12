import { useState } from 'react'

// Shared social sign-in buttons used by Login and GetStarted.
// NOTE: Demo mode — no backend/OAuth server yet, so sign-in is simulated
// locally and reported back via onSuccess(provider).
const PROVIDERS = [
  {
    id: 'google',
    label: 'Google',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.24 10.28v3.72h6.14c-.26 1.57-1.72 4.6-6.14 4.6-3.7 0-6.72-3.07-6.72-6.86S8.54 4.9 12.24 4.9c2.1 0 3.5.9 4.3 1.66l2.94-2.83C18.06 2.35 15.53 1.3 12.24 1.3 6.64 1.3 2.1 5.84 2.1 11.74s4.54 10.44 10.14 10.44c5.86 0 9.74-4.12 9.74-9.92 0-.67-.07-1.17-.16-1.68l-9.58.7z" transform="translate(0 .26)" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    id: 'github',
    label: 'GitHub',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .3a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.92 1.23 3.23 0 4.62-2.8 5.65-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .3z" />
      </svg>
    ),
  },
  {
    id: 'microsoft',
    label: 'Microsoft',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 23 23" fill="currentColor">
        <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
      </svg>
    ),
  },
]

export default function OAuthButtons({ onSuccess, columns = 2 }) {
  const [busy, setBusy] = useState(null)

  const handleClick = id => {
    if (busy) return
    setBusy(id)
    // Simulated OAuth handshake — replace with a real redirect
    // to an OAuth provider/your backend when it exists.
    setTimeout(() => {
      setBusy(null)
      onSuccess && onSuccess(PROVIDERS.find(p => p.id === id))
    }, 1200)
  }

  return (
    <div className={columns === 2 ? 'grid grid-cols-2 gap-3' : 'grid grid-cols-1 gap-3'}>
      {PROVIDERS.map(p => (
        <button
          key={p.id}
          type="button"
          disabled={!!busy}
          onClick={() => handleClick(p.id)}
          className="btn-secondary py-2 text-sm flex items-center justify-center gap-2 w-full"
          style={{ opacity: busy && busy !== p.id ? 0.5 : 1 }}
        >
          {busy === p.id ? (
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          ) : p.svg}
          {busy === p.id ? 'Connecting…' : `Continue with ${p.label}`}
        </button>
      ))}
    </div>
  )
}
