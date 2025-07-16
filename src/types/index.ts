export interface Product {
  id: number
  category: string[]
  title: string
  description: string
  image: string
  price: number
  unit: string | null
}

export interface Discount {
  code: string
  amount: number
  factor: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
  discountCode?: string
  discountAmount?: number
}

export interface OrderItem {
  productId: number
  title: string
  price: number
  quantity: number
  total: number
}

export interface Order {
  id: string
  items: OrderItem[]
  subtotal: number
  discountCode?: string
  discountAmount?: number
  total: number
  customerInfo: CustomerInfo
  createdAt: Date
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered'
}

export interface CustomerInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: {
    street: string
    city: string
    postalCode: string
    country: string
  }
}

export interface FilterOptions {
  categories: string[]
  priceRange: {
    min: number
    max: number
  }
  searchTerm: string
}
