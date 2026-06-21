export default function Impressum() {
  return (
    <div className="min-h-screen bg-black/95 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Impressum</h1>
          <p className="text-gray-400">Angaben gemäß § 5 TMG (Telemediengesetz)</p>
        </div>

        {/* Main content */}
        <div className="space-y-12">
          {/* Anbieter */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/20 pb-2">
              Anbieter
            </h2>
            <div className="text-gray-400 space-y-2">
              <p><strong className="text-white">LeadFlowAI</strong></p>
              <p>Musterstraße 1<br />12345 Berlin<br />Deutschland</p>
              <p className="mt-4">
                <strong className="text-white">Kontakt</strong><br />
                E-Mail: <a href="mailto:kontakt@leadflowai.de" className="text-purple-400 hover:text-purple-300 transition-colors">kontakt@leadflowai.de</a><br />
                Telefon: auf Anfrage
              </p>
            </div>
          </section>

          {/* Verantwortlich */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/20 pb-2">
              Verantwortlich für den Inhalt
            </h2>
            <p className="text-gray-400">
              Verantwortlich für den Inhalt dieser Website nach § 55 Abs. 2 RStV (Rundfunkstaatsvertrag):
            </p>
            <p className="text-gray-400 mt-4">
              <strong className="text-white">LeadFlowAI</strong><br />
              Musterstraße 1<br />
              12345 Berlin<br />
              Deutschland
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/20 pb-2">
              Haftungsausschluss
            </h2>
            
            <div className="space-y-6 text-gray-400">
              <div>
                <h3 className="text-white font-semibold mb-2">Haftung für Inhalte</h3>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 des TMG sind wir als 
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                  Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von 
                  Informationen bleiben hiervon unberührt.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Haftung für Links</h3>
                <p>
                  Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                  Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
                  Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. 
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                  einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                  Links umgehend entfernen.
                </p>
              </div>
            </div>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/20 pb-2">
              Urheberrecht
            </h2>
            <p className="text-gray-400">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
              außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder 
              Urhebers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

          {/* KI-Hinweis */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/20 pb-2">
              Künstliche Intelligenz
            </h2>
            <p className="text-gray-400">
              Diese Website verwendet künstliche Intelligenz und KI-generierte Inhalte zur Unterstützung unserer 
              Services und Produktbeschreibungen. KI-generierte oder KI-unterstützte Inhalte sind entsprechend gekennzeichnet. 
              Alle Informationen werden von unserem Team überprüft, bevor sie veröffentlicht werden.
            </p>
          </section>

          {/* Datenschutz */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/20 pb-2">
              Datenschutz
            </h2>
            <p className="text-gray-400">
              Informationen zum Datenschutz finden Sie in unserer <a href="/datenschutz" className="text-purple-400 hover:text-purple-300 transition-colors">Datenschutzerklärung</a>.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>Impressum - LeadFlowAI</p>
          <p className="mt-2">Letzte Aktualisierung: Juni 2026</p>
        </div>
      </div>
    </div>
  )
}
