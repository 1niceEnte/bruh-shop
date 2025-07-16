'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { Product } from '@/types'
import { formatPrice, getImagePath } from '@/lib/data'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCartStore()
  const { toggleItem, isInWishlist } = useWishlistStore()
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsAddingToCart(true)
    addItem(product)

    // Visual feedback
    setTimeout(() => {
      setIsAddingToCart(false)
    }, 1000)
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleItem(product)
  }

  // Generate a fake rating for demonstration
  const rating = 3.5 + (product.id % 3) * 0.5
  const reviewCount = 15 + ((product.id * 7) % 85)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className='group'
    >
      <Link href={`/product/${product.id}`}>
        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400'>
          {/* Image container */}
          <div className='relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700'>
            <Image
              src={getImagePath(`/images/products/${product.image}`)}
              alt={product.title}
              fill
              className='object-cover group-hover:scale-105 transition-transform duration-300'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />

            {/* Category badge */}
            {product.category.length > 0 && (
              <div className='absolute top-3 left-3'>
                <span className='bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full'>
                  {product.category[0]}
                </span>
              </div>
            )}

            {/* Wishlist button */}
            <button
              onClick={handleToggleWishlist}
              className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                inWishlist
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white'
              }`}
            >
              <Heart
                className={`h-4 w-4 ${inWishlist ? 'fill-current' : ''}`}
              />
            </button>

            {/* Quick add to cart - appears on hover */}
            <div className='absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isAddingToCart
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } shadow-lg`}
              >
                {isAddingToCart ? (
                  <span className='flex items-center justify-center'>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className='w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2'
                    />
                    Hinzugefügt!
                  </span>
                ) : (
                  <span className='flex items-center justify-center'>
                    <ShoppingCart className='h-4 w-4 mr-2' />
                    In den Warenkorb
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className='p-4 space-y-3'>
            {/* Title */}
            <h3 className='font-semibold text-gray-900 dark:text-white line-clamp-2 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
              {product.title}
            </h3>

            {/* Description */}
            <p className='text-gray-600 dark:text-gray-300 text-xs line-clamp-2'>
              {product.description}
            </p>

            {/* Rating */}
            <div className='flex items-center space-x-1'>
              <div className='flex items-center'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(rating)
                        ? 'text-yellow-400 fill-current'
                        : i < rating
                        ? 'text-yellow-400 fill-current opacity-50'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className='text-xs text-gray-500 dark:text-gray-400'>
                {rating.toFixed(1)} ({reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className='flex items-center justify-between'>
              <div>
                <span className='text-lg font-bold text-gray-900 dark:text-white'>
                  {formatPrice(product.price)}
                </span>
                {product.unit && (
                  <span className='text-xs text-gray-500 dark:text-gray-400 ml-1'>
                    / {product.unit}
                  </span>
                )}
              </div>

              {/* Desktop add to cart button */}
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className='md:hidden p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
              >
                <ShoppingCart className='h-4 w-4' />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
