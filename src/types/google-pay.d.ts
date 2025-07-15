declare global {
  interface Window {
    google?: {
      payments?: {
        api?: {
          PaymentsClient: new (config: {
            environment: 'TEST' | 'PRODUCTION'
          }) => {
            isReadyToPay: (request: any) => Promise<{ result: boolean }>
            loadPaymentData: (request: any) => Promise<any>
          }
        }
      }
    }
  }
}

export interface GooglePayPaymentData {
  paymentMethodData: {
    tokenizationData: {
      token: string
    }
    info: {
      cardNetwork: string
      cardDetails: string
    }
    type: string
  }
}

export interface GooglePaymentRequest {
  apiVersion: number
  apiVersionMinor: number
  allowedPaymentMethods: Array<{
    type: string
    parameters: {
      allowedAuthMethods: string[]
      allowedCardNetworks: string[]
    }
    tokenizationSpecification: {
      type: string
      parameters: {
        gateway: string
        gatewayMerchantId: string
      }
    }
  }>
  merchantInfo: {
    merchantId: string
    merchantName: string
  }
  transactionInfo: {
    totalPriceStatus: string
    totalPriceLabel: string
    totalPrice: string
    currencyCode: string
    countryCode: string
  }
  shippingAddressRequired: boolean
  callbackIntents: string[]
}
