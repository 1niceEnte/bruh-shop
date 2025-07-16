import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types'

interface WishlistStore {
  items: Product[]

  // Actions
  addItem: (product: Product) => void
  removeItem: (productId: number) => void
  isInWishlist: (productId: number) => boolean
  clearWishlist: () => void
  toggleItem: (product: Product) => void

  // Computed values
  getItemCount: () => number
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product) => {
        set((state) => {
          const exists = state.items.find((item) => item.id === product.id)
          if (!exists) {
            return { items: [...state.items, product] }
          }
          return state
        })
      },

      removeItem: (productId: number) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }))
      },

      isInWishlist: (productId: number) => {
        const state = get()
        return state.items.some((item) => item.id === productId)
      },

      clearWishlist: () => {
        set({ items: [] })
      },

      toggleItem: (product: Product) => {
        const state = get()
        if (state.isInWishlist(product.id)) {
          state.removeItem(product.id)
        } else {
          state.addItem(product)
        }
      },

      getItemCount: () => {
        const state = get()
        return state.items.length
      },
    }),
    {
      name: 'buffbolzen-wishlist-storage',
    }
  )
)
