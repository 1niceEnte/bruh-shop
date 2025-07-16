'use client'

import React, { useEffect, useState } from 'react'
import GooglePayButton from '@google-pay/button-react'
import { useCartStore } from '@/store/cartStore'
import { CustomerInfo } from '@/types'

interface GooglePayButtonComponentProps {
  customerInfo: CustomerInfo
  onPaymentSuccess: () => void
  onPaymentError: (error: string) => void
}

export default function GooglePayButtonComponent({
  customerInfo,
  onPaymentSuccess,
  onPaymentError,
}: GooglePayButtonComponentProps) {
  const { getTotal, items, clearCart } = useCartStore()
  const [isGooglePayReady, setIsGooglePayReady] = useState(false)

  const total = getTotal()

  // Check if Google Pay is available
  useEffect(() => {
    if (typeof window !== 'undefined' && window.google?.payments) {
      const paymentsClient = new window.google.payments.api.PaymentsClient({
        environment: 'TEST', // Use 'PRODUCTION' for live environment
      })

      const isReadyToPayRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
          },
        ],
      }

      paymentsClient
        .isReadyToPay(isReadyToPayRequest)
        .then((response) => {
          if (response.result) {
            setIsGooglePayReady(true)
          }
        })
        .catch((err) => {
          console.error('Error checking Google Pay availability:', err)
        })
    }
  }, [])

  const handleGooglePaymentSuccess = (paymentData: any) => {
    console.log('Google Pay payment successful:', paymentData)

    // Here you would typically send the payment data to your backend
    // For now, we'll simulate success
    try {
      // Extract payment token
      const paymentToken = paymentData.paymentMethodData.tokenizationData.token

      // In a real implementation, you would:
      // 1. Send the token to your backend
      // 2. Process the payment with your payment processor
      // 3. Handle the response

      console.log('Payment token:', paymentToken)

      // Simulate successful payment processing
      setTimeout(() => {
        clearCart()
        onPaymentSuccess()
      }, 1000)
    } catch (error) {
      console.error('Error processing Google Pay payment:', error)
      onPaymentError('Fehler bei der Verarbeitung der Google Pay-Zahlung')
    }
  }

  const handleGooglePaymentError = (error: any) => {
    console.error('Google Pay payment error:', error)
    onPaymentError('Google Pay-Zahlung fehlgeschlagen')
  }

  if (!isGooglePayReady) {
    return (
      <div className='text-center py-4 text-gray-500'>
        Google Pay wird geladen...
      </div>
    )
  }

  return (
    <div className='w-full'>
      <GooglePayButton
        environment='TEST' // Use "PRODUCTION" for live environment
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA', 'AMEX'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example', // Replace with your payment gateway
                  gatewayMerchantId: 'exampleGatewayMerchantId', // Replace with your merchant ID
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890', // Replace with your Google Pay merchant ID
            merchantName: 'Buffbolzen Shop',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Gesamt',
            totalPrice: total.toFixed(2),
            currencyCode: 'EUR',
            countryCode: 'DE',
          },
          shippingAddressRequired: false,
          callbackIntents: ['PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={handleGooglePaymentSuccess}
        onError={handleGooglePaymentError}
        onPaymentAuthorized={(paymentData) => {
          console.log('Payment authorized:', paymentData)
          return { transactionState: 'SUCCESS' }
        }}
        existingPaymentMethodRequired={false}
        buttonColor='black'
        buttonType='pay'
        buttonSizeMode='fill'
        buttonLocale='de'
        className='w-full'
      />

      <div className='mt-2 text-xs text-gray-500 text-center'>
        Sichere Zahlung mit Google Pay
      </div>
    </div>
  )
}
