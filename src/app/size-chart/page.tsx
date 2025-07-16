import { Ruler } from 'lucide-react'

export default function SizeChartPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-4'>
            <Ruler className='h-12 w-12 text-blue-600 mr-4' />
            <h1 className='text-4xl font-bold text-gray-900'>Größentabelle</h1>
          </div>
          <p className='text-xl text-gray-600'>
            Finden Sie die richtige Größe für unsere einzigartigen Produkte
          </p>
        </div>

        {/* Clothing Sizes */}
        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Kleidung (Buffbolzen Shirt)
          </h2>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Größe
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Brustumfang (cm)
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Länge (cm)
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Buff-Faktor
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    XS
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    86-91
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    68
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Leicht gebufft
                  </td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    S
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    91-96
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    70
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Mäßig gebufft
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    M
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    96-101
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    72
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Gut gebufft
                  </td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    L
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    101-106
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    74
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Sehr gebufft
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    XL
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    106-111
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    76
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Extrem gebufft
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tool Sizes */}
        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Werkzeuge & Geräte
          </h2>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Produkt
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Größe
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Gewicht
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Besonderheit
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    180° Winkel
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    30 x 20 cm
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    500g
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Winkelführerschein erforderlich
                  </td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    Wasserwaage
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    60 cm
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    800g
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Mit echtem Wasser
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    Kreissägenbagger
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    12 x 4 x 3 m
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    45 Tonnen
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Schwertransport nötig
                  </td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    Leisesprecher
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    15 x 10 cm
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    300g
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Flüsterton garantiert
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Material Specifications */}
        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Materialien (pro kg)
          </h2>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Material
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Dichte
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Härte
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Spezialeffekt
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    Obamium
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    8,9 g/cm³
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Ultra-hart
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Inspiriert zum Hoffen
                  </td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    Trumpium
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    1,2 g/cm³
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Sehr weich
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Dreht sich permanent
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    Amogium
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    6,9 g/cm³
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Sus-hart
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    Macht verdächtig
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Special Items */}
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Spezielle Gegenstände
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='border border-gray-200 rounded-lg p-4'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                OneXView Fernglas
              </h3>
              <p className='text-gray-600 text-sm mb-2'>
                Vergrößerung: 1x (Originalansicht)
              </p>
              <p className='text-gray-600 text-sm'>
                Sichtfeld: Genau wie ohne Fernglas
              </p>
            </div>

            <div className='border border-gray-200 rounded-lg p-4'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                ClearView Mattglas Brille
              </h3>
              <p className='text-gray-600 text-sm mb-2'>
                Durchsichtigkeit: 0% (mattglasiert)
              </p>
              <p className='text-gray-600 text-sm'>Blendschutz: 100%</p>
            </div>

            <div className='border border-gray-200 rounded-lg p-4'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Anti-Reflex Spiegel
              </h3>
              <p className='text-gray-600 text-sm mb-2'>Reflexion: Minimiert</p>
              <p className='text-gray-600 text-sm'>Spiegelung: Kristallklar</p>
            </div>

            <div className='border border-gray-200 rounded-lg p-4'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Männer Hantel
              </h3>
              <p className='text-gray-600 text-sm mb-2'>
                Gewicht: Variable Männlichkeit
              </p>
              <p className='text-gray-600 text-sm'>Sixpack-Garantie: 4 Tage*</p>
              <p className='text-gray-600 text-xs text-gray-400'>
                *Vielleicht laut Studien
              </p>
            </div>
          </div>
        </div>

        {/* Measuring Guide */}
        <div className='mt-12 text-center'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Messanleitung
          </h2>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            Für beste Ergebnisse messen Sie bitte immer mit unserem speziellen
            Buffbolzen-Maßband. Normale Maßbänder können bei unseren
            einzigartigen Produkten zu Ungenauigkeiten führen.
          </p>
          <a
            href='/contact'
            className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors'
          >
            Persönliche Beratung anfordern
          </a>
        </div>
      </div>
    </div>
  )
}
