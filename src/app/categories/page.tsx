'use client'

import Link from 'next/link'
import { getAllCategories, getProductsByCategory, encodeCategoryForUrl } from '@/lib/data'
import { motion } from 'framer-motion'
import { ArrowRight, Package } from 'lucide-react'

export default function CategoriesPage() {
  const categories = getAllCategories()

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Header */}
        <div className='text-center mb-12'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-4xl font-bold text-gray-900 dark:text-white mb-4'
          >
            Alle Kategorien
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'
          >
            Durchstöbern Sie alle verfügbaren Produktkategorien und entdecken
            Sie einzigartige Artikel
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {categories.map((category, index) => {
            const productCount = getProductsByCategory(category).length

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={`/category/${encodeCategoryForUrl(category)}`}>
                  <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400 group'>
                    {/* Icon */}
                    <div className='flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors'>
                      <Package className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                    </div>

                    {/* Category Name */}
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                      {category}
                    </h3>

                    {/* Product Count */}
                    <p className='text-gray-600 dark:text-gray-400 text-sm mb-4'>
                      {productCount}{' '}
                      {productCount === 1 ? 'Produkt' : 'Produkte'}
                    </p>

                    {/* Arrow */}
                    <div className='flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform'>
                      Kategorie ansehen
                      <ArrowRight className='w-4 h-4 ml-1' />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Back to Home */}
        <div className='text-center mt-12'>
          <Link
            href='/'
            className='inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  )
}
