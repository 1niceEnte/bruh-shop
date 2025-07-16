import { Product, Discount } from '@/types'
import productsData from '../../data/products.json'
import discountsData from '../../data/discounts.json'

export const products: Product[] = productsData as Product[]
export const discounts: Discount[] = discountsData as Discount[]

// Utility function to handle image paths correctly for GitHub Pages
export const getImagePath = (imagePath: string): string => {
  // Check if we're in production and have a basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/bruh-shop' : ''

  // If the path already starts with basePath, don't add it again
  if (imagePath.startsWith(basePath)) {
    return imagePath
  }

  // Add basePath for production builds
  return `${basePath}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`
}

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

// Utility function to handle category URL encoding safely
export const encodeCategoryForUrl = (category: string): string => {
  // Use encodeURIComponent but also handle potential double-encoding issues
  return encodeURIComponent(category).replace(/'/g, '%27')
}

export const decodeCategoryFromUrl = (encodedCategory: string): string => {
  try {
    // Decode and normalize the category name
    return decodeURIComponent(encodedCategory).normalize('NFC')
  } catch (error) {
    // Fallback for malformed URLs
    console.warn('Failed to decode category URL:', encodedCategory, error)
    return encodedCategory
  }
}

// Enhanced category validation
export const isValidCategory = (category: string): boolean => {
  const allCategories = getAllCategories()
  return allCategories.includes(category)
}
