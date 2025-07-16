import { FileText, Download, Camera, Mic } from 'lucide-react'

export default function PressPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center mb-4'>
            <FileText className='h-12 w-12 text-blue-600 mr-4' />
            <h1 className='text-4xl font-bold text-gray-900'>Presse</h1>
          </div>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Aktuelle Pressemitteilungen, Medienressourcen und
            Unternehmensnachrichten
          </p>
        </div>

        {/* Latest News */}
        <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>
            Aktuelle Pressemitteilungen
          </h2>

          <div className='space-y-8'>
            <article className='border-b border-gray-200 pb-8'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    Buffbolzen revolutioniert Zeitreise-Technologie mit neuem
                    Fluxkompensator 3.0
                  </h3>
                  <p className='text-gray-600 text-sm'>15. Dezember 2024</p>
                </div>
                <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium'>
                  Neu
                </span>
              </div>
              <p className='text-gray-600 mb-4'>
                Das Buffhausener Unternehmen präsentiert die neueste Generation
                des Fluxkompensators mit verbesserter Zeitlinien-Stabilität und
                reduziertem Paradox-Risiko. Die Innovation verspricht eine
                Revolution im privaten Zeitreise-Markt.
              </p>
              <div className='flex space-x-4'>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                  Vollständige Pressemitteilung
                </button>
                <button className='border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors'>
                  PDF herunterladen
                </button>
              </div>
            </article>

            <article className='border-b border-gray-200 pb-8'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    TÜV-Zertifizierung: Buffbolzen als "Ehrenmann des Jahres
                    2024" ausgezeichnet
                  </h3>
                  <p className='text-gray-600 text-sm'>01. Dezember 2024</p>
                </div>
              </div>
              <p className='text-gray-600 mb-4'>
                Die TÜV Süd verleiht Buffbolzen die prestigeträchtige
                Auszeichnung "Ehrenmann des Jahres" für außergewöhnliche
                Leistungen im Bereich innovativer Produktentwicklung und
                Kundenservice.
              </p>
              <div className='flex space-x-4'>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                  Vollständige Pressemitteilung
                </button>
                <button className='border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors'>
                  PDF herunterladen
                </button>
              </div>
            </article>

            <article className='border-b border-gray-200 pb-8'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    Neues Forschungszentrum für Obamium/Trumpium eröffnet
                  </h3>
                  <p className='text-gray-600 text-sm'>20. November 2024</p>
                </div>
              </div>
              <p className='text-gray-600 mb-4'>
                Buffbolzen investiert 50 Millionen Euro in ein hochmodernes
                Forschungszentrum für seltene Materialien. Das neue Labor
                verfügt über Strahlenschutz der neuesten Generation.
              </p>
              <div className='flex space-x-4'>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                  Vollständige Pressemitteilung
                </button>
                <button className='border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors'>
                  PDF herunterladen
                </button>
              </div>
            </article>
          </div>
        </div>

        {/* Media Resources */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <div className='flex items-center mb-6'>
              <Camera className='h-8 w-8 text-blue-600 mr-3' />
              <h2 className='text-2xl font-bold text-gray-900'>
                Medienressourcen
              </h2>
            </div>

            <div className='space-y-4'>
              <div className='border border-gray-200 rounded-lg p-4'>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Logos & Bilder
                </h3>
                <p className='text-gray-600 text-sm mb-3'>
                  Hochauflösende Logos, Produktfotos und Firmenmaterialien
                </p>
                <button className='flex items-center text-blue-600 hover:text-blue-800'>
                  <Download className='h-4 w-4 mr-2' />
                  Media Kit herunterladen (42 MB)
                </button>
              </div>

              <div className='border border-gray-200 rounded-lg p-4'>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Produktdatenblätter
                </h3>
                <p className='text-gray-600 text-sm mb-3'>
                  Technische Spezifikationen aller Produkte
                </p>
                <button className='flex items-center text-blue-600 hover:text-blue-800'>
                  <Download className='h-4 w-4 mr-2' />
                  Datenblätter herunterladen (12 MB)
                </button>
              </div>

              <div className='border border-gray-200 rounded-lg p-4'>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Unternehmenspräsentation
                </h3>
                <p className='text-gray-600 text-sm mb-3'>
                  Aktuelle Firmenpräsentation mit Zahlen und Fakten
                </p>
                <button className='flex items-center text-blue-600 hover:text-blue-800'>
                  <Download className='h-4 w-4 mr-2' />
                  Präsentation herunterladen (8 MB)
                </button>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8'>
            <div className='flex items-center mb-6'>
              <Mic className='h-8 w-8 text-purple-600 mr-3' />
              <h2 className='text-2xl font-bold text-gray-900'>
                Pressekontakt
              </h2>
            </div>

            <div className='space-y-6'>
              <div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Allgemeine Presseanfragen
                </h3>
                <p className='text-gray-600'>
                  <strong>Maria Medien</strong>
                  <br />
                  Leiterin Unternehmenskommunikation
                  <br />
                  Telefon: +49 (0) 123 456 790
                  <br />
                  E-Mail: presse@buffbolzen.de
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Produktspezifische Anfragen
                </h3>
                <p className='text-gray-600'>
                  <strong>Dr. Tech Nologie</strong>
                  <br />
                  Technischer Pressesprecher
                  <br />
                  Telefon: +49 (0) 123 456 791
                  <br />
                  E-Mail: tech-presse@buffbolzen.de
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Verfügbarkeit
                </h3>
                <p className='text-gray-600 text-sm'>
                  Montag - Freitag: 9:00 - 18:00 Uhr
                  <br />
                  Notfall-Hotline: +49 (0) 123 456 999
                  <br />
                  (Auch für Zeitreise-bedingte Pressetermine)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Auszeichnungen & Anerkennungen
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='text-center border border-gray-200 rounded-lg p-6'>
              <div className='text-4xl mb-3'>🏆</div>
              <h3 className='font-bold text-gray-900 mb-2'>
                TÜV Ehrenmann 2024
              </h3>
              <p className='text-gray-600 text-sm'>
                Auszeichnung für herausragende Qualität
              </p>
            </div>

            <div className='text-center border border-gray-200 rounded-lg p-6'>
              <div className='text-4xl mb-3'>🌟</div>
              <h3 className='font-bold text-gray-900 mb-2'>
                Innovation Award 2023
              </h3>
              <p className='text-gray-600 text-sm'>
                Fluxkompensator als Produkt des Jahres
              </p>
            </div>

            <div className='text-center border border-gray-200 rounded-lg p-6'>
              <div className='text-4xl mb-3'>🥇</div>
              <h3 className='font-bold text-gray-900 mb-2'>
                Beste Nüsse Deutschlands
              </h3>
              <p className='text-gray-600 text-sm'>
                LSD-Nüsse gewinnen Geschmackstest
              </p>
            </div>

            <div className='text-center border border-gray-200 rounded-lg p-6'>
              <div className='text-4xl mb-3'>🔬</div>
              <h3 className='font-bold text-gray-900 mb-2'>
                Forschungspreis Material
              </h3>
              <p className='text-gray-600 text-sm'>
                Obamium/Trumpium Entwicklung
              </p>
            </div>

            <div className='text-center border border-gray-200 rounded-lg p-6'>
              <div className='text-4xl mb-3'>📐</div>
              <h3 className='font-bold text-gray-900 mb-2'>
                Präzisions-Champion
              </h3>
              <p className='text-gray-600 text-sm'>
                180° Winkel mit 0,001° Genauigkeit
              </p>
            </div>

            <div className='text-center border border-gray-200 rounded-lg p-6'>
              <div className='text-4xl mb-3'>🌱</div>
              <h3 className='font-bold text-gray-900 mb-2'>
                Nachhaltigkeit 2024
              </h3>
              <p className='text-gray-600 text-sm'>
                Grünste Wasserwaagen Europas
              </p>
            </div>
          </div>
        </div>

        {/* Company Facts */}
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white mb-12'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Unternehmensdaten
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-3xl font-bold mb-2'>25+</div>
              <div className='text-blue-100'>Jahre am Markt</div>
            </div>
            <div>
              <div className='text-3xl font-bold mb-2'>150+</div>
              <div className='text-blue-100'>Mitarbeiter</div>
            </div>
            <div>
              <div className='text-3xl font-bold mb-2'>37</div>
              <div className='text-blue-100'>Einzigartige Produkte</div>
            </div>
            <div>
              <div className='text-3xl font-bold mb-2'>∞</div>
              <div className='text-blue-100'>Möglichkeiten</div>
            </div>
          </div>
        </div>

        {/* Interview Requests */}
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-6 text-center'>
            Interview-Anfragen
          </h2>

          <div className='max-w-2xl mx-auto'>
            <p className='text-gray-600 mb-6 text-center'>
              Gerne stehen unsere Experten für Interviews zur Verfügung.
              Kontaktieren Sie uns für Termine und spezielle Anfragen.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='border border-gray-200 rounded-lg p-4'>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  🎤 Print & Online
                </h3>
                <p className='text-gray-600 text-sm mb-3'>
                  Schriftliche Interviews und Statements
                </p>
                <p className='text-blue-600 text-sm'>
                  Antwortzeit: 24-48 Stunden
                </p>
              </div>

              <div className='border border-gray-200 rounded-lg p-4'>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  📺 TV & Radio
                </h3>
                <p className='text-gray-600 text-sm mb-3'>
                  Live-Interviews und Studiogespräche
                </p>
                <p className='text-blue-600 text-sm'>
                  Terminvereinbarung: 1-2 Wochen
                </p>
              </div>
            </div>

            <div className='text-center mt-8'>
              <a
                href='mailto:presse@buffbolzen.de'
                className='inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors'
              >
                Interview anfragen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
