'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Filter, SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { products, getAllCategories, filterProducts } from '@/lib/data'
import { motion } from 'framer-motion'

export default function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState<
    'price-asc' | 'price-desc' | 'name' | 'newest'
  >('newest')

  const categories = getAllCategories()

  // Find the maximum price for the price range slider
  const maxPrice = Math.max(...products.map((p) => p.price))

  const filteredProducts = useMemo(() => {
    let filtered = filterProducts(selectedCategories, priceRange, searchTerm)

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name':
          return a.title.localeCompare(b.title)
        case 'newest':
        default:
          return b.id - a.id // Assuming higher ID = newer
      }
    })

    return filtered
  }, [selectedCategories, priceRange, searchTerm, sortBy])

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setPriceRange({ min: 0, max: 1000 })
    setSearchTerm('')
  }

  const featuredProducts = products.slice(0, 8)

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <div className='text-center'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-4xl md:text-6xl font-bold mb-6'
            >
              Willkommen bei <span className='text-yellow-300'>Buffbolzen</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto'
            >
              Entdecken Sie einzigartige Produkte und innovative Lösungen für
              jeden Bedarf
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='flex flex-col sm:flex-row gap-4 justify-center'
            >
              <button
                onClick={() =>
                  document
                    .getElementById('products')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Produkte entdecken
              </button>
              <Link
                href='/about'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block text-center'
              >
                Über uns erfahren
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className='py-16 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
              Beliebte Produkte
            </h2>
            <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Entdecken Sie unsere meistverkauften und beliebtesten Artikel
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section id='products' className='py-16 bg-gray-50 dark:bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Sidebar Filters */}
            <div className='lg:w-80'>
              <div className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    Filter
                  </h3>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className='lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded text-gray-600 dark:text-gray-300'
                  >
                    <SlidersHorizontal className='h-5 w-5' />
                  </button>
                </div>

                <div
                  className={`space-y-6 ${
                    showFilters ? 'block' : 'hidden lg:block'
                  }`}
                >
                  {/* Search */}
                  <div>
                    <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                      Suche
                    </label>
                    <input
                      type='text'
                      placeholder='Produkt suchen...'
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white dark:placeholder-gray-400'
                    />
                  </div>

                  {/* Categories */}
                  <div>
                    <h4 className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-3'>
                      Kategorien
                    </h4>
                    <div className='space-y-2 max-h-48 overflow-y-auto'>
                      {categories.map((category) => (
                        <label key={category} className='flex items-center'>
                          <input
                            type='checkbox'
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryToggle(category)}
                            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                          />
                          <span className='ml-3 text-sm text-gray-700 dark:text-gray-300'>
                            {category}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-3'>
                      Preis
                    </h4>
                    <div className='space-y-3'>
                      <div className='flex items-center space-x-3'>
                        <input
                          type='number'
                          placeholder='Min'
                          value={priceRange.min || ''}
                          onChange={(e) =>
                            setPriceRange((prev) => ({
                              ...prev,
                              min: Number(e.target.value) || 0,
                            }))
                          }
                          className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                        />
                        <span className='text-gray-500 dark:text-gray-400'>-</span>
                        <input
                          type='number'
                          placeholder='Max'
                          value={priceRange.max || ''}
                          onChange={(e) =>
                            setPriceRange((prev) => ({
                              ...prev,
                              max: Number(e.target.value) || maxPrice,
                            }))
                          }
                          className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                        />
                      </div>
                      <input
                        type='range'
                        min='0'
                        max={maxPrice}
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange((prev) => ({
                            ...prev,
                            max: Number(e.target.value),
                          }))
                        }
                        className='w-full'
                      />
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <button
                    onClick={clearAllFilters}
                    className='w-full bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors'
                  >
                    Filter zurücksetzen
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className='flex-1'>
              {/* Header */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6'>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
                    Alle Produkte
                  </h2>
                  <p className='text-gray-600 dark:text-gray-400 mt-1'>
                    {filteredProducts.length} von {products.length} Produkten
                  </p>
                </div>

                <div className='mt-4 sm:mt-0'>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className='p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                  >
                    <option value='newest'>Neueste zuerst</option>
                    <option value='price-asc'>Preis: Niedrig zu Hoch</option>
                    <option value='price-desc'>Preis: Hoch zu Niedrig</option>
                    <option value='name'>Name: A-Z</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <div className='text-center py-12'>
                  <div className='w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center'>
                    <Filter className='h-12 w-12 text-gray-400 dark:text-gray-500' />
                  </div>
                  <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>
                    Keine Produkte gefunden
                  </h3>
                  <p className='text-gray-500 dark:text-gray-400 mb-4'>
                    Versuchen Sie, Ihre Suchkriterien anzupassen oder Filter zu
                    entfernen.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                  >
                    Filter zurücksetzen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
