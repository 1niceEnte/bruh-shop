'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import {
  CreditCard,
  Truck,
  Shield,
  ArrowLeft,
  Check,
  AlertCircle,
} from 'lucide-react'
import { motion } from 'framer-motion'

import { useCartStore } from '@/store/cartStore'
import { formatPrice } from '@/lib/data'
import { CustomerInfo } from '@/types'
import GooglePayButtonComponent from '@/components/GooglePayButton'

export default function CheckoutPage() {
  const router = useRouter()
  const {
    items,
    getSubtotal,
    getDiscountAmount,
    getTotal,
    discountCode,
    applyDiscount,
    removeDiscount,
    clearCart,
  } = useCartStore()

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      postalCode: '',
      country: 'Deutschland',
    },
  })

  const [discountInput, setDiscountInput] = useState('')
  const [discountError, setDiscountError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState<
    'credit-card' | 'paypal' | 'bank-transfer' | 'google-pay' | 'naturalien'
  >('credit-card')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [paymentError, setPaymentError] = useState('')

  const subtotal = getSubtotal()
  const discountAmount = getDiscountAmount()
  const total = getTotal()

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      router.push('/')
    }
  }, [items, router])

  const handleInputChange = (
    field: keyof CustomerInfo | string,
    value: string
  ) => {
    if (field.startsWith('address.')) {
      const addressField = field.split('.')[1] as keyof CustomerInfo['address']
      setCustomerInfo((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }))
    } else {
      setCustomerInfo((prev) => ({
        ...prev,
        [field]: value,
      }))
    }
  }

  const handleApplyDiscount = () => {
    setDiscountError('')
    const success = applyDiscount(discountInput)
    if (!success) {
      setDiscountError('Ungültiger Rabattcode')
    } else {
      setDiscountInput('')
    }
  }

  const validateStep1 = () => {
    return (
      customerInfo.firstName &&
      customerInfo.lastName &&
      customerInfo.email &&
      customerInfo.phone &&
      customerInfo.address.street &&
      customerInfo.address.city &&
      customerInfo.address.postalCode
    )
  }

  const handleSubmitOrder = async () => {
    if (!agreedToTerms) {
      alert('Bitte akzeptieren Sie die AGB und Datenschutzerklärung.')
      return
    }

    // Special message for Naturalien payment
    if (paymentMethod === 'naturalien') {
      const confirmed = confirm(
        '🐓 Wichtiger Hinweis: Vergessen Sie nicht, Ihre Naturalien innerhalb von 3 Werktagen an unsere Anlieferungsadresse zu bringen!\n\nHans-Jürgen wartet bereits auf Sie. Fortfahren?'
      )
      if (!confirmed) return
    }

    setIsSubmitting(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Create order ID
    const orderId =
      paymentMethod === 'naturalien'
        ? 'NAT-' + Date.now().toString().slice(-8)
        : 'BUF-' + Date.now().toString().slice(-8)

    // Clear cart and redirect to success page
    clearCart()
    router.push(`/order-confirmation?id=${orderId}&payment=${paymentMethod}`)
  }

  const handleGooglePaySuccess = () => {
    // Create order ID
    const orderId = 'BUF-' + Date.now().toString().slice(-8)

    // Redirect to success page (cart is already cleared by GooglePayButton)
    router.push(`/order-confirmation?id=${orderId}`)
  }

  const handleGooglePayError = (error: string) => {
    setPaymentError(error)
  }

  if (items.length === 0) {
    return null // Will redirect in useEffect
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Header */}
        <div className='mb-8'>
          <button
            onClick={() => router.back()}
            className='flex items-center text-gray-600 hover:text-gray-900 mb-4'
          >
            <ArrowLeft className='h-5 w-5 mr-2' />
            Zurück
          </button>
          <h1 className='text-3xl font-bold text-gray-900'>Kasse</h1>
        </div>

        {/* Progress Bar */}
        <div className='mb-8'>
          <div className='flex items-center'>
            {[1, 2, 3].map((step) => (
              <div key={step} className='flex items-center'>
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    currentStep >= step
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {currentStep > step ? <Check className='h-5 w-5' /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className='flex justify-between mt-2 text-sm text-gray-600'>
            <span>Lieferadresse</span>
            <span>Zahlung</span>
            <span>Bestätigung</span>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Step 1: Customer Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className='bg-white p-6 rounded-lg shadow-sm'
              >
                <h2 className='text-xl font-semibold text-gray-900 mb-6'>
                  Lieferadresse
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Vorname *
                    </label>
                    <input
                      type='text'
                      value={customerInfo.firstName}
                      onChange={(e) =>
                        handleInputChange('firstName', e.target.value)
                      }
                      className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      required
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Nachname *
                    </label>
                    <input
                      type='text'
                      value={customerInfo.lastName}
                      onChange={(e) =>
                        handleInputChange('lastName', e.target.value)
                      }
                      className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      required
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      E-Mail *
                    </label>
                    <input
                      type='email'
                      value={customerInfo.email}
                      onChange={(e) =>
                        handleInputChange('email', e.target.value)
                      }
                      className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      required
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Telefon *
                    </label>
                    <input
                      type='tel'
                      value={customerInfo.phone}
                      onChange={(e) =>
                        handleInputChange('phone', e.target.value)
                      }
                      className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      required
                    />
                  </div>

                  <div className='md:col-span-2'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Straße und Hausnummer *
                    </label>
                    <input
                      type='text'
                      value={customerInfo.address.street}
                      onChange={(e) =>
                        handleInputChange('address.street', e.target.value)
                      }
                      className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      required
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      PLZ *
                    </label>
                    <input
                      type='text'
                      value={customerInfo.address.postalCode}
                      onChange={(e) =>
                        handleInputChange('address.postalCode', e.target.value)
                      }
                      className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      required
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Stadt *
                    </label>
                    <input
                      type='text'
                      value={customerInfo.address.city}
                      onChange={(e) =>
                        handleInputChange('address.city', e.target.value)
                      }
                      className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      required
                    />
                  </div>

                  <div className='md:col-span-2'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Land *
                    </label>
                    <select
                      value={customerInfo.address.country}
                      onChange={(e) =>
                        handleInputChange('address.country', e.target.value)
                      }
                      className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    >
                      <option value='Deutschland'>Deutschland</option>
                      <option value='Österreich'>Österreich</option>
                      <option value='Schweiz'>Schweiz</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!validateStep1()}
                  className='mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors'
                >
                  Weiter zur Zahlung
                </button>
              </motion.div>
            )}

            {/* Step 2: Payment Method */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className='bg-white p-6 rounded-lg shadow-sm'
              >
                <h2 className='text-xl font-semibold text-gray-900 mb-6'>
                  Zahlungsart
                </h2>

                <div className='space-y-4'>
                  {/* Credit Card */}
                  <label className='flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-300'>
                    <input
                      type='radio'
                      name='payment'
                      value='credit-card'
                      checked={paymentMethod === 'credit-card'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className='h-4 w-4 text-blue-600'
                    />
                    <CreditCard className='h-5 w-5 ml-3 mr-3 text-gray-600' />
                    <div>
                      <div className='font-medium'>Kreditkarte</div>
                      <div className='text-sm text-gray-500'>
                        Visa, Mastercard, American Express
                      </div>
                    </div>
                  </label>

                  {/* PayPal */}
                  <label className='flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-300'>
                    <input
                      type='radio'
                      name='payment'
                      value='paypal'
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className='h-4 w-4 text-blue-600'
                    />
                    <div className='h-5 w-5 ml-3 mr-3 bg-blue-600 rounded'></div>
                    <div>
                      <div className='font-medium'>PayPal</div>
                      <div className='text-sm text-gray-500'>
                        Bezahlen Sie sicher mit PayPal
                      </div>
                    </div>
                  </label>

                  {/* Bank Transfer */}
                  <label className='flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-300'>
                    <input
                      type='radio'
                      name='payment'
                      value='bank-transfer'
                      checked={paymentMethod === 'bank-transfer'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className='h-4 w-4 text-blue-600'
                    />
                    <Truck className='h-5 w-5 ml-3 mr-3 text-gray-600' />
                    <div>
                      <div className='font-medium'>Überweisung</div>
                      <div className='text-sm text-gray-500'>
                        Zahlung per Banküberweisung
                      </div>
                    </div>
                  </label>

                  {/* Google Pay */}
                  <label className='flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-300'>
                    <input
                      type='radio'
                      name='payment'
                      value='google-pay'
                      checked={paymentMethod === 'google-pay'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className='h-4 w-4 text-blue-600'
                    />
                    <div className='h-5 w-5 ml-3 mr-3 bg-gradient-to-r from-blue-500 to-green-500 rounded flex items-center justify-center'>
                      <span className='text-white text-xs font-bold'>G</span>
                    </div>
                    <div>
                      <div className='font-medium'>Google Pay</div>
                      <div className='text-sm text-gray-500'>
                        Schnell und sicher mit Google Pay bezahlen
                      </div>
                    </div>
                  </label>

                  {/* Dienstleistungen: Zahlen mit Naturalien */}
                  <label className='flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-orange-300 bg-gradient-to-r from-orange-50 to-yellow-50'>
                    <input
                      type='radio'
                      name='payment'
                      value='naturalien'
                      checked={paymentMethod === 'naturalien'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className='h-4 w-4 text-orange-600'
                    />
                    <div className='h-5 w-5 ml-3 mr-3 bg-gradient-to-r from-green-600 to-yellow-600 rounded flex items-center justify-center'>
                      <span className='text-white text-xs'>🌾</span>
                    </div>
                    <div>
                      <div className='font-medium text-orange-800'>
                        Dienstleistungen: Zahlen mit Naturalien 😉
                      </div>
                      <div className='text-sm text-orange-600'>
                        Kartoffeln, Äpfel, Hühner oder andere Naturalien werden
                        akzeptiert
                      </div>
                    </div>
                  </label>
                </div>

                {/* Google Pay Button - Show when Google Pay is selected */}
                {paymentMethod === 'google-pay' && (
                  <div className='mt-6 p-4 bg-gray-50 rounded-lg'>
                    <GooglePayButtonComponent
                      customerInfo={customerInfo}
                      onPaymentSuccess={handleGooglePaySuccess}
                      onPaymentError={handleGooglePayError}
                    />
                  </div>
                )}

                {/* Naturalien Payment Info - Show when Naturalien is selected */}
                {paymentMethod === 'naturalien' && (
                  <div className='mt-6 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg'>
                    <h3 className='text-lg font-semibold text-orange-800 mb-4'>
                      📦 Zahlung mit Naturalien - Anlieferungsdetails
                    </h3>

                    <div className='space-y-4 text-sm text-orange-700'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <h4 className='font-medium mb-2'>
                            Akzeptierte Naturalien:
                          </h4>
                          <ul className='list-disc list-inside space-y-1'>
                            <li>🥔 Kartoffeln (mind. 5kg)</li>
                            <li>🍎 Äpfel (frisch, mind. 3kg)</li>
                            <li>🐓 Hühner (lebend bevorzugt)</li>
                            <li>🥛 Milch (mind. 2 Liter)</li>
                            <li>🧀 Selbstgemachter Käse</li>
                            <li>🥕 Karotten (mind. 2kg)</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className='font-medium mb-2'>
                            Anlieferungszeiten:
                          </h4>
                          <ul className='list-disc list-inside space-y-1'>
                            <li>Montag-Freitag: 6:00-18:00</li>
                            <li>Samstag: 8:00-14:00</li>
                            <li>Sonntag: Nur Notfälle</li>
                          </ul>

                          <h4 className='font-medium mb-2 mt-4'>
                            Wichtige Hinweise:
                          </h4>
                          <ul className='list-disc list-inside space-y-1'>
                            <li>Qualitätsprüfung vor Ort</li>
                            <li>Hühner müssen gesund sein</li>
                            <li>Keine vergammelten Produkte!</li>
                          </ul>
                        </div>
                      </div>

                      <div className='mt-4 p-3 bg-orange-100 rounded border border-orange-300'>
                        <p className='text-orange-800 font-medium'>
                          🚚 Anlieferungsadresse: Buffbolzen GmbH,
                          Innovationsstraße 42, 12345 Buffhausen
                        </p>
                        <p className='text-orange-700 text-xs mt-1'>
                          Bitte klingeln Sie beim Hintereingang und fragen Sie
                          nach Hans-Jürgen.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Error */}
                {paymentError && (
                  <div className='mt-4 p-3 bg-red-50 border border-red-200 rounded-lg'>
                    <div className='flex items-center text-red-700'>
                      <AlertCircle className='h-4 w-4 mr-2' />
                      <span className='text-sm'>{paymentError}</span>
                    </div>
                  </div>
                )}

                <div className='flex space-x-4 mt-6'>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className='flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors'
                  >
                    Zurück
                  </button>
                  {paymentMethod === 'google-pay' ? (
                    <div className='flex-1 text-center py-3 text-gray-600'>
                      Nutzen Sie den Google Pay Button oben zum Bezahlen
                    </div>
                  ) : paymentMethod === 'naturalien' ? (
                    <div className='flex-1 text-center py-3 text-orange-600'>
                      Bitte bringen Sie Ihre Naturalien zur angegebenen Adresse
                      🚚
                    </div>
                  ) : (
                    <button
                      onClick={() => setCurrentStep(3)}
                      className='flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                    >
                      Weiter zur Bestätigung
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Order Confirmation */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className='bg-white p-6 rounded-lg shadow-sm'
              >
                <h2 className='text-xl font-semibold text-gray-900 mb-6'>
                  Bestellung bestätigen
                </h2>

                {/* Order Summary */}
                <div className='space-y-4 mb-6'>
                  <h3 className='font-medium text-gray-900'>Lieferadresse</h3>
                  <div className='text-sm text-gray-600'>
                    <p>
                      {customerInfo.firstName} {customerInfo.lastName}
                    </p>
                    <p>{customerInfo.address.street}</p>
                    <p>
                      {customerInfo.address.postalCode}{' '}
                      {customerInfo.address.city}
                    </p>
                    <p>{customerInfo.address.country}</p>
                  </div>
                </div>

                <div className='space-y-4 mb-6'>
                  <h3 className='font-medium text-gray-900'>Zahlungsart</h3>
                  <div className='text-sm text-gray-600'>
                    {paymentMethod === 'credit-card' && 'Kreditkarte'}
                    {paymentMethod === 'paypal' && 'PayPal'}
                    {paymentMethod === 'bank-transfer' && 'Banküberweisung'}
                    {paymentMethod === 'google-pay' && 'Google Pay'}
                    {paymentMethod === 'naturalien' &&
                      '🌾 Zahlung mit Naturalien (Anlieferung erforderlich)'}
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className='mb-6'>
                  <label className='flex items-start'>
                    <input
                      type='checkbox'
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className='h-4 w-4 text-blue-600 mt-1 mr-3'
                    />
                    <span className='text-sm text-gray-700'>
                      Ich akzeptiere die{' '}
                      <a href='#' className='text-blue-600 hover:underline'>
                        AGB
                      </a>{' '}
                      und die{' '}
                      <a href='#' className='text-blue-600 hover:underline'>
                        Datenschutzerklärung
                      </a>
                    </span>
                  </label>
                </div>

                <div className='flex space-x-4'>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className='flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors'
                  >
                    Zurück
                  </button>
                  <button
                    onClick={handleSubmitOrder}
                    disabled={!agreedToTerms || isSubmitting}
                    className='flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors'
                  >
                    {isSubmitting ? (
                      <span className='flex items-center justify-center'>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className='w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2'
                        />
                        Bestellung wird verarbeitet...
                      </span>
                    ) : (
                      'Jetzt kostenpflichtig bestellen'
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className='lg:col-span-1'>
            <div className='bg-white p-6 rounded-lg shadow-sm sticky top-8'>
              <h3 className='text-lg font-semibold text-gray-900 mb-6'>
                Bestellübersicht
              </h3>

              {/* Order Items */}
              <div className='space-y-4 mb-6'>
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className='flex items-center space-x-3'
                  >
                    <div className='relative w-16 h-16 flex-shrink-0'>
                      <Image
                        src={`/images/products/${item.product.image}`}
                        alt={item.product.title}
                        fill
                        className='object-cover rounded-md'
                      />
                      <div className='absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                        {item.quantity}
                      </div>
                    </div>
                    <div className='flex-1 min-w-0'>
                      <p className='text-sm font-medium text-gray-900 line-clamp-2'>
                        {item.product.title}
                      </p>
                      <p className='text-sm text-gray-500'>
                        {formatPrice(item.product.price)}
                      </p>
                    </div>
                    <div className='text-sm font-medium text-gray-900'>
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount Code */}
              <div className='mb-6'>
                <div className='flex space-x-2'>
                  <input
                    type='text'
                    placeholder='Rabattcode'
                    value={discountInput}
                    onChange={(e) => setDiscountInput(e.target.value)}
                    className='flex-1 p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  />
                  <button
                    onClick={handleApplyDiscount}
                    className='px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors'
                  >
                    Anwenden
                  </button>
                </div>
                {discountError && (
                  <p className='text-red-600 text-xs mt-1 flex items-center'>
                    <AlertCircle className='h-3 w-3 mr-1' />
                    {discountError}
                  </p>
                )}
                {discountCode && (
                  <div className='mt-2 flex items-center justify-between text-sm'>
                    <span className='text-green-600'>
                      Rabatt aktiv: {discountCode}
                    </span>
                    <button
                      onClick={removeDiscount}
                      className='text-red-600 hover:text-red-800'
                    >
                      Entfernen
                    </button>
                  </div>
                )}
              </div>

              {/* Totals */}
              <div className='space-y-2 border-t border-gray-200 pt-4'>
                <div className='flex justify-between text-sm'>
                  <span>Zwischensumme:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className='flex justify-between text-sm text-green-600'>
                    <span>Rabatt:</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}

                <div className='flex justify-between text-sm'>
                  <span>Versand:</span>
                  <span className='text-green-600'>Kostenlos</span>
                </div>

                <div className='flex justify-between text-lg font-semibold border-t border-gray-200 pt-2'>
                  <span>Gesamt:</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className='mt-6 flex items-center justify-center text-sm text-gray-600'>
                <Shield className='h-4 w-4 mr-2' />
                Sichere SSL-Verschlüsselung
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
