import { Product, Discount } from '@/types'
import productsData from '../../data/products.json'
import discountsData from '../../data/discounts.json'

export const products: Product[] = productsData as Product[]
export const discounts: Discount[] = discountsData as Discount[]

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category.includes(category))
}

export const getAllCategories = (): string[] => {
  const categories = new Set<string>()
  products.forEach((product) => {
    product.category.forEach((cat) => categories.add(cat))
  })
  return Array.from(categories).sort()
}

export const searchProducts = (searchTerm: string): Product[] => {
  const term = searchTerm.toLowerCase()
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.some((cat) => cat.toLowerCase().includes(term))
  )
}

export const filterProducts = (
  categoryFilter: string[],
  priceRange: { min: number; max: number },
  searchTerm: string
): Product[] => {
  let filtered = products

  // Apply search filter
  if (searchTerm) {
    filtered = searchProducts(searchTerm)
  }

  // Apply category filter
  if (categoryFilter.length > 0) {
    filtered = filtered.filter((product) =>
      product.category.some((cat) => categoryFilter.includes(cat))
    )
  }

  // Apply price filter
  filtered = filtered.filter(
    (product) =>
      product.price >= priceRange.min && product.price <= priceRange.max
  )

  return filtered
}

export const getDiscountByCode = (code: string): Discount | undefined => {
  return discounts.find(
    (discount) => discount.code.toLowerCase() === code.toLowerCase()
  )
}

export const calculateDiscountedPrice = (
  originalPrice: number,
  discount: Discount
): number => {
  if (discount.amount > 0) {
    return Math.max(0, originalPrice - discount.amount)
  }
  if (discount.factor !== 1) {
    return originalPrice * discount.factor
  }
  return originalPrice
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}
