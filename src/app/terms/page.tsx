import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-4'>
            <Scale className='h-12 w-12 text-blue-600 mr-4' />
            <h1 className='text-4xl font-bold text-gray-900'>
              Allgemeine Geschäftsbedingungen
            </h1>
          </div>
          <p className='text-xl text-gray-600'>
            Die Nutzungsbedingungen für den Buffbolzen Online-Shop
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            § 1 Geltungsbereich
          </h2>
          <p className='text-gray-600 mb-4'>
            Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") der
            Buffbolzen GmbH gelten für alle Bestellungen über unseren
            Online-Shop. Abweichende Bedingungen des Kunden werden nicht
            anerkannt, es sei denn, wir stimmen ausdrücklich zu.
          </p>
          <div className='bg-blue-50 border-l-4 border-blue-600 p-4'>
            <p className='text-blue-800 text-sm'>
              <strong>Besonderheit:</strong> Für den Kauf von
              Zeitreise-Produkten (Fluxkompensator) gelten zusätzlich die
              Bestimmungen der Temporalen Handelsverordnung von 2055.
            </p>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <div className='flex items-center mb-6'>
            <FileText className='h-8 w-8 text-green-600 mr-3' />
            <h2 className='text-2xl font-bold text-gray-900'>
              § 2 Vertragsschluss
            </h2>
          </div>

          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Bestellvorgang
              </h3>
              <ol className='list-decimal list-inside text-gray-600 space-y-1'>
                <li>Auswahl der Produkte und Hinzufügen zum Warenkorb</li>
                <li>Eingabe der Liefer- und Rechnungsdaten</li>
                <li>Auswahl der Zahlungsart</li>
                <li>Überprüfung und Bestätigung der Bestellung</li>
                <li>Automatische Bestätigungsmail</li>
              </ol>
            </div>

            <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4'>
              <div className='flex items-start space-x-3'>
                <AlertTriangle className='h-5 w-5 text-yellow-600 mt-1' />
                <div>
                  <h4 className='font-semibold text-yellow-800'>
                    Wichtiger Hinweis
                  </h4>
                  <p className='text-yellow-700 text-sm'>
                    Der Vertrag kommt erst mit unserer Auftragsbestätigung
                    zustande, nicht bereits mit der Bestellung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            § 3 Preise und Zahlung
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Preise
              </h3>
              <ul className='text-gray-600 space-y-2'>
                <li>• Alle Preise inkl. gesetzlicher MwSt.</li>
                <li>• Versandkosten werden separat ausgewiesen</li>
                <li>• Preise können sich ohne Vorankündigung ändern</li>
                <li>• Materialpreise (Obamium/Trumpium) schwanken täglich</li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Zahlungsarten
              </h3>
              <ul className='text-gray-600 space-y-2'>
                <li>• Kreditkarte (Visa, Mastercard)</li>
                <li>• PayPal</li>
                <li>• SEPA-Lastschrift</li>
                <li>• Kauf auf Rechnung (nach Bonitätsprüfung)</li>
                <li>• Bitcoin (nur für Gold Laptop)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            § 4 Lieferung und Versand
          </h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Lieferzeiten
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Standard-Artikel
                  </h4>
                  <p className='text-gray-600 text-sm'>2-3 Werktage</p>
                </div>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Spezial-Artikel
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Siehe Produktbeschreibung
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <h4 className='font-semibold text-red-800 mb-2'>
                Besondere Lieferbedingungen
              </h4>
              <ul className='text-red-700 text-sm space-y-1'>
                <li>
                  • Kreissägenbagger: Schwertransport erforderlich, 2-3 Wochen
                </li>
                <li>• Fluxkompensator: Lieferung erfolgt zeitversetzt</li>
                <li>
                  • 180° Winkel: Nur an Personen mit gültigem Winkelführerschein
                </li>
                <li>
                  • LSD-Nüsse: Diskrete Verpackung, Identitätsprüfung
                  erforderlich
                </li>
                <li>
                  • Obamium/Trumpium: Strahlenschutzverpackung, Gefahrgutversand
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            § 5 Widerrufsrecht
          </h2>

          <div className='space-y-4'>
            <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
              <div className='flex items-start space-x-3'>
                <CheckCircle className='h-5 w-5 text-green-600 mt-1' />
                <div>
                  <h4 className='font-semibold text-green-800 mb-2'>
                    14 Tage Widerrufsrecht
                  </h4>
                  <p className='text-green-700 text-sm'>
                    Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von
                    Gründen diesen Vertrag zu widerrufen.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Ausgeschlossen vom Widerrufsrecht sind:
              </h3>
              <ul className='text-gray-600 space-y-2'>
                <li>• Verderbliche Waren (Leberwurst, Döner Hawaii)</li>
                <li>• Personalisierte Artikel</li>
                <li>• Bereits geöffnete Hygieneartikel</li>
                <li>• Digitale Inhalte</li>
                <li>• Sonderanfertigungen</li>
              </ul>
            </div>

            <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4'>
              <h4 className='font-semibold text-yellow-800 mb-2'>
                Besondere Widerrufsbedingungen
              </h4>
              <ul className='text-yellow-700 text-sm space-y-1'>
                <li>
                  • Corona-Viren: Widerruf aus Gesundheitsgründen ausgeschlossen
                </li>
                <li>
                  • Fluxkompensator: Widerruf nur in der ursprünglichen
                  Zeitlinie möglich
                </li>
                <li>• Gold Laptop: Bitcoin-Erträge verbleiben beim Käufer</li>
                <li>
                  • Männer Hantel: Widerruf nur vor Entwicklung des Sixpacks
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            § 6 Gewährleistung und Haftung
          </h2>

          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Gewährleistung
              </h3>
              <p className='text-gray-600 mb-4'>
                Es gelten die gesetzlichen Gewährleistungsbestimmungen. Die
                Gewährleistungsfrist beträgt 2 Jahre ab Erhalt der Ware.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Standardgarantie
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    24 Monate auf Material- und Verarbeitungsfehler
                  </p>
                </div>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Erweiterte Garantie
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Für bestimmte Produkte verfügbar
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Produktspezifische Garantien
              </h3>
              <ul className='text-gray-600 space-y-2'>
                <li>• Fluxkompensator: Zeitreise-Garantie 88 Jahre</li>
                <li>• Gold Laptop: Bitcoin-Generation bis 2140 garantiert</li>
                <li>• 180° Winkel: Winkelgenauigkeit ±0,1°</li>
                <li>• Leisesprecher: Garantiert unter 0 dB</li>
                <li>• Obamium/Trumpium: Reinheitsgarantie 99,9%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            § 7 Datenschutz
          </h2>
          <p className='text-gray-600 mb-4'>
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Detaillierte
            Informationen finden Sie in unserer
            <a
              href='/privacy'
              className='text-blue-600 hover:text-blue-800 underline'
            >
              {' '}
              Datenschutzerklärung
            </a>
            .
          </p>

          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
            <h4 className='font-semibold text-blue-800 mb-2'>Ihre Rechte</h4>
            <p className='text-blue-700 text-sm'>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Übertragung Ihrer Daten sowie Widerspruch gegen die Verarbeitung.
            </p>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            § 8 Schlussbestimmungen
          </h2>

          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Anwendbares Recht
              </h3>
              <p className='text-gray-600'>
                Für alle Rechtsbeziehungen gilt deutsches Recht unter Ausschluss
                des UN-Kaufrechts.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Gerichtsstand
              </h3>
              <p className='text-gray-600'>
                Gerichtsstand für alle Streitigkeiten ist Buffhausen, soweit der
                Kunde Kaufmann, juristische Person des öffentlichen Rechts oder
                öffentlich-rechtliches Sondervermögen ist.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Salvatorische Klausel
              </h3>
              <p className='text-gray-600'>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt
                die Wirksamkeit der übrigen Bestimmungen davon unberührt.
              </p>
            </div>
          </div>
        </div>

        <div className='text-center mt-8'>
          <p className='text-gray-500 text-sm'>
            Stand: Dezember 2024 | Buffbolzen GmbH | Innovationsstraße 42, 12345
            Buffhausen
          </p>
        </div>
      </div>
    </div>
  )
}
