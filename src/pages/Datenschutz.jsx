import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Datenschutz() {
  const [expandedSection, setExpandedSection] = useState(0)

  const sections = [
    {
      num: '1',
      title: 'Verantwortlicher',
      content: `LeadFlowAI ist für die Verarbeitung Ihrer personenbezogenen Daten verantwortlich. Sie können uns wie folgt kontaktieren:

LeadFlowAI GmbH
E-Mail: privacy@leadflowai.com
Adresse: [Unternehmensadresse]

Wenn Sie Fragen zu Ihrer Datenschutzbehandlung oder zu Ihren Rechten haben, wenden Sie sich bitte an unseren Datenschutzbeauftragten.`,
    },
    {
      num: '2',
      title: 'Arten der Verarbeiteten Daten',
      content: `LeadFlowAI verarbeitet die folgenden Kategorien personenbezogener Daten:

• E-Mail-Adressen und Kontaktinformationen
• Berufliche Informationen (Jobtitel, Unternehmen, Branche)
• Geschäftliche Kommunikationsdaten
• Nutzungsdaten und Logs
• IP-Adressen und Browser-Informationen
• Zahlungsinformationen (wenn zutreffend)

Diese Daten werden verwendet, um Lead-Generierungsservices bereitzustellen, Ihre Nutzung zu verbessern und gesetzliche Anforderungen zu erfüllen.`,
    },
    {
      num: '3',
      title: 'Google OAuth Authentifizierung',
      content: `LeadFlowAI nutzt Google OAuth für sichere Authentifizierung. Wenn Sie sich über Google anmelden:

• Google teilt mit uns Ihre E-Mail-Adresse und grundlegende Profilinformationen
• Wir speichern diese Daten ausschließlich zur Kontoverification
• Sie können jederzeit den Zugriff über Ihr Google-Konto widerrufen
• Wir geben Ihre Google-Daten nicht an Dritte weiter
• Googles Datenschutzerklärung gilt zusätzlich

Weitere Informationen: https://policies.google.com/privacy`,
    },
    {
      num: '4',
      title: 'KI-Verarbeitung und Lead-Generierung',
      content: `LeadFlowAI nutzt Künstliche Intelligenz zur Verarbeitung von Kontaktdaten:

• Unsere KI-Systeme analysieren öffentlich verfügbare Informationen
• Daten werden verwendet, um Ihre Idealkundenprofil zu identifizieren
• Automatisierte Entscheidungen werden getroffen basierend auf Lead-Scoring-Algorithmen
• Sie haben das Recht, automatisierte Entscheidungen anzufechten
• Regelmäßige Audits gewährleisten Fairness und Genauigkeit

Die Verarbeitung erfolgt auf Basis Ihrer expliziten Zustimmung und ist notwendig zur Erfüllung unserer Vertragsverpflichtungen.`,
    },
    {
      num: '5',
      title: 'Ihre Rechte nach der DSGVO',
      content: `Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:

• Recht auf Zugang: Sie können eine Kopie Ihrer Daten anfordern
• Recht auf Berichtigung: Sie können falsche Daten korrigieren lassen
• Recht auf Löschung (Recht auf Vergessenwerden)
• Recht auf Einschränkung der Verarbeitung
• Recht auf Datenportabilität
• Recht auf Widerspruch gegen die Verarbeitung
• Recht auf Widerruf Ihrer Einwilligung

Um diese Rechte auszuüben, kontaktieren Sie uns unter privacy@leadflowai.com. Wir werden innerhalb von 30 Tagen antworten.`,
    },
    {
      num: '6',
      title: 'Datensicherheit und Speicherdauer',
      content: `Ihre Daten werden mit modernen Sicherheitsmaßnahmen geschützt:

• Verschlüsslung in Transit (TLS/SSL) und im Ruhezustand
• Regelmäßige Sicherheitsaudits und Penetrationstests
• Beschränkter Zugriff auf Daten durch autorisierte Mitarbeiter
• Sicherheitsschulungen für unser Team

Speicherdauer:
• Kontodaten werden für die Dauer Ihrer Nutzung gespeichert
• Nach Kontolöschung werden Daten innerhalb von 90 Tagen gelöscht
• Backup-Daten können bis zu 12 Monate aufbewahrt werden
• Rechtlich erforderliche Daten werden länger aufbewahrt`,
    },
    {
      num: '7',
      title: 'Weitergabe an Dritte',
      content: `LeadFlowAI teilt Ihre Daten nur unter bestimmten Bedingungen:

Dienstanbieter:
• Hosting-Provider (Infrastruktur und Speicher)
• Analytics-Anbieter (Nutzungsmuster verstehen)
• CRM-Integrationen (nur wenn Sie diese aktivieren)

Rechtliche Anforderungen:
• Wir können Daten offenbaren, wenn gesetzlich erforderlich
• Bei Rechtsverfahren oder behördlichen Anforderungen
• Zur Wahrung unserer Rechte oder zum Schutz der Sicherheit

Internationale Transfers:
• Einige Dienstanbieter sind außerhalb der EU ansässig
• Wir verwenden Standarddatenschutzklauseln und andere Mechanismen
• Transfer erfolgt nur in Länder mit angemessenem Schutz`,
    },
    {
      num: '8',
      title: 'Cookies und Tracking-Technologien',
      content: `LeadFlowAI nutzt Cookies zur Verbesserung Ihres Erlebnisses:

Notwendige Cookies:
• Sitzungsverwaltung und Authentifizierung
• Sicherheit und Betrugserkennung

Funktionales und Performance Cookies:
• Benutzerpräferenzen merken
• Leistung und Nutzung analysieren
• Fehler erkennen und beheben

Marketing Cookies:
• Kampagnen-Tracking
• Interessenbasierte Werbung

Sie können Cookies in Ihren Browser-Einstellungen verwalten. Das Deaktivieren von Cookies kann die Funktionalität einschränken.`,
    },
    {
      num: '9',
      title: 'Datenschutzverletzungen und Meldung',
      content: `Falls eine Datenschutzverletzung eintritt:

Unser Vorgehen:
• Wir untersuchen die Verletzung sofort
• Bei Risiko für Ihre Rechte werden Sie innerhalb von 72 Stunden benachrichtigt
• Wir werden Empfehlungen zur Risikominderung geben
• Wir melden größere Verletzungen an die Aufsichtsbehörde

Ihre Kontaktinformationen:
• E-Mail: security@leadflowai.com
• Wir verpflichten uns zur transparenten Kommunikation`,
    },
    {
      num: '10',
      title: 'Kontakt und Beschwerde',
      content: `Für Datenschutzfragen oder Beschwerden:

Datenschutzbeauftragter:
E-Mail: privacy@leadflowai.com

Sie haben auch das Recht, eine Beschwerde bei der zuständigen Datenschutzbehörde einzureichen:

Deutschland: Bundesdatenschutzbeauftragte (BfDI)
https://www.bfdi.bund.de

Oder Ihre lokale Datenschutzbehörde in Ihrem Bundesland.

Wir werden alle Anfragen gewissenhaft bearbeiten und zeitnah antworten.`,
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            DSGVO-konforme Datenschutzrichtlinie für LeadFlowAI
          </p>
          <p className="text-sm text-gray-500">
            Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {sections.map((section, idx) => (
              <div
                key={section.num}
                className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <button
                  onClick={() => setExpandedSection(expandedSection === idx ? -1 : idx)}
                  className="w-full flex items-center gap-4 p-6 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white">
                    {section.num}
                  </div>
                  <h3 className="text-lg font-semibold text-white flex-1 text-left">
                    {section.title}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      expandedSection === idx ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {expandedSection === idx && (
                  <div className="px-6 pb-6 border-t border-white/5">
                    <p className="text-gray-300 whitespace-pre-line leading-relaxed mt-4">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Kontakt zu unserem Datenschutzteam</h3>
            <p className="text-gray-400">
              Wenn Sie Fragen zu dieser Datenschutzerklärung oder Ihren Rechten haben, kontaktieren Sie uns unter{' '}
              <a href="mailto:privacy@leadflowai.com" className="text-indigo-400 hover:text-indigo-300 font-medium">
                privacy@leadflowai.com
              </a>
            </p>
          </div>

          {/* Return to Home */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
