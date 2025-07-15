import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, CartItem, Discount } from '@/types'
import { getDiscountByCode, calculateDiscountedPrice } from '@/lib/data'

interface CartStore {
  items: CartItem[]
  discountCode?: string
  discount?: Discount
  isOpen: boolean

  // Actions
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  applyDiscount: (code: string) => boolean
  removeDiscount: () => void
  toggleCart: () => void
  closeCart: () => void

  // Computed values
  getSubtotal: () => number
  getDiscountAmount: () => number
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product: Product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          )

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            }
          } else {
            return {
              items: [...state.items, { product, quantity }],
            }
          }
        })
      },

      removeItem: (productId: number) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }))
      },

      updateQuantity: (productId: number, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        }))
      },

      clearCart: () => {
        set({ items: [], discountCode: undefined, discount: undefined })
      },

      applyDiscount: (code: string) => {
        const discount = getDiscountByCode(code)
        if (discount) {
          set({ discountCode: code, discount })
          return true
        }
        return false
      },

      removeDiscount: () => {
        set({ discountCode: undefined, discount: undefined })
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }))
      },

      closeCart: () => {
        set({ isOpen: false })
      },

      getSubtotal: () => {
        const state = get()
        return state.items.reduce((total, item) => {
          return total + item.product.price * item.quantity
        }, 0)
      },

      getDiscountAmount: () => {
        const state = get()
        const subtotal = state.getSubtotal()

        if (!state.discount) return 0

        if (state.discount.amount > 0) {
          return state.discount.amount
        }

        if (state.discount.factor !== 1) {
          return subtotal - subtotal * state.discount.factor
        }

        return 0
      },

      getTotal: () => {
        const state = get()
        const subtotal = state.getSubtotal()
        const discountAmount = state.getDiscountAmount()
        return Math.max(0, subtotal - discountAmount)
      },

      getItemCount: () => {
        const state = get()
        return state.items.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: 'buffbolzen-cart-storage',
      partialize: (state) => ({
        items: state.items,
        discountCode: state.discountCode,
        discount: state.discount,
      }),
    }
  )
)
