'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Heart,
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Share2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { motion } from 'framer-motion'

import { products, formatPrice, getImagePath } from '@/lib/data'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/types'

interface ProductPageClientProps {
  product: Product
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const { addItem } = useCartStore()
  const { toggleItem, isInWishlist } = useWishlistStore()

  const inWishlist = isInWishlist(product.id)

  // Get related products from the same category
  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.category.some((cat) => product.category.includes(cat))
    )
    .slice(0, 4)

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: 'Max Mustermann',
      rating: 5,
      comment:
        'Excellentes Produkt! Genau wie beschrieben und schnelle Lieferung.',
      date: '2024-01-15',
    },
    {
      id: 2,
      name: 'Anna Schmidt',
      rating: 4,
      comment: 'Sehr zufrieden mit der Qualität. Preis-Leistung stimmt.',
      date: '2024-01-10',
    },
    {
      id: 3,
      name: 'Tom Weber',
      rating: 5,
      comment: 'Top Produkt! Kann ich nur weiterempfehlen.',
      date: '2024-01-05',
    },
  ]

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    addItem(product, quantity)

    setTimeout(() => {
      setIsAddingToCart(false)
    }, 1000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: product.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  // Mock product images (using the same image multiple times for demo)
  const productImages = [
    getImagePath(`/images/products/${product.image}`),
    getImagePath(`/images/products/${product.image}`),
    getImagePath(`/images/products/${product.image}`),
  ]

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Breadcrumb */}
        <nav className='mb-8'>
          <ol className='flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400'>
            <li>
              <a
                href='/'
                className='hover:text-blue-600 dark:hover:text-blue-400'
              >
                Startseite
              </a>
            </li>
            <li>/</li>
            {product.category.length > 0 && (
              <>
                <li>
                  <a
                    href={`/category/${product.category[0]}`}
                    className='hover:text-blue-600 dark:hover:text-blue-400'
                  >
                    {product.category[0]}
                  </a>
                </li>
                <li>/</li>
              </>
            )}
            <li className='text-gray-900 dark:text-white'>{product.title}</li>
          </ol>
        </nav>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Product Images */}
          <div className='space-y-4'>
            {/* Main Image */}
            <div className='relative aspect-square overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800'>
              <Image
                src={productImages[selectedImageIndex]}
                alt={product.title}
                fill
                className='object-cover'
                priority
              />

              {/* Navigation arrows */}
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === 0 ? productImages.length - 1 : prev - 1
                      )
                    }
                    className='absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800'
                  >
                    <ChevronLeft className='h-5 w-5' />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === productImages.length - 1 ? 0 : prev + 1
                      )
                    }
                    className='absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800'
                  >
                    <ChevronRight className='h-5 w-5' />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            {productImages.length > 1 && (
              <div className='flex space-x-4'>
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImageIndex === index
                        ? 'border-blue-600'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className='object-cover'
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className='space-y-6'>
            {/* Header */}
            <div>
              <div className='flex items-start justify-between mb-4'>
                <div>
                  <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
                    {product.title}
                  </h1>
                  {product.category.length > 0 && (
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {product.category.map((cat) => (
                        <span
                          key={cat}
                          className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded-full'
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className='flex space-x-2'>
                  <button
                    onClick={() => toggleItem(product)}
                    className={`p-3 rounded-full transition-all ${
                      inWishlist
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 ${inWishlist ? 'fill-current' : ''}`}
                    />
                  </button>
                  <button
                    onClick={handleShare}
                    className='p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-blue-500 hover:text-white transition-all'
                  >
                    <Share2 className='h-5 w-5' />
                  </button>
                </div>
              </div>

              {/* Rating */}
              <div className='flex items-center space-x-2 mb-4'>
                <div className='flex items-center'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(averageRating)
                          ? 'text-yellow-400 fill-current'
                          : i < averageRating
                          ? 'text-yellow-400 fill-current opacity-50'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className='text-sm text-gray-600 dark:text-gray-400'>
                  {averageRating.toFixed(1)} ({reviews.length} Bewertungen)
                </span>
              </div>

              {/* Price */}
              <div className='mb-6'>
                <span className='text-4xl font-bold text-gray-900 dark:text-white'>
                  {formatPrice(product.price)}
                </span>
                {product.unit && (
                  <span className='text-lg text-gray-500 dark:text-gray-400 ml-2'>
                    / {product.unit}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
                Beschreibung
              </h3>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                {product.description}
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Menge
                </label>
                <div className='flex items-center space-x-4'>
                  <div className='flex items-center border border-gray-300 dark:border-gray-600 rounded-lg'>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className='p-2 hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                      <Minus className='h-4 w-4' />
                    </button>
                    <span className='px-4 py-2 font-medium text-gray-900 dark:text-white'>
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className='p-2 hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                      <Plus className='h-4 w-4' />
                    </button>
                  </div>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>
                    Gesamt: {formatPrice(product.price * quantity)}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                  isAddingToCart
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
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
                      className='w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3'
                    />
                    Zum Warenkorb hinzugefügt!
                  </span>
                ) : (
                  <span className='flex items-center justify-center'>
                    <ShoppingCart className='h-5 w-5 mr-2' />
                    In den Warenkorb ({formatPrice(product.price * quantity)})
                  </span>
                )}
              </button>
            </div>

            {/* Product Details */}
            <div className='bg-gray-100 dark:bg-gray-800 p-6 rounded-lg'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                Produktdetails
              </h3>
              <dl className='space-y-2'>
                <div className='flex justify-between'>
                  <dt className='text-gray-600 dark:text-gray-400'>
                    Artikel-ID:
                  </dt>
                  <dd className='font-medium text-gray-900 dark:text-white'>
                    #{product.id.toString().padStart(6, '0')}
                  </dd>
                </div>
                <div className='flex justify-between'>
                  <dt className='text-gray-600 dark:text-gray-400'>
                    Kategorien:
                  </dt>
                  <dd className='font-medium text-gray-900 dark:text-white'>
                    {product.category.join(', ') || 'Keine'}
                  </dd>
                </div>
                {product.unit && (
                  <div className='flex justify-between'>
                    <dt className='text-gray-600 dark:text-gray-400'>
                      Einheit:
                    </dt>
                    <dd className='font-medium text-gray-900 dark:text-white'>
                      {product.unit}
                    </dd>
                  </div>
                )}
                <div className='flex justify-between'>
                  <dt className='text-gray-600 dark:text-gray-400'>
                    Verfügbarkeit:
                  </dt>
                  <dd className='font-medium text-green-600'>Auf Lager</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className='mt-16'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
            Kundenbewertungen
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Rating Summary */}
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-gray-900 dark:text-white mb-2'>
                  {averageRating.toFixed(1)}
                </div>
                <div className='flex items-center justify-center mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(averageRating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <p className='text-gray-600 dark:text-gray-400'>
                  Basierend auf {reviews.length} Bewertungen
                </p>
              </div>
            </div>

            {/* Reviews List */}
            <div className='lg:col-span-2 space-y-6'>
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm'
                >
                  <div className='flex items-start justify-between mb-4'>
                    <div>
                      <h4 className='font-semibold text-gray-900 dark:text-white'>
                        {review.name}
                      </h4>
                      <div className='flex items-center mt-1'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>
                      {review.date}
                    </span>
                  </div>
                  <p className='text-gray-700 dark:text-gray-300'>
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className='mt-16'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
              Ähnliche Produkte
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
