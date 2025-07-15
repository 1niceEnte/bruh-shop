import { Shield, Eye, Lock, Database } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-4'>
            <Shield className='h-12 w-12 text-blue-600 mr-4' />
            <h1 className='text-4xl font-bold text-gray-900'>
              Datenschutzerklärung
            </h1>
          </div>
          <p className='text-xl text-gray-600'>
            Ihr Datenschutz ist uns wichtig. Hier erfahren Sie alles über den
            Umgang mit Ihren Daten.
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            1. Verantwortliche Stelle
          </h2>
          <p className='text-gray-600 mb-4'>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <div className='bg-gray-50 p-4 rounded-lg'>
            <p className='text-gray-700'>
              <strong>Buffbolzen GmbH</strong>
              <br />
              Innovationsstraße 42
              <br />
              12345 Buffhausen
              <br />
              Deutschland
              <br />
              <br />
              Telefon: +49 (0) 123 456 789
              <br />
              E-Mail: datenschutz@buffbolzen.de
            </p>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <div className='flex items-center mb-6'>
            <Database className='h-8 w-8 text-blue-600 mr-3' />
            <h2 className='text-2xl font-bold text-gray-900'>
              2. Datenerfassung auf unserer Website
            </h2>
          </div>

          <h3 className='text-xl font-semibold text-gray-900 mb-4'>
            Welche Daten erfassen wir?
          </h3>
          <ul className='list-disc list-inside text-gray-600 space-y-2 mb-6'>
            <li>Bestelldaten (Name, Adresse, E-Mail, Telefon)</li>
            <li>Zahlungsinformationen (verschlüsselt übertragen)</li>
            <li>Website-Nutzungsdaten (IP-Adresse, Browser, Besuchszeit)</li>
            <li>Cookie-Daten für bessere Nutzererfahrung</li>
            <li>Produktbewertungen und Kommentare</li>
          </ul>

          <h3 className='text-xl font-semibold text-gray-900 mb-4'>
            Wofür nutzen wir Ihre Daten?
          </h3>
          <ul className='list-disc list-inside text-gray-600 space-y-2'>
            <li>Abwicklung Ihrer Bestellungen</li>
            <li>Kundenservice und Support</li>
            <li>Verbesserung unserer Website und Produkte</li>
            <li>Marketing-E-Mails (nur mit Ihrer Einwilligung)</li>
            <li>Rechtliche Verpflichtungen (Steuer, Buchführung)</li>
          </ul>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <div className='flex items-center mb-6'>
            <Lock className='h-8 w-8 text-green-600 mr-3' />
            <h2 className='text-2xl font-bold text-gray-900'>
              3. Datensicherheit
            </h2>
          </div>

          <p className='text-gray-600 mb-4'>
            Wir verwenden SSL-Verschlüsselung für alle sensiblen
            Datenübertragungen. Ihre Daten werden auf sicheren Servern in
            Deutschland gespeichert.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='border border-gray-200 rounded-lg p-4'>
              <h4 className='font-semibold text-gray-900 mb-2'>
                🔒 SSL-Verschlüsselung
              </h4>
              <p className='text-gray-600 text-sm'>
                Alle Daten werden verschlüsselt übertragen
              </p>
            </div>
            <div className='border border-gray-200 rounded-lg p-4'>
              <h4 className='font-semibold text-gray-900 mb-2'>
                🛡️ Sichere Server
              </h4>
              <p className='text-gray-600 text-sm'>
                Hosting in zertifizierten deutschen Rechenzentren
              </p>
            </div>
            <div className='border border-gray-200 rounded-lg p-4'>
              <h4 className='font-semibold text-gray-900 mb-2'>
                🔐 Zugriffskontrolle
              </h4>
              <p className='text-gray-600 text-sm'>
                Strenge Zugriffsbeschränkungen für Mitarbeiter
              </p>
            </div>
            <div className='border border-gray-200 rounded-lg p-4'>
              <h4 className='font-semibold text-gray-900 mb-2'>
                📋 Regelmäßige Audits
              </h4>
              <p className='text-gray-600 text-sm'>
                Kontinuierliche Sicherheitsüberprüfungen
              </p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <div className='flex items-center mb-6'>
            <Eye className='h-8 w-8 text-purple-600 mr-3' />
            <h2 className='text-2xl font-bold text-gray-900'>4. Ihre Rechte</h2>
          </div>

          <p className='text-gray-600 mb-4'>
            Sie haben jederzeit das Recht auf:
          </p>

          <div className='space-y-4'>
            <div className='flex items-start space-x-3'>
              <div className='bg-blue-100 rounded-full p-2'>
                <span className='text-blue-600 font-bold text-sm'>ℹ️</span>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900'>Auskunft</h4>
                <p className='text-gray-600 text-sm'>
                  Erfahren Sie, welche Daten wir über Sie speichern
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-3'>
              <div className='bg-green-100 rounded-full p-2'>
                <span className='text-green-600 font-bold text-sm'>✏️</span>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900'>Berichtigung</h4>
                <p className='text-gray-600 text-sm'>
                  Korrektur falscher oder unvollständiger Daten
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-3'>
              <div className='bg-red-100 rounded-full p-2'>
                <span className='text-red-600 font-bold text-sm'>🗑️</span>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900'>Löschung</h4>
                <p className='text-gray-600 text-sm'>
                  Löschung Ihrer Daten, soweit rechtlich möglich
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-3'>
              <div className='bg-yellow-100 rounded-full p-2'>
                <span className='text-yellow-600 font-bold text-sm'>📦</span>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900'>
                  Datenübertragbarkeit
                </h4>
                <p className='text-gray-600 text-sm'>
                  Export Ihrer Daten in einem gängigen Format
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-3'>
              <div className='bg-purple-100 rounded-full p-2'>
                <span className='text-purple-600 font-bold text-sm'>❌</span>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900'>Widerspruch</h4>
                <p className='text-gray-600 text-sm'>
                  Widerspruch gegen die Datenverarbeitung
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>5. Cookies</h2>
          <p className='text-gray-600 mb-4'>
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf
            unserer Website zu bieten:
          </p>

          <div className='space-y-4'>
            <div>
              <h4 className='font-semibold text-gray-900'>
                Notwendige Cookies
              </h4>
              <p className='text-gray-600 text-sm'>
                Erforderlich für den Betrieb der Website (Warenkorb, Login)
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-gray-900'>
                Funktionale Cookies
              </h4>
              <p className='text-gray-600 text-sm'>
                Speichern Ihre Präferenzen (Sprache, Währung)
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-gray-900'>Analyse-Cookies</h4>
              <p className='text-gray-600 text-sm'>
                Helfen uns, die Website zu verbessern (nur mit Einwilligung)
              </p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            6. Besondere Hinweise für Buffbolzen-Produkte
          </h2>
          <p className='text-gray-600 mb-4'>
            Aufgrund der Einzigartigkeit unserer Produkte gelten besondere
            Datenschutzbestimmungen:
          </p>

          <ul className='list-disc list-inside text-gray-600 space-y-2'>
            <li>Fluxkompensator-Käufe werden zeitversetzt protokolliert</li>
            <li>
              Obamium- und Trumpium-Bestellungen unterliegen erhöhtem
              Datenschutz
            </li>
            <li>LSD-Nüsse-Käufer erhalten diskrete Bestätigungen</li>
            <li>
              180° Winkel-Nutzer müssen Winkelführerschein-Daten hinterlegen
            </li>
            <li>
              Gold Laptop-Bitcoin-Erträge werden nicht an Steuerbehörden
              gemeldet*
            </li>
          </ul>
          <p className='text-gray-500 text-xs mt-2'>
            *Scherz - alle Erträge sind ordnungsgemäß zu versteuern
          </p>
        </div>

        <div className='bg-blue-50 border-l-4 border-blue-600 p-6 mb-8'>
          <h2 className='text-xl font-bold text-blue-900 mb-4'>
            Kontakt bei Datenschutzfragen
          </h2>
          <p className='text-blue-800 mb-2'>
            Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte
            kontaktieren Sie uns:
          </p>
          <p className='text-blue-800'>
            E-Mail: datenschutz@buffbolzen.de
            <br />
            Telefon: +49 (0) 123 456 789
            <br />
            Post: Buffbolzen GmbH, Datenschutzbeauftragter, Innovationsstraße
            42, 12345 Buffhausen
          </p>
        </div>

        <div className='text-center'>
          <p className='text-gray-500 text-sm'>
            Stand: Dezember 2024 | Diese Datenschutzerklärung kann jederzeit
            aktualisiert werden.
          </p>
        </div>
      </div>
    </div>
  )
}
