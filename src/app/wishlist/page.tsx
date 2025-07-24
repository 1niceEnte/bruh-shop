'use client'

import { Heart, ShoppingCart, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { useWishlistStore } from '@/store/wishlistStore'
import { useCartStore } from '@/store/cartStore'
import { formatPrice, getImagePath } from '@/lib/data'

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlistStore()
  const { addItem } = useCartStore()

  const handleAddToCart = (product: any) => {
    addItem(product)
  }

  const handleRemoveFromWishlist = (productId: number) => {
    removeItem(productId)
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            Meine Wunschliste
          </h1>
          <p className='text-gray-600'>
            {items.length > 0
              ? `${items.length} ${
                  items.length === 1 ? 'Artikel' : 'Artikel'
                } in Ihrer Wunschliste`
              : 'Ihre Wunschliste ist leer'}
          </p>
        </div>

        {items.length === 0 ? (
          /* Empty State */
          <div className='text-center py-16'>
            <div className='w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center'>
              <Heart className='h-12 w-12 text-gray-400' />
            </div>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Ihre Wunschliste ist leer
            </h2>
            <p className='text-gray-600 mb-8 max-w-md mx-auto'>
              Entdecken Sie unsere Produkte und fügen Sie Ihre Favoriten zur
              Wunschliste hinzu, um sie später zu kaufen.
            </p>
            <Link
              href='/'
              className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center'
            >
              <ShoppingCart className='h-5 w-5 mr-2' />
              Jetzt einkaufen
            </Link>
          </div>
        ) : (
          <>
            {/* Actions Bar */}
            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center space-x-4'>
                <button
                  onClick={() => {
                    items.forEach((product) => addItem(product))
                    clearWishlist()
                  }}
                  className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center'
                >
                  <ShoppingCart className='h-4 w-4 mr-2' />
                  Alle zum Warenkorb hinzufügen
                </button>
              </div>

              <button
                onClick={clearWishlist}
                className='text-red-600 hover:text-red-800 flex items-center'
              >
                <Trash2 className='h-4 w-4 mr-2' />
                Wunschliste leeren
              </button>
            </div>

            {/* Wishlist Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {items.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className='bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200'
                >
                  {/* Product Image */}
                  <div className='relative aspect-square overflow-hidden bg-gray-100'>
                    <Link href={`/product/${product.id}`}>
                      <Image
                        src={getImagePath(`/images/products/${product.image}`)}
                        alt={product.title}
                        fill
                        className='object-cover hover:scale-105 transition-transform duration-300'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                      />
                    </Link>

                    {/* Remove from wishlist button */}
                    <button
                      onClick={() => handleRemoveFromWishlist(product.id)}
                      className='absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg'
                    >
                      <Heart className='h-4 w-4 fill-current' />
                    </button>

                    {/* Category badge */}
                    {product.category.length > 0 && (
                      <div className='absolute top-3 left-3'>
                        <span className='bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full'>
                          {product.category[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className='p-4 space-y-3'>
                    {/* Title */}
                    <Link href={`/product/${product.id}`}>
                      <h3 className='font-semibold text-gray-900 line-clamp-2 text-sm hover:text-blue-600 transition-colors'>
                        {product.title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className='text-gray-600 text-xs line-clamp-2'>
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className='flex items-center justify-between'>
                      <div>
                        <span className='text-lg font-bold text-gray-900'>
                          {formatPrice(product.price)}
                        </span>
                        {product.unit && (
                          <span className='text-xs text-gray-500 ml-1'>
                            / {product.unit}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className='flex space-x-2'>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center'
                      >
                        <ShoppingCart className='h-4 w-4 mr-2' />
                        In den Warenkorb
                      </button>
                      <button
                        onClick={() => handleRemoveFromWishlist(product.id)}
                        className='p-2 border border-gray-300 rounded-lg hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors'
                      >
                        <Trash2 className='h-4 w-4' />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
