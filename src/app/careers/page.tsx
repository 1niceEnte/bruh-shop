import { Briefcase, Users, TrendingUp, Heart, Coffee, Zap } from 'lucide-react'

export default function CareersPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center mb-4'>
            <Briefcase className='h-12 w-12 text-blue-600 mr-4' />
            <h1 className='text-4xl font-bold text-gray-900'>
              Karriere bei Buffbolzen
            </h1>
          </div>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Werden Sie Teil unseres außergewöhnlichen Teams und helfen Sie uns
            dabei, das Unmögliche möglich zu machen!
          </p>
        </div>

        {/* Why Work With Us */}
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-center'>
            Warum Buffbolzen?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <Zap className='h-12 w-12 mx-auto mb-4' />
              <h3 className='text-xl font-bold mb-2'>Innovation First</h3>
              <p className='text-blue-100'>
                Arbeiten Sie mit Technologien, die es eigentlich gar nicht geben
                sollte
              </p>
            </div>
            <div className='text-center'>
              <Heart className='h-12 w-12 mx-auto mb-4' />
              <h3 className='text-xl font-bold mb-2'>Familiäres Umfeld</h3>
              <p className='text-blue-100'>
                Ein Team, das zusammenhält wie Obamium-Moleküle
              </p>
            </div>
            <div className='text-center'>
              <TrendingUp className='h-12 w-12 mx-auto mb-4' />
              <h3 className='text-xl font-bold mb-2'>Wachstum & Entwicklung</h3>
              <p className='text-blue-100'>
                Persönliche und berufliche Weiterentwicklung ist unser Motto
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Unsere Benefits
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='border border-gray-200 rounded-lg p-6 text-center'>
              <Coffee className='h-8 w-8 text-brown-600 mx-auto mb-3' />
              <h3 className='font-bold text-gray-900 mb-2'>
                Kostenlose LSD-Nüsse
              </h3>
              <p className='text-gray-600 text-sm'>
                Täglich frische Nüsse für alle Mitarbeiter
              </p>
            </div>
            <div className='border border-gray-200 rounded-lg p-6 text-center'>
              <span className='text-2xl mb-3 block'>🚗</span>
              <h3 className='font-bold text-gray-900 mb-2'>Firmenwagen</h3>
              <p className='text-gray-600 text-sm'>
                Ford Focus für alle Außendienstler
              </p>
            </div>
            <div className='border border-gray-200 rounded-lg p-6 text-center'>
              <span className='text-2xl mb-3 block'>💰</span>
              <h3 className='font-bold text-gray-900 mb-2'>Bitcoin-Bonus</h3>
              <p className='text-gray-600 text-sm'>
                Generiert durch unseren Gold Laptop
              </p>
            </div>
            <div className='border border-gray-200 rounded-lg p-6 text-center'>
              <span className='text-2xl mb-3 block'>🏋️</span>
              <h3 className='font-bold text-gray-900 mb-2'>
                Kostenlose Männer Hantel
              </h3>
              <p className='text-gray-600 text-sm'>
                Sixpack-Garantie in 4 Tagen*
              </p>
            </div>
            <div className='border border-gray-200 rounded-lg p-6 text-center'>
              <span className='text-2xl mb-3 block'>📐</span>
              <h3 className='font-bold text-gray-900 mb-2'>
                Winkelführerschein
              </h3>
              <p className='text-gray-600 text-sm'>
                Kostenlose Ausbildung für alle
              </p>
            </div>
            <div className='border border-gray-200 rounded-lg p-6 text-center'>
              <span className='text-2xl mb-3 block'>🕰️</span>
              <h3 className='font-bold text-gray-900 mb-2'>
                Flexible Arbeitszeit
              </h3>
              <p className='text-gray-600 text-sm'>
                Auch durch Zeitreise möglich
              </p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Aktuelle Stellenausschreibungen
          </h2>

          <div className='space-y-6'>
            <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    Zeitreise-Koordinator (m/w/d)
                  </h3>
                  <p className='text-gray-600'>
                    Vollzeit • Buffhausen • Erfahrung: 5+ Jahre (auch aus der
                    Zukunft)
                  </p>
                </div>
                <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium'>
                  Neu
                </span>
              </div>
              <p className='text-gray-600 mb-4'>
                Wir suchen einen erfahrenen Zeitreise-Koordinator für die
                Betreuung unserer Fluxkompensator-Kunden. Erfahrung mit
                temporalen Paradoxen und Zeitlinien-Management erforderlich.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>
                  Fluxkompensator
                </span>
                <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>
                  Zeitreise
                </span>
                <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm'>
                  Paradox-Management
                </span>
              </div>
              <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                Jetzt bewerben
              </button>
            </div>

            <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    Material-Ingenieur für Obamium/Trumpium (m/w/d)
                  </h3>
                  <p className='text-gray-600'>
                    Vollzeit • Buffhausen • Erfahrung: 3+ Jahre
                  </p>
                </div>
                <span className='bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium'>
                  Dringend
                </span>
              </div>
              <p className='text-gray-600 mb-4'>
                Zur Verstärkung unseres Materialforschungsteams suchen wir einen
                Experten für seltene Elemente. Strahlenschutz-Zertifikat und
                Resistenz gegen Realitätsverzerrungen von Vorteil.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm'>
                  Materialwissenschaft
                </span>
                <span className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm'>
                  Strahlenschutz
                </span>
                <span className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm'>
                  Forschung
                </span>
              </div>
              <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                Jetzt bewerben
              </button>
            </div>

            <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    Winkel-Qualitätsprüfer (m/w/d)
                  </h3>
                  <p className='text-gray-600'>
                    Teilzeit • Buffhausen • Erfahrung: Winkelführerschein
                    erforderlich
                  </p>
                </div>
              </div>
              <p className='text-gray-600 mb-4'>
                Für die Qualitätssicherung unserer 180° Winkel suchen wir einen
                zertifizierten Winkel-Experten. Präzision und
                Geometrie-Verständnis sind unerlässlich.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm'>
                  Qualitätssicherung
                </span>
                <span className='bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm'>
                  Geometrie
                </span>
                <span className='bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm'>
                  Präzision
                </span>
              </div>
              <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                Jetzt bewerben
              </button>
            </div>

            <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    Kundenberater für LSD-Nüsse (m/w/d)
                  </h3>
                  <p className='text-gray-600'>
                    Vollzeit • Remote möglich • Erfahrung: 2+ Jahre
                  </p>
                </div>
              </div>
              <p className='text-gray-600 mb-4'>
                Wir suchen einen einfühlsamen Kundenberater für unsere
                LSD-Nüsse-Kunden. Erfahrung im Umgang mit erweiterten
                Bewusstseinszuständen von Vorteil.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='bg-green-100 text-green-800 px-2 py-1 rounded text-sm'>
                  Kundenbetreuung
                </span>
                <span className='bg-green-100 text-green-800 px-2 py-1 rounded text-sm'>
                  Remote
                </span>
                <span className='bg-green-100 text-green-800 px-2 py-1 rounded text-sm'>
                  Beratung
                </span>
              </div>
              <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                Jetzt bewerben
              </button>
            </div>
          </div>
        </div>

        {/* Internships */}
        <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Praktika & Ausbildung
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='border border-gray-200 rounded-lg p-6'>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                🎓 Praktikum im Bereich Innovation
              </h3>
              <p className='text-gray-600 mb-4'>
                6-monatiges Praktikum in unserem Forschungs- und
                Entwicklungsteam. Arbeiten Sie an der nächsten Generation
                unmöglicher Produkte mit.
              </p>
              <ul className='text-gray-600 text-sm space-y-1 mb-4'>
                <li>• Dauer: 6 Monate</li>
                <li>• Vergütung: 1.500€/Monat + LSD-Nüsse</li>
                <li>• Start: Jederzeit (auch in der Vergangenheit)</li>
              </ul>
              <button className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors'>
                Bewerben
              </button>
            </div>

            <div className='border border-gray-200 rounded-lg p-6'>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                🔧 Ausbildung zum Buffbolzen-Spezialisten
              </h3>
              <p className='text-gray-600 mb-4'>
                3-jährige Ausbildung zum zertifizierten
                Buffbolzen-Produktspezialisten. Inklusive Winkelführerschein und
                TÜV Ehrenmann Zertifikat.
              </p>
              <ul className='text-gray-600 text-sm space-y-1 mb-4'>
                <li>• Dauer: 3 Jahre</li>
                <li>• Vergütung: 800-1.200€/Monat</li>
                <li>• Start: September 2025</li>
              </ul>
              <button className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors'>
                Bewerben
              </button>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Bewerbungsprozess
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                <span className='text-2xl'>📝</span>
              </div>
              <h3 className='font-bold text-gray-900 mb-2'>1. Bewerbung</h3>
              <p className='text-gray-600 text-sm'>
                Senden Sie uns Ihre vollständigen Bewerbungsunterlagen
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                <span className='text-2xl'>📞</span>
              </div>
              <h3 className='font-bold text-gray-900 mb-2'>
                2. Telefoninterview
              </h3>
              <p className='text-gray-600 text-sm'>
                Erstes Kennenlernen und Abklärung der Grundlagen
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                <span className='text-2xl'>🏢</span>
              </div>
              <h3 className='font-bold text-gray-900 mb-2'>
                3. Vorstellungsgespräch
              </h3>
              <p className='text-gray-600 text-sm'>
                Persönliches Gespräch in unseren Räumlichkeiten
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                <span className='text-2xl'>🎉</span>
              </div>
              <h3 className='font-bold text-gray-900 mb-2'>4. Willkommen!</h3>
              <p className='text-gray-600 text-sm'>
                Onboarding und Start in Ihr neues Abenteuer
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className='text-center mt-12'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Interessiert?
          </h2>
          <p className='text-gray-600 mb-6'>
            Senden Sie Ihre Bewerbung an: karriere@buffbolzen.de
          </p>
          <a
            href='mailto:karriere@buffbolzen.de'
            className='inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors'
          >
            Jetzt bewerben
          </a>
        </div>
      </div>
    </div>
  )
}
