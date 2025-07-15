'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import {
  CheckCircle,
  Download,
  Mail,
  ArrowRight,
  Home,
  Package,
  Truck,
  CreditCard,
  Clock,
  MapPin,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function OrderConfirmationContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [orderId, setOrderId] = useState<string | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null)

  useEffect(() => {
    const id = searchParams.get('id')
    const payment = searchParams.get('payment')
    if (!id) {
      router.push('/')
    } else {
      setOrderId(id)
      setPaymentMethod(payment)
    }
  }, [searchParams, router])

  if (!orderId) {
    return null
  }

  const isNaturalienPayment =
    paymentMethod === 'naturalien' || orderId?.startsWith('NAT-')
  const isGooglePayPayment = paymentMethod === 'google-pay'

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              isNaturalienPayment
                ? 'bg-orange-100 dark:bg-orange-900'
                : 'bg-green-100 dark:bg-green-900'
            }`}
          >
            {isNaturalienPayment ? (
              <span className='text-4xl'>🌾</span>
            ) : (
              <CheckCircle
                className={`h-12 w-12 ${
                  isNaturalienPayment ? 'text-orange-600' : 'text-green-600'
                }`}
              />
            )}
          </motion.div>

          {/* Title */}
          <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
            {isNaturalienPayment
              ? 'Vielen Dank für Ihre Naturalien-Bestellung! 🐓'
              : 'Vielen Dank für Ihre Bestellung!'}
          </h1>

          <p className='text-lg text-gray-600 dark:text-gray-400 mb-8'>
            {isNaturalienPayment
              ? 'Ihre Bestellung wurde erfolgreich aufgegeben. Bitte bringen Sie Ihre Naturalien innerhalb von 3 Werktagen zu Hans-Jürgen.'
              : 'Ihre Bestellung wurde erfolgreich aufgegeben und wird bearbeitet.'}
          </p>

          {/* Order Details Card */}
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8 text-left'>
            <div className='border-b border-gray-200 dark:border-gray-700 pb-6 mb-6'>
              <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                {isNaturalienPayment
                  ? 'Naturalien-Bestellbestätigung 🌾'
                  : 'Bestellbestätigung'}
              </h2>
              <div className='flex items-center justify-between'>
                <span className='text-gray-600 dark:text-gray-400'>
                  Bestellnummer:
                </span>
                <span
                  className={`font-mono text-lg font-semibold ${
                    isNaturalienPayment
                      ? 'text-orange-600 dark:text-orange-400'
                      : 'text-blue-600 dark:text-blue-400'
                  }`}
                >
                  {orderId}
                </span>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='text-gray-600 dark:text-gray-400'>
                  Bestelldatum:
                </span>
                <span className='font-medium text-gray-900 dark:text-white'>
                  {new Date().toLocaleDateString('de-DE')}
                </span>
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-gray-600 dark:text-gray-400'>
                  Zahlungsart:
                </span>
                <span className='font-medium text-gray-900 dark:text-white'>
                  {paymentMethod === 'naturalien' && '🌾 Naturalien'}
                  {paymentMethod === 'google-pay' && '🅖 Google Pay'}
                  {paymentMethod === 'credit-card' && '💳 Kreditkarte'}
                  {paymentMethod === 'paypal' && '💙 PayPal'}
                  {paymentMethod === 'bank-transfer' && '🏦 Überweisung'}
                  {!paymentMethod && '💳 Kreditkarte'}
                </span>
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-gray-600 dark:text-gray-400'>
                  Status:
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isNaturalienPayment
                      ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
                      : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                  }`}
                >
                  {isNaturalienPayment
                    ? 'Wartet auf Naturalien'
                    : 'In Bearbeitung'}
                </span>
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-gray-600 dark:text-gray-400'>
                  {isNaturalienPayment
                    ? 'Anlieferungsfrist:'
                    : 'Voraussichtliche Lieferung:'}
                </span>
                <span className='font-medium text-gray-900 dark:text-white'>
                  {new Date(
                    Date.now() + 3 * 24 * 60 * 60 * 1000
                  ).toLocaleDateString('de-DE')}
                </span>
              </div>
            </div>
          </div>

          {/* What happens next */}
          <div
            className={`rounded-lg p-6 mb-8 ${
              isNaturalienPayment
                ? 'bg-orange-50 dark:bg-orange-900/20'
                : 'bg-blue-50 dark:bg-blue-900/20'
            }`}
          >
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Was passiert als Nächstes?
            </h3>
            <div className='space-y-4 text-left'>
              {isNaturalienPayment ? (
                <>
                  <div className='flex items-start'>
                    <div className='w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5'>
                      <span>🌾</span>
                    </div>
                    <div>
                      <p className='font-medium text-gray-900 dark:text-white'>
                        Naturalien vorbereiten
                      </p>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Sammeln Sie Ihre Kartoffeln, Äpfel, Hühner oder andere
                        Naturalien. Mindestqualität beachten!
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5'>
                      <Truck className='h-4 w-4' />
                    </div>
                    <div>
                      <p className='font-medium text-gray-900 dark:text-white'>
                        Anlieferung zu Hans-Jürgen
                      </p>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Bringen Sie Ihre Naturalien innerhalb von 3 Werktagen
                        zur Buffbolzen GmbH, Innovationsstraße 42. Hintereingang
                        benutzen!
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5'>
                      <CheckCircle className='h-4 w-4' />
                    </div>
                    <div>
                      <p className='font-medium text-gray-900 dark:text-white'>
                        Qualitätsprüfung & Versand
                      </p>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Hans-Jürgen prüft Ihre Naturalien und wir senden Ihre
                        Bestellung.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className='flex items-start'>
                    <div className='w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5'>
                      <Mail className='h-4 w-4' />
                    </div>
                    <div>
                      <p className='font-medium text-gray-900 dark:text-white'>
                        Bestellbestätigung per E-Mail
                      </p>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Sie erhalten in wenigen Minuten eine Bestätigung an Ihre
                        E-Mail-Adresse.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5'>
                      <Package className='h-4 w-4' />
                    </div>
                    <div>
                      <p className='font-medium text-gray-900 dark:text-white'>
                        Bestellbearbeitung
                      </p>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Wir bereiten Ihre Bestellung sorgfältig vor und
                        verpacken sie.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5'>
                      <Truck className='h-4 w-4' />
                    </div>
                    <div>
                      <p className='font-medium text-gray-900 dark:text-white'>
                        Versand & Tracking
                      </p>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Sie erhalten eine Tracking-Nummer, um Ihre Sendung zu
                        verfolgen.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className='space-y-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <button
                onClick={() => window.print()}
                className='flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
              >
                <Download className='h-5 w-5 mr-2' />
                Bestellung drucken
              </button>

              <button
                onClick={() =>
                  (window.location.href = 'mailto:support@buffbolzen.com')
                }
                className='flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
              >
                <Mail className='h-5 w-5 mr-2' />
                Support kontaktieren
              </button>
            </div>

            {isNaturalienPayment && (
              <div className='bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-lg p-4'>
                <div className='flex items-center space-x-3'>
                  <MapPin className='h-5 w-5 text-orange-600 dark:text-orange-400' />
                  <div>
                    <p className='font-medium text-orange-800 dark:text-orange-200'>
                      Anlieferungsadresse für Naturalien:
                    </p>
                    <p className='text-sm text-orange-700 dark:text-orange-300'>
                      Buffbolzen GmbH, Innovationsstraße 42, 12345 Buffhausen
                      <br />
                      Hintereingang → Nach Hans-Jürgen fragen
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => router.push('/')}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center text-white ${
                isNaturalienPayment
                  ? 'bg-orange-600 hover:bg-orange-700'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              <Home className='h-5 w-5 mr-2' />
              Zurück zum Shop
            </button>
          </div>

          {/* Additional Information */}
          <div className='mt-12 text-center'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Brauchen Sie Hilfe?
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
              {isNaturalienPayment
                ? 'Hans-Jürgen und unser Kundenservice stehen Ihnen zur Verfügung.'
                : 'Unser Kundenservice steht Ihnen gerne zur Verfügung.'}
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 dark:text-gray-400'>
              <span>📞 +49 (0) 123 456 789</span>
              <span>✉️ support@buffbolzen.com</span>
              <span>🕒 Mo-Fr 9:00-18:00 Uhr</span>
              {isNaturalienPayment && (
                <span>🌾 Hans-Jürgen: Mo-Sa 6:00-18:00</span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
