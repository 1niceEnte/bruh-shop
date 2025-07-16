import { Building2, Users, Heart, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Über Buffbolzen
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Seit 1999 revolutionieren wir den Handel mit einzigartigen,
            innovativen und manchmal völlig verrückten Produkten.
          </p>
        </div>

        {/* Hero Section */}
        <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Unsere Geschichte
              </h2>
              <p className='text-gray-600 mb-4'>
                Alles begann 1999 mit einem simplen Gold Laptop und der Vision,
                der Welt zu beweisen, dass Bitcoin-Mining bereits vor Bitcoin
                möglich war. Seitdem haben wir unser Sortiment kontinuierlich um
                die außergewöhnlichsten Produkte erweitert.
              </p>
              <p className='text-gray-600 mb-4'>
                Von Obamium bis Trumpium, von 180° Winkeln bis zu
                Fluxkompensatoren - bei uns finden Sie Dinge, von denen Sie
                nicht wussten, dass Sie sie brauchen, aber definitiv haben
                möchten.
              </p>
              <p className='text-gray-600'>
                Heute sind wir stolz darauf, der führende Anbieter für
                unmögliche Möglichkeiten und mögliche Unmöglichkeiten zu sein.
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-blue-100 rounded-full p-8 w-48 h-48 mx-auto flex items-center justify-center'>
                <Building2 className='h-24 w-24 text-blue-600' />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white rounded-lg shadow-lg p-8 text-center'>
            <Heart className='h-12 w-12 text-red-600 mx-auto mb-4' />
            <h3 className='text-xl font-bold text-gray-900 mb-4'>
              Leidenschaft
            </h3>
            <p className='text-gray-600'>
              Wir brennen für das Außergewöhnliche und finden Freude daran, das
              Unmögliche möglich zu machen.
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8 text-center'>
            <Award className='h-12 w-12 text-yellow-600 mx-auto mb-4' />
            <h3 className='text-xl font-bold text-gray-900 mb-4'>Qualität</h3>
            <p className='text-gray-600'>
              Jedes Produkt wird sorgfältig ausgewählt und auf seine
              einzigartigen Eigenschaften geprüft.
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8 text-center'>
            <Users className='h-12 w-12 text-green-600 mx-auto mb-4' />
            <h3 className='text-xl font-bold text-gray-900 mb-4'>
              Kundenzufriedenheit
            </h3>
            <p className='text-gray-600'>
              Ihre Zufriedenheit ist unser Antrieb. Wir sorgen dafür, dass Sie
              das perfekte Produkt finden.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Unser Team
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center'>
                <span className='text-4xl'>👨‍💼</span>
              </div>
              <h3 className='font-bold text-gray-900'>Dr. Buff Bolzen</h3>
              <p className='text-gray-600 text-sm mb-2'>Gründer & CEO</p>
              <p className='text-gray-500 text-xs'>
                Experte für unmögliche Technologien seit 1999
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center'>
                <span className='text-4xl'>👩‍🔬</span>
              </div>
              <h3 className='font-bold text-gray-900'>Prof. Obamia Trumper</h3>
              <p className='text-gray-600 text-sm mb-2'>
                Leiterin Materialforschung
              </p>
              <p className='text-gray-500 text-xs'>
                Entwicklerin von Obamium und Trumpium
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center'>
                <span className='text-4xl'>👨‍🔧</span>
              </div>
              <h3 className='font-bold text-gray-900'>Ing. Winkel Grad</h3>
              <p className='text-gray-600 text-sm mb-2'>Chefingenieur</p>
              <p className='text-gray-500 text-xs'>
                Spezialist für 180° Winkel und Wasserwaagen
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center'>
                <span className='text-4xl'>👩‍🍳</span>
              </div>
              <h3 className='font-bold text-gray-900'>Maria Delikatessa</h3>
              <p className='text-gray-600 text-sm mb-2'>Lebensmittelexpertin</p>
              <p className='text-gray-500 text-xs'>
                Verantwortlich für LSD-Nüsse und Leberwurst
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center'>
                <span className='text-4xl'>👨‍💻</span>
              </div>
              <h3 className='font-bold text-gray-900'>Max Fluxer</h3>
              <p className='text-gray-600 text-sm mb-2'>
                Zeitreise-Koordinator
              </p>
              <p className='text-gray-500 text-xs'>
                Betreut alle Fluxkompensator-Angelegenheiten
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center'>
                <span className='text-4xl'>👩‍⚖️</span>
              </div>
              <h3 className='font-bold text-gray-900'>TÜV Ehrenfrau</h3>
              <p className='text-gray-600 text-sm mb-2'>Qualitätssicherung</p>
              <p className='text-gray-500 text-xs'>
                Staatlich anerkannte Ehrenfrau mit TÜV-Siegel
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white mb-12'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold mb-6'>Unsere Mission</h2>
            <p className='text-xl mb-6 max-w-4xl mx-auto'>
              "Das Unmögliche möglich machen und dabei so viel Spaß haben, dass
              selbst unsere Kunden nicht glauben können, was sie gerade gekauft
              haben."
            </p>
            <div className='flex flex-wrap justify-center gap-4 text-sm'>
              <span className='bg-white bg-opacity-20 px-4 py-2 rounded-full'>
                Innovation
              </span>
              <span className='bg-white bg-opacity-20 px-4 py-2 rounded-full'>
                Humor
              </span>
              <span className='bg-white bg-opacity-20 px-4 py-2 rounded-full'>
                Qualität
              </span>
              <span className='bg-white bg-opacity-20 px-4 py-2 rounded-full'>
                Überraschung
              </span>
            </div>
          </div>
        </div>

        {/* Facts */}
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Zahlen & Fakten
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-3xl font-bold text-blue-600 mb-2'>25+</div>
              <div className='text-gray-600'>Jahre Erfahrung</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-green-600 mb-2'>
                10.000+
              </div>
              <div className='text-gray-600'>Zufriedene Kunden</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-purple-600 mb-2'>37</div>
              <div className='text-gray-600'>Einzigartige Produkte</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-red-600 mb-2'>∞</div>
              <div className='text-gray-600'>Möglichkeiten</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className='text-center mt-12'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Werden Sie Teil der Buffbolzen-Familie
          </h2>
          <p className='text-gray-600 mb-6'>
            Haben Sie Fragen oder möchten Sie uns kennenlernen?
          </p>
          <a
            href='/contact'
            className='inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors'
          >
            Kontaktieren Sie uns
          </a>
        </div>
      </div>
    </div>
  )
}
