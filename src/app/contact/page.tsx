import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt - Buffbolzen',
  description: 'Kontaktieren Sie uns - Wir sind für Sie da!',
}

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Kontakt</h1>
          <p className='text-xl text-gray-600'>
            Haben Sie Fragen? Wir sind für Sie da!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>
              Kontaktinformationen
            </h2>

            <div className='space-y-6'>
              <div className='flex items-start space-x-4'>
                <Mail className='h-6 w-6 text-blue-600 mt-1' />
                <div>
                  <h3 className='font-semibold text-gray-900'>E-Mail</h3>
                  <p className='text-gray-600'>info@buffbolzen.de</p>
                  <p className='text-gray-600'>support@buffbolzen.de</p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <Phone className='h-6 w-6 text-blue-600 mt-1' />
                <div>
                  <h3 className='font-semibold text-gray-900'>Telefon</h3>
                  <p className='text-gray-600'>+49 (0) 123 456 789</p>
                  <p className='text-gray-600'>
                    Montag - Freitag: 9:00 - 18:00 Uhr
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <MapPin className='h-6 w-6 text-blue-600 mt-1' />
                <div>
                  <h3 className='font-semibold text-gray-900'>Adresse</h3>
                  <p className='text-gray-600'>
                    Buffbolzen GmbH
                    <br />
                    Innovationsstraße 42
                    <br />
                    12345 Buffhausen
                    <br />
                    Deutschland
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <Clock className='h-6 w-6 text-blue-600 mt-1' />
                <div>
                  <h3 className='font-semibold text-gray-900'>
                    Öffnungszeiten
                  </h3>
                  <p className='text-gray-600'>
                    Montag - Freitag: 9:00 - 18:00 Uhr
                    <br />
                    Samstag: 10:00 - 16:00 Uhr
                    <br />
                    Sonntag: Geschlossen
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>
              Nachricht senden
            </h2>

            <form className='space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='firstName'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Vorname
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    required
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
                <div>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Nachname
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    required
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  E-Mail-Adresse
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Betreff
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Nachricht
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Teilen Sie uns Ihr Anliegen mit...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium'
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
