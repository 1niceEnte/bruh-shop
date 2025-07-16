'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'Wie lange dauert der Versand?',
    answer:
      'Standardversand dauert 2-3 Werktage innerhalb Deutschlands. Expressversand ist in 1-2 Werktagen möglich. Internationale Lieferungen dauern 5-10 Werktage.',
  },
  {
    id: 2,
    question: 'Welche Zahlungsmöglichkeiten gibt es?',
    answer:
      'Wir akzeptieren alle gängigen Zahlungsmethoden: Kreditkarte, PayPal, SEPA-Lastschrift, Sofortüberweisung und Kauf auf Rechnung (nach Bonitätsprüfung).',
  },
  {
    id: 3,
    question: 'Kann ich meine Bestellung stornieren?',
    answer:
      'Bestellungen können bis zum Versand kostenfrei storniert werden. Kontaktieren Sie uns einfach per E-Mail oder Telefon. Nach dem Versand greifen unsere Rückgaberichtlinien.',
  },
  {
    id: 4,
    question: 'Wie funktioniert die Rückgabe?',
    answer:
      'Sie haben 14 Tage Widerrufsrecht ab Erhalt der Ware. Die Artikel müssen unbenutzt und in der Originalverpackung zurückgesendet werden. Den Rücksendeaufkleber finden Sie in Ihrem Paket.',
  },
  {
    id: 5,
    question: 'Sind die Produkte wirklich so wie beschrieben?',
    answer:
      "Natürlich! Unsere Produktbeschreibungen sind zu 100% akkurat. Der Fluxkompensator macht wirklich 'uhhhhhhhh' und die LSD-Nüsse sind tatsächlich 'Lustig, Saftig und Delikat'.",
  },
  {
    id: 6,
    question: 'Bieten Sie internationale Lieferung an?',
    answer:
      'Ja, wir versenden in die meisten EU-Länder. Versandkosten und Lieferzeiten variieren je nach Zielland. Außerhalb der EU können zusätzliche Zölle anfallen.',
  },
  {
    id: 7,
    question: 'Wie kann ich Rabattcodes einlösen?',
    answer:
      "Geben Sie Ihren Rabattcode im Warenkorb oder beim Checkout ein. Aktuell verfügbare Codes: 'kauf2zahl3' für reduzierte Preise und 'amogus' für 15€ Rabatt.",
  },
  {
    id: 8,
    question:
      'Was ist mit dem Gold Laptop - generiert er wirklich 1 Bitcoin pro Sekunde?',
    answer:
      'Das ist eine hervorragende Frage! Unser Gold Laptop aus 1999 nutzt fortschrittliche Retro-Mining-Technologie. Ergebnisse können variieren je nach Mondphase und Kaffeekonsum.',
  },
  {
    id: 9,
    question: 'Ist der 180° Winkel sicher zu verwenden?',
    answer:
      'Absolut! Aber vergessen Sie nicht: Ohne gültigen Winkelführerschein ist die Nutzung nicht gestattet. Kurse zum Winkelführerschein bieten wir leider nicht an.',
  },
  {
    id: 10,
    question: 'Wie funktioniert der Kundenservice?',
    answer:
      'Unser freundliches Team ist Montag bis Freitag von 9-18 Uhr für Sie da. Erreichen Sie uns per E-Mail, Telefon oder über das Kontaktformular. Wir antworten meist innerhalb von 24 Stunden.',
  },
]

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border border-gray-200 rounded-lg'>
      <button
        className='w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors'
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className='font-semibold text-gray-900'>{faq.question}</h3>
        {isOpen ? (
          <ChevronUp className='h-5 w-5 text-gray-500' />
        ) : (
          <ChevronDown className='h-5 w-5 text-gray-500' />
        )}
      </button>
      {isOpen && <div className='px-6 pb-4 text-gray-600'>{faq.answer}</div>}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Häufig gestellte Fragen
          </h1>
          <p className='text-xl text-gray-600'>
            Hier finden Sie Antworten auf die häufigsten Fragen zu unserem Shop
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <div className='space-y-4'>
            {faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>

        <div className='text-center'>
          <p className='text-gray-600 mb-4'>Ihre Frage ist nicht dabei?</p>
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
