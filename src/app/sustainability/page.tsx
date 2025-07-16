import { Leaf, Recycle, Sun, TreePine, Droplets, Zap } from 'lucide-react'

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Nachhaltigkeit</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unser Engagement für eine grünere Zukunft und verantwortungsvolle Produktentwicklung
          </p>
        </div>

        {/* Hero Message */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg shadow-lg p-8 text-white mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Unsere grüne Mission</h2>
            <p className="text-xl mb-6 max-w-4xl mx-auto">
              "Wir glauben daran, dass auch unmögliche Produkte auf umweltfreundliche Weise 
              hergestellt werden können. Von recyceltem Obamium bis hin zu solar-betriebenen 
              Fluxkompensatoren - Nachhaltigkeit ist Teil unserer DNA."
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">CO2-Neutral bis 2030</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">100% Ökostrom</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Recycelte Materialien</span>
            </div>
          </div>
        </div>

        {/* Key Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Sun className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">100% Ökostrom</h3>
            <p className="text-gray-600 mb-4">
              Unser gesamter Energiebedarf wird durch erneuerbare Energien gedeckt. 
              Sogar der Fluxkompensator läuft mittlerweile solar-betrieben.
            </p>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <span className="text-yellow-800 font-semibold">2024: 0% CO2-Emissionen</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Recycle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recycling-Programm</h3>
            <p className="text-gray-600 mb-4">
              95% unserer Verpackungen sind recyclebar. Obamium und Trumpium werden 
              zu 100% aus recycelten Materialien gewonnen.
            </p>
            <div className="bg-green-50 p-3 rounded-lg">
              <span className="text-green-800 font-semibold">95% Recycling-Quote</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <TreePine className="h-12 w-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Aufforstung</h3>
            <p className="text-gray-600 mb-4">
              Für jeden verkauften 180° Winkel pflanzen wir einen Baum. 
              Unser Ziel: 1 Million Bäume bis 2030.
            </p>
            <div className="bg-green-50 p-3 rounded-lg">
              <span className="text-green-800 font-semibold">42.337 Bäume gepflanzt</span>
            </div>
          </div>
        </div>

        {/* Product Sustainability */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nachhaltige Produktentwicklung</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Unsere grünen Produkte</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">♻️ Eco-Wasserwaage</h4>
                  <p className="text-gray-600 text-sm">
                    Hergestellt aus 100% recyceltem Kunststoff und nachhaltig gewonnenem Wasser
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🌱 Bio-LSD-Nüsse</h4>
                  <p className="text-gray-600 text-sm">
                    Organisch angebaut, fair gehandelt und in kompostierbaren Verpackungen
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">☀️ Solar-Fluxkompensator</h4>
                  <p className="text-gray-600 text-sm">
                    Zeitreise ohne Umweltbelastung dank integrierter Solarpaneele
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🔋 Öko-Leisesprecher</h4>
                  <p className="text-gray-600 text-sm">
                    Energie-effizient und aus nachhaltigen Materialien gefertigt
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Materialinnovationen</h3>
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Recyceltes Obamium</h4>
                  <p className="text-green-700 text-sm mb-2">
                    Wir haben als erste das Recycling von Obamium perfektioniert. 
                    100% der Eigenschaften bleiben erhalten.
                  </p>
                  <div className="bg-green-100 p-2 rounded">
                    <span className="text-green-800 text-xs font-medium">CO2-Ersparnis: 85%</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Nachhaltiges Trumpium</h4>
                  <p className="text-blue-700 text-sm mb-2">
                    Unser Trumpium wird jetzt aus erneuerbaren Quellen gewonnen 
                    und dreht sich noch umweltfreundlicher.
                  </p>
                  <div className="bg-blue-100 p-2 rounded">
                    <span className="text-blue-800 text-xs font-medium">Umweltschonend: 90%</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Grünes Amogium</h4>
                  <p className="text-purple-700 text-sm mb-2">
                    Unser Amogium ist jetzt verdächtig nachhaltig und 
                    wurde mit grüner Energie verfeinert.
                  </p>
                  <div className="bg-purple-100 p-2 rounded">
                    <span className="text-purple-800 text-xs font-medium">Nachhaltigkeit: Sus-tainable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unser Umwelt-Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Droplets className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Wasser sparen</h3>
              <p className="text-2xl font-bold text-green-600 mb-1">40%</p>
              <p className="text-gray-600 text-sm">weniger Verbrauch seit 2020</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">CO2 reduzieren</h3>
              <p className="text-2xl font-bold text-blue-600 mb-1">75%</p>
              <p className="text-gray-600 text-sm">weniger Emissionen</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Recycle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Abfall vermeiden</h3>
              <p className="text-2xl font-bold text-yellow-600 mb-1">90%</p>
              <p className="text-gray-600 text-sm">recycelte Materialien</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TreePine className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Bäume pflanzen</h3>
              <p className="text-2xl font-bold text-purple-600 mb-1">42k</p>
              <p className="text-gray-600 text-sm">Bäume seit 2020</p>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg shadow-lg p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Ziele für 2030</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kurzziele (2025)</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  100% recycelbare Verpackungen
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  CO2-neutraler Versand
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  50% weniger Wasserverbrauch
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  1000 neue Solarpaneele
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Langziele (2030)</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Vollständig CO2-neutrales Unternehmen
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  1 Million gepflanzte Bäume
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Zero-Waste Produktion
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Klimapositive Zeitreisen
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Zertifizierungen & Partnerschaften</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center border border-gray-200 rounded-lg p-6">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold text-gray-900 mb-2">ISO 14001</h3>
              <p className="text-gray-600 text-sm">Umweltmanagementsystem</p>
            </div>
            
            <div className="text-center border border-gray-200 rounded-lg p-6">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-gray-900 mb-2">EMAS</h3>
              <p className="text-gray-600 text-sm">EU Öko-Audit</p>
            </div>
            
            <div className="text-center border border-gray-200 rounded-lg p-6">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-bold text-gray-900 mb-2">B-Corp</h3>
              <p className="text-gray-600 text-sm">Zertifiziertes nachhaltiges Unternehmen</p>
            </div>
            
            <div className="text-center border border-gray-200 rounded-lg p-6">
              <div className="text-4xl mb-3">♻️</div>
              <h3 className="font-bold text-gray-900 mb-2">Cradle to Cradle</h3>
              <p className="text-gray-600 text-sm">Kreislaufwirtschaft zertifiziert</p>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Machen Sie mit!</h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              Nachhaltigkeit ist eine gemeinsame Aufgabe. Hier sind einige Wege, 
              wie Sie Teil unserer grünen Mission werden können:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">🌳 Baum-Patenschaft</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Übernehmen Sie eine Patenschaft für einen unserer gepflanzten Bäume
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                  Baum adoptieren
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">📦 Rückgabe-Programm</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Senden Sie alte Produkte zurück für fachgerechtes Recycling
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Produkt zurücksenden
                </button>
              </div>
            </div>
            
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              Über Nachhaltigkeit sprechen
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 