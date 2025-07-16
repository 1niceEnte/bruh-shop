'use client'

import { X, Plus, Minus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { formatPrice, getImagePath } from '@/lib/data'
import { motion, AnimatePresence } from 'framer-motion'

export default function CartSidebar() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    getSubtotal,
    getDiscountAmount,
    getTotal,
    discountCode,
  } = useCartStore()

  const subtotal = getSubtotal()
  const discountAmount = getDiscountAmount()
  const total = getTotal()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className='fixed inset-0 bg-black bg-opacity-50 z-50'
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className='fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col'
          >
            {/* Header */}
            <div className='flex items-center justify-between p-4 border-b border-gray-200'>
              <h2 className='text-lg font-semibold text-gray-900'>
                Warenkorb ({items.length})
              </h2>
              <button
                onClick={closeCart}
                className='p-2 hover:bg-gray-100 rounded-lg'
              >
                <X className='h-5 w-5' />
              </button>
            </div>

            {/* Content */}
            {items.length === 0 ? (
              <div className='flex-1 flex items-center justify-center p-8 text-center'>
                <div>
                  <div className='text-gray-400 mb-4'>
                    <div className='w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center'>
                      <Trash2 className='h-8 w-8' />
                    </div>
                  </div>
                  <h3 className='text-lg font-medium text-gray-900 mb-2'>
                    Warenkorb ist leer
                  </h3>
                  <p className='text-gray-500 mb-4'>
                    Fügen Sie Produkte hinzu, um loszulegen
                  </p>
                  <button
                    onClick={closeCart}
                    className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                  >
                    Weitershoppen
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Items */}
                <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className='flex items-start space-x-3 p-3 bg-gray-50 rounded-lg'
                    >
                      <div className='relative w-16 h-16 flex-shrink-0'>
                        <Image
                          src={getImagePath(
                            `/images/products/${item.product.image}`
                          )}
                          alt={item.product.title}
                          fill
                          className='object-cover rounded-md'
                        />
                      </div>

                      <div className='flex-1 min-w-0'>
                        <h4 className='text-sm font-medium text-gray-900 line-clamp-2'>
                          {item.product.title}
                        </h4>
                        <p className='text-sm text-gray-600 mt-1'>
                          {formatPrice(item.product.price)}
                          {item.product.unit && ` / ${item.product.unit}`}
                        </p>

                        {/* Quantity controls */}
                        <div className='flex items-center space-x-2 mt-2'>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className='p-1 hover:bg-gray-200 rounded'
                          >
                            <Minus className='h-4 w-4' />
                          </button>
                          <span className='text-sm font-medium px-2 py-1 bg-white rounded border'>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className='p-1 hover:bg-gray-200 rounded'
                          >
                            <Plus className='h-4 w-4' />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className='p-1 hover:bg-red-100 rounded text-red-600 ml-2'
                          >
                            <Trash2 className='h-4 w-4' />
                          </button>
                        </div>
                      </div>

                      <div className='text-sm font-medium text-gray-900'>
                        {formatPrice(item.product.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className='border-t border-gray-200 p-4 space-y-4'>
                  {/* Totals */}
                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span>Zwischensumme:</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>

                    {discountCode && discountAmount > 0 && (
                      <div className='flex justify-between text-sm text-green-600'>
                        <span>Rabatt ({discountCode}):</span>
                        <span>-{formatPrice(discountAmount)}</span>
                      </div>
                    )}

                    <div className='flex justify-between text-lg font-semibold border-t border-gray-200 pt-2'>
                      <span>Gesamt:</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className='space-y-2'>
                    <Link
                      href='/checkout'
                      onClick={closeCart}
                      className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block font-medium'
                    >
                      Zur Kasse
                    </Link>
                    <button
                      onClick={closeCart}
                      className='w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium'
                    >
                      Weitershoppen
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
