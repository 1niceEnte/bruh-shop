import { Cookie, Settings, Eye, Shield } from 'lucide-react'

export default function CookiesPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-4'>
            <Cookie className='h-12 w-12 text-orange-600 mr-4' />
            <h1 className='text-4xl font-bold text-gray-900'>
              Cookie-Richtlinie
            </h1>
          </div>
          <p className='text-xl text-gray-600'>
            Informationen über die Verwendung von Cookies auf unserer Website
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Was sind Cookies?
          </h2>
          <p className='text-gray-600 mb-4'>
            Cookies sind kleine Textdateien, die von Ihrem Webbrowser auf Ihrem
            Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie helfen
            uns dabei, Ihnen ein besseres Einkaufserlebnis zu bieten und unsere
            Website zu verbessern.
          </p>

          <div className='bg-blue-50 border-l-4 border-blue-600 p-4'>
            <h3 className='font-semibold text-blue-900 mb-2'>
              🍪 Hinweis zu Buffbolzen-Cookies
            </h3>
            <p className='text-blue-800 text-sm'>
              Unsere Cookies sind genauso einzigartig wie unsere Produkte - sie
              können Zeitreise-Informationen speichern und sind zu 100%
              glutenfrei (außer sie enthalten Gluten).
            </p>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <div className='flex items-center mb-6'>
            <Settings className='h-8 w-8 text-blue-600 mr-3' />
            <h2 className='text-2xl font-bold text-gray-900'>
              Arten von Cookies
            </h2>
          </div>

          <div className='space-y-6'>
            <div className='border border-gray-200 rounded-lg p-6'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-100 rounded-full p-2 mr-3'>
                  <span className='text-green-600 font-bold'>✓</span>
                </div>
                <h3 className='text-lg font-bold text-gray-900'>
                  Notwendige Cookies
                </h3>
                <span className='ml-auto bg-green-100 text-green-800 px-2 py-1 rounded text-sm'>
                  Immer aktiv
                </span>
              </div>
              <p className='text-gray-600 mb-3'>
                Diese Cookies sind für den Betrieb unserer Website unerlässlich
                und können nicht deaktiviert werden.
              </p>
              <div className='text-sm text-gray-500'>
                <strong>Verwendung:</strong> Warenkorb, Login-Status,
                Sicherheitseinstellungen, Fluxkompensator-Kalibrierung
              </div>
            </div>

            <div className='border border-gray-200 rounded-lg p-6'>
              <div className='flex items-center mb-3'>
                <div className='bg-blue-100 rounded-full p-2 mr-3'>
                  <span className='text-blue-600 font-bold'>⚙️</span>
                </div>
                <h3 className='text-lg font-bold text-gray-900'>
                  Funktionale Cookies
                </h3>
                <span className='ml-auto bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>
                  Optional
                </span>
              </div>
              <p className='text-gray-600 mb-3'>
                Diese Cookies ermöglichen erweiterte Funktionalitäten und
                Personalisierung.
              </p>
              <div className='text-sm text-gray-500'>
                <strong>Verwendung:</strong> Spracheinstellungen, Währung,
                Wishlist, 180° Winkel-Präferenzen
              </div>
            </div>

            <div className='border border-gray-200 rounded-lg p-6'>
              <div className='flex items-center mb-3'>
                <div className='bg-purple-100 rounded-full p-2 mr-3'>
                  <span className='text-purple-600 font-bold'>📊</span>
                </div>
                <h3 className='text-lg font-bold text-gray-900'>
                  Analyse-Cookies
                </h3>
                <span className='ml-auto bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm'>
                  Optional
                </span>
              </div>
              <p className='text-gray-600 mb-3'>
                Diese Cookies helfen uns zu verstehen, wie Besucher unsere
                Website nutzen.
              </p>
              <div className='text-sm text-gray-500'>
                <strong>Verwendung:</strong> Google Analytics,
                Besucherstatistiken, LSD-Nüsse-Klickverhalten
              </div>
            </div>

            <div className='border border-gray-200 rounded-lg p-6'>
              <div className='flex items-center mb-3'>
                <div className='bg-orange-100 rounded-full p-2 mr-3'>
                  <span className='text-orange-600 font-bold'>🎯</span>
                </div>
                <h3 className='text-lg font-bold text-gray-900'>
                  Marketing-Cookies
                </h3>
                <span className='ml-auto bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm'>
                  Optional
                </span>
              </div>
              <p className='text-gray-600 mb-3'>
                Diese Cookies werden verwendet, um Ihnen relevante Werbung zu
                zeigen.
              </p>
              <div className='text-sm text-gray-500'>
                <strong>Verwendung:</strong> Personalisierte Anzeigen,
                Retargeting, Trumpium-Werbung
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Konkrete Cookie-Details
          </h2>

          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Cookie-Name
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Zweck
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Laufzeit
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Typ
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    buffbolzen_session
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Session-Management
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Session
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Notwendig
                  </td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    cart_items
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Warenkorb-Inhalt
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    7 Tage
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Notwendig
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    language_pref
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Spracheinstellung
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    1 Jahr
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Funktional
                  </td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    _ga
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Google Analytics
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    2 Jahre
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Analyse
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    flux_calibration
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Fluxkompensator-Setup
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    88 Jahre
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Notwendig
                  </td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    angle_license
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Winkelführerschein-Status
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Lebenslang
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Funktional
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <div className='flex items-center mb-6'>
            <Eye className='h-8 w-8 text-purple-600 mr-3' />
            <h2 className='text-2xl font-bold text-gray-900'>
              Cookie-Einstellungen verwalten
            </h2>
          </div>

          <div className='space-y-4 mb-6'>
            <p className='text-gray-600'>
              Sie können Ihre Cookie-Einstellungen jederzeit anpassen. Beachten
              Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität
              unserer Website beeinträchtigen kann.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='border border-gray-200 rounded-lg p-4'>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  🌐 Browser-Einstellungen
                </h3>
                <p className='text-gray-600 text-sm'>
                  Verwalten Sie Cookies direkt in Ihren Browser-Einstellungen
                </p>
              </div>
              <div className='border border-gray-200 rounded-lg p-4'>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  ⚙️ Cookie-Banner
                </h3>
                <p className='text-gray-600 text-sm'>
                  Nutzen Sie unseren Cookie-Banner bei Ihrem nächsten Besuch
                </p>
              </div>
            </div>
          </div>

          <div className='bg-orange-50 border border-orange-200 rounded-lg p-4'>
            <h4 className='font-semibold text-orange-800 mb-2'>
              ⚠️ Auswirkungen bei Deaktivierung
            </h4>
            <ul className='text-orange-700 text-sm space-y-1'>
              <li>• Warenkorb funktioniert möglicherweise nicht korrekt</li>
              <li>• Spracheinstellungen gehen verloren</li>
              <li>• Fluxkompensator benötigt Neukalibrierung</li>
              <li>• 180° Winkel-Präferenzen werden nicht gespeichert</li>
              <li>• LSD-Nüsse-Empfehlungen werden ungenauer</li>
            </ul>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <div className='flex items-center mb-6'>
            <Shield className='h-8 w-8 text-green-600 mr-3' />
            <h2 className='text-2xl font-bold text-gray-900'>Ihre Rechte</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h3 className='font-semibold text-gray-900 mb-3'>
                Einwilligung widerrufen
              </h3>
              <p className='text-gray-600 text-sm mb-3'>
                Sie können Ihre Einwilligung zur Verwendung von Cookies
                jederzeit widerrufen.
              </p>
              <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm'>
                Cookie-Einstellungen öffnen
              </button>
            </div>

            <div>
              <h3 className='font-semibold text-gray-900 mb-3'>
                Alle Cookies löschen
              </h3>
              <p className='text-gray-600 text-sm mb-3'>
                Löschen Sie alle gespeicherten Cookies von unserer Website.
              </p>
              <button className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm'>
                Alle Cookies löschen
              </button>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Drittanbieter-Cookies
          </h2>

          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Google Analytics
              </h3>
              <p className='text-gray-600 text-sm mb-2'>
                Wir verwenden Google Analytics zur Analyse der Website-Nutzung.
              </p>
              <a
                href='https://policies.google.com/privacy'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 underline text-sm'
              >
                Google Datenschutzerklärung
              </a>
            </div>

            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>PayPal</h3>
              <p className='text-gray-600 text-sm mb-2'>
                PayPal setzt Cookies für die Zahlungsabwicklung.
              </p>
              <a
                href='https://www.paypal.com/privacy'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 underline text-sm'
              >
                PayPal Datenschutzerklärung
              </a>
            </div>

            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Temporal Flux Networks
              </h3>
              <p className='text-gray-600 text-sm mb-2'>
                Für Zeitreise-bezogene Funktionen unserer Fluxkompensatoren.
              </p>
              <span className='text-gray-400 text-sm'>
                Datenschutzerklärung erst ab 2055 verfügbar
              </span>
            </div>
          </div>
        </div>

        <div className='bg-blue-50 border-l-4 border-blue-600 p-6'>
          <h2 className='text-xl font-bold text-blue-900 mb-4'>
            Fragen zu Cookies?
          </h2>
          <p className='text-blue-800 mb-2'>
            Haben Sie Fragen zu unserer Cookie-Verwendung? Kontaktieren Sie uns:
          </p>
          <p className='text-blue-800'>
            E-Mail: cookies@buffbolzen.de
            <br />
            Telefon: +49 (0) 123 456 789
            <br />
            Post: Buffbolzen GmbH, Cookie-Abteilung, Innovationsstraße 42, 12345
            Buffhausen
          </p>
        </div>

        <div className='text-center mt-8'>
          <p className='text-gray-500 text-sm'>
            Stand: Dezember 2024 | Diese Cookie-Richtlinie kann jederzeit
            aktualisiert werden.
          </p>
        </div>
      </div>
    </div>
  )
}
