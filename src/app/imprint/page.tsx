import { Building, Mail, Phone, Globe, Users } from 'lucide-react'

export default function ImprintPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-4'>
            <Building className='h-12 w-12 text-blue-600 mr-4' />
            <h1 className='text-4xl font-bold text-gray-900'>Impressum</h1>
          </div>
          <p className='text-xl text-gray-600'>
            Angaben gemäß § 5 TMG und § 55 RStV
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Anbieter</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                Firmeninformationen
              </h3>
              <div className='space-y-3'>
                <div className='flex items-start space-x-3'>
                  <Building className='h-5 w-5 text-blue-600 mt-1' />
                  <div>
                    <p className='font-semibold text-gray-900'>
                      Buffbolzen GmbH
                    </p>
                    <p className='text-gray-600'>
                      Ihr vertrauensvoller Partner für einzigartige Produkte
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-3'>
                  <Globe className='h-5 w-5 text-blue-600 mt-1' />
                  <div>
                    <p className='text-gray-600'>
                      Innovationsstraße 42
                      <br />
                      12345 Buffhausen
                      <br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                Kontaktdaten
              </h3>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3'>
                  <Phone className='h-5 w-5 text-green-600' />
                  <div>
                    <p className='font-medium text-gray-900'>Telefon</p>
                    <p className='text-gray-600'>+49 (0) 123 456 789</p>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <Mail className='h-5 w-5 text-purple-600' />
                  <div>
                    <p className='font-medium text-gray-900'>E-Mail</p>
                    <p className='text-gray-600'>info@buffbolzen.de</p>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <Globe className='h-5 w-5 text-blue-600' />
                  <div>
                    <p className='font-medium text-gray-900'>Website</p>
                    <p className='text-gray-600'>www.buffbolzen.de</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Rechtliche Angaben
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold text-gray-900'>
                  Geschäftsführung
                </h3>
                <p className='text-gray-600'>Dr. Buff Bolzen</p>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900'>Handelsregister</h3>
                <p className='text-gray-600'>
                  HRB 123456
                  <br />
                  Amtsgericht Buffhausen
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900'>Umsatzsteuer-ID</h3>
                <p className='text-gray-600'>DE123456789</p>
              </div>
            </div>

            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold text-gray-900'>Steuernummer</h3>
                <p className='text-gray-600'>123/456/78910</p>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900'>Wirtschafts-ID</h3>
                <p className='text-gray-600'>DE123456789</p>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900'>WEEE-Reg.-Nr.</h3>
                <p className='text-gray-600'>DE 12345678</p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <div className='flex items-center mb-6'>
            <Users className='h-8 w-8 text-blue-600 mr-3' />
            <h2 className='text-2xl font-bold text-gray-900'>
              Verantwortlich für den Inhalt
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Redaktionell Verantwortlicher
              </h3>
              <p className='text-gray-600'>
                Dr. Buff Bolzen
                <br />
                Geschäftsführer
                <br />
                Innovationsstraße 42
                <br />
                12345 Buffhausen
              </p>
            </div>

            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Datenschutzbeauftragter
              </h3>
              <p className='text-gray-600'>
                Prof. Data Schützer
                <br />
                E-Mail: datenschutz@buffbolzen.de
                <br />
                Telefon: +49 (0) 123 456 799
              </p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Aufsichtsbehörden & Zulassungen
          </h2>

          <div className='space-y-6'>
            <div>
              <h3 className='font-semibold text-gray-900 mb-3'>
                Zuständige Kammer
              </h3>
              <p className='text-gray-600'>
                Handelskammer Buffhausen
                <br />
                Kammerbezirk: Buffhausen und Umgebung
                <br />
                Website: www.hk-buffhausen.de
              </p>
            </div>

            <div>
              <h3 className='font-semibold text-gray-900 mb-3'>
                Besondere Zulassungen
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-medium text-gray-900 mb-2'>
                    🏆 TÜV Ehrenmann Zertifikat
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Zertifiziert seit 1999
                  </p>
                </div>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-medium text-gray-900 mb-2'>
                    ⚗️ Strahlenschutz-Lizenz
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Für Obamium/Trumpium Handel
                  </p>
                </div>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-medium text-gray-900 mb-2'>
                    🕰️ Temporale Handelslizenz
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Zeitreise-Produkte zugelassen
                  </p>
                </div>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <h4 className='font-medium text-gray-900 mb-2'>
                    📐 Winkel-Vertriebslizenz
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Autorisierter 180° Winkel Händler
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Alternative Streitbeilegung
          </h2>

          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Online-Streitbeilegung
              </h3>
              <p className='text-gray-600 mb-2'>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
              </p>
              <a
                href='https://ec.europa.eu/consumers/odr/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 underline'
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </div>

            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Verbraucherschlichtung
              </h3>
              <p className='text-gray-600'>
                Wir sind nicht verpflichtet und nicht bereit, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Haftungsausschluss
          </h2>

          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Inhalt des Onlineangebotes
              </h3>
              <p className='text-gray-600'>
                Wir übernehmen keinerlei Gewähr für die Aktualität, Korrektheit,
                Vollständigkeit oder Qualität der bereitgestellten
                Informationen. Haftungsansprüche gegen uns, welche sich auf
                Schäden materieller oder ideeller Art beziehen, sind
                grundsätzlich ausgeschlossen.
              </p>
            </div>

            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Verweise und Links
              </h3>
              <p className='text-gray-600'>
                Bei direkten oder indirekten Verweisen auf fremde Internetseiten
                ("Links"), die außerhalb unseres Verantwortungsbereiches liegen,
                würde eine Haftungsverpflichtung ausschließlich in dem Fall in
                Kraft treten, in dem wir von den Inhalten Kenntnis haben.
              </p>
            </div>

            <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4'>
              <h4 className='font-semibold text-yellow-800 mb-2'>
                ⚠️ Besonderer Haftungsausschluss
              </h4>
              <ul className='text-yellow-700 text-sm space-y-1'>
                <li>• Zeitreise-Paradoxe durch Fluxkompensator-Nutzung</li>
                <li>• Realitätsverzerrungen durch Obamium/Trumpium</li>
                <li>• Bewusstseinserweiteurng durch LSD-Nüsse</li>
                <li>• Winkel-bedingte Geometrie-Anomalien</li>
                <li>• Bitcoin-Kurs-Schwankungen des Gold Laptops</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-blue-50 border-l-4 border-blue-600 p-6'>
          <h2 className='text-xl font-bold text-blue-900 mb-4'>
            Kontakt für rechtliche Angelegenheiten
          </h2>
          <p className='text-blue-800'>
            Für alle rechtlichen Fragen und Angelegenheiten wenden Sie sich
            bitte an:
            <br />
            <strong>Rechtsabteilung Buffbolzen GmbH</strong>
            <br />
            E-Mail: recht@buffbolzen.de
            <br />
            Telefon: +49 (0) 123 456 788
          </p>
        </div>

        <div className='text-center mt-8'>
          <p className='text-gray-500 text-sm'>
            Stand: Dezember 2024 | Dieses Impressum gilt für alle
            Online-Präsenzen der Buffbolzen GmbH
          </p>
        </div>
      </div>
    </div>
  )
}
