import { Truck, RotateCcw, Package, Clock } from 'lucide-react'

export default function ShippingReturnsPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Versand & Rückgabe
          </h1>
          <p className='text-xl text-gray-600'>
            Alles was Sie über Lieferung und Rückgabe wissen müssen
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {/* Shipping Information */}
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <div className='flex items-center mb-6'>
              <Truck className='h-8 w-8 text-blue-600 mr-3' />
              <h2 className='text-2xl font-bold text-gray-900'>
                Versandinformationen
              </h2>
            </div>

            <div className='space-y-6'>
              <div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Versandzeiten
                </h3>
                <ul className='text-gray-600 space-y-1'>
                  <li>• Standardversand: 2-3 Werktage</li>
                  <li>• Expressversand: 1-2 Werktage</li>
                  <li>• EU-Länder: 5-7 Werktage</li>
                  <li>• Internationale Lieferung: 7-14 Werktage</li>
                </ul>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Versandkosten
                </h3>
                <ul className='text-gray-600 space-y-1'>
                  <li>• Standardversand: 4,99€</li>
                  <li>• Expressversand: 9,99€</li>
                  <li>• Kostenloser Versand ab 50€</li>
                  <li>• EU-Versand: ab 9,99€</li>
                </ul>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Besondere Artikel
                </h3>
                <ul className='text-gray-600 space-y-1'>
                  <li>• Fluxkompensator: Spezialversand mit Zeitkapsel</li>
                  <li>• Kreissägenbagger: Schwertransport erforderlich</li>
                  <li>• Obamium/Trumpium: Strahlenschutzverpackung</li>
                  <li>• LSD-Nüsse: Diskrete Verpackung</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Returns Information */}
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <div className='flex items-center mb-6'>
              <RotateCcw className='h-8 w-8 text-green-600 mr-3' />
              <h2 className='text-2xl font-bold text-gray-900'>
                Rückgaberichtlinien
              </h2>
            </div>

            <div className='space-y-6'>
              <div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Rückgabefrist
                </h3>
                <p className='text-gray-600'>
                  Sie haben 14 Tage ab Erhalt der Ware Zeit für eine Rückgabe.
                  Das Widerrufsrecht gilt für alle Artikel außer
                  personalisierten Produkten.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Rückgabeprozess
                </h3>
                <ol className='text-gray-600 space-y-1 list-decimal list-inside'>
                  <li>Rückgabe online oder telefonisch anmelden</li>
                  <li>Kostenloses Rücksendeetikett herunterladen</li>
                  <li>Artikel in Originalverpackung verpacken</li>
                  <li>Paket an DHL übergeben oder abholen lassen</li>
                </ol>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Rückerstattung
                </h3>
                <p className='text-gray-600'>
                  Nach Erhalt und Prüfung der Ware erstatten wir den vollen
                  Kaufpreis innerhalb von 14 Tagen auf Ihr ursprüngliches
                  Zahlungsmittel.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Besondere Rückgabebedingungen
                </h3>
                <ul className='text-gray-600 space-y-1'>
                  <li>• Leberwurst: Nur bei Ungenießbarkeit</li>
                  <li>• 180° Winkel: Winkelführerschein erforderlich</li>
                  <li>• Corona-Viren: Rückgabe ausgeschlossen</li>
                  <li>• Gold Laptop: Bitcoin-Earnings bleiben beim Käufer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
          <h2 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
            So funktioniert's
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                <Package className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='font-semibold text-gray-900 mb-2'>
                1. Bestellung
              </h3>
              <p className='text-gray-600 text-sm'>
                Artikel in den Warenkorb legen und bestellen
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                <Clock className='h-8 w-8 text-yellow-600' />
              </div>
              <h3 className='font-semibold text-gray-900 mb-2'>
                2. Bearbeitung
              </h3>
              <p className='text-gray-600 text-sm'>
                Wir verpacken Ihre Bestellung sorgfältig
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                <Truck className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='font-semibold text-gray-900 mb-2'>3. Versand</h3>
              <p className='text-gray-600 text-sm'>
                Schneller und sicherer Versand zu Ihnen
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                <RotateCcw className='h-8 w-8 text-green-600' />
              </div>
              <h3 className='font-semibold text-gray-900 mb-2'>4. Rückgabe</h3>
              <p className='text-gray-600 text-sm'>
                Kostenlose Rückgabe binnen 14 Tagen
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className='text-center'>
          <p className='text-gray-600 mb-4'>
            Haben Sie Fragen zu Versand oder Rückgabe?
          </p>
          <a
            href='/contact'
            className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors'
          >
            Kontaktieren Sie uns
          </a>
        </div>
      </div>
    </div>
  )
}
