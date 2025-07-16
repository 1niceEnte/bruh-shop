'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Filter, Grid, List } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { getAllCategories, formatPrice, getImagePath, encodeCategoryForUrl } from '@/lib/data'
import { Product } from '@/types'

interface CategoryPageClientProps {
  category: string
  products: Product[]
}

export default function CategoryPageClient({
  category,
  products,
}: CategoryPageClientProps) {
  const [sortBy, setSortBy] = useState<
    'price-asc' | 'price-desc' | 'name' | 'newest'
  >('newest')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const allCategories = getAllCategories()

  // Find the maximum price for this category
  const maxPrice = Math.max(...products.map((p) => p.price))

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    )

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
          return b.id - a.id
      }
    })

    return filtered
  }, [products, priceRange, sortBy])

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Header */}
        <div className='mb-8'>
          <nav className='mb-4'>
            <ol className='flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400'>
              <li>
                <Link
                  href='/'
                  className='hover:text-blue-600 dark:hover:text-blue-400'
                >
                  Startseite
                </Link>
              </li>
              <li>/</li>
              <li className='text-gray-900 dark:text-white'>{category}</li>
            </ol>
          </nav>

          <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
            <div>
              <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
                {category}
              </h1>
              <p className='text-gray-600 dark:text-gray-400'>
                {filteredProducts.length} von {products.length} Produkten
              </p>
            </div>

            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
              {/* View Mode Toggle */}
              <div className='flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden'>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${
                    viewMode === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Grid className='h-5 w-5' />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${
                    viewMode === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <List className='h-5 w-5' />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className='p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
              >
                <option value='newest'>Neueste zuerst</option>
                <option value='price-asc'>Preis: Niedrig zu Hoch</option>
                <option value='price-desc'>Preis: Hoch zu Niedrig</option>
                <option value='name'>Name: A-Z</option>
              </select>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Sidebar Filters */}
          <div className='lg:w-80'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center'>
                <Filter className='h-5 w-5 mr-2' />
                Filter
              </h3>

              {/* Price Range */}
              <div className='space-y-4'>
                <h4 className='text-sm font-medium text-gray-700 dark:text-gray-300'>
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
                      className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
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
                      className='w-full p-2 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
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
                  <div className='flex justify-between text-xs text-gray-500 dark:text-gray-400'>
                    <span>{formatPrice(0)}</span>
                    <span>{formatPrice(maxPrice)}</span>
                  </div>
                </div>

                {/* Other Categories */}
                <div className='mt-8'>
                  <h4 className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-3'>
                    Andere Kategorien
                  </h4>
                  <div className='space-y-2'>
                    {allCategories
                      .filter((cat) => cat !== category)
                      .slice(0, 8)
                      .map((cat) => (
                        <Link
                          key={cat}
                          href={`/category/${encodeCategoryForUrl(cat)}`}
                          className='block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline'
                        >
                          {cat}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className='flex-1'>
            {filteredProducts.length > 0 ? (
              viewMode === 'grid' ? (
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
                <div className='space-y-6'>
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className='bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700'
                    >
                      <div className='flex'>
                        <div className='w-48 h-48 flex-shrink-0'>
                          <img
                            src={getImagePath(`/images/products/${product.image}`)}
                            alt={product.title}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <div className='flex-1 p-6'>
                          <div className='flex items-start justify-between'>
                            <div className='flex-1'>
                              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                                <a
                                  href={`/product/${product.id}`}
                                  className='hover:text-blue-600 dark:hover:text-blue-400'
                                >
                                  {product.title}
                                </a>
                              </h3>
                              <p className='text-gray-600 dark:text-gray-400 mb-4 line-clamp-3'>
                                {product.description}
                              </p>
                              <div className='flex items-center space-x-4'>
                                <span className='text-2xl font-bold text-gray-900 dark:text-white'>
                                  {formatPrice(product.price)}
                                </span>
                                {product.unit && (
                                  <span className='text-gray-500 dark:text-gray-400'>
                                    / {product.unit}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className='ml-6 flex flex-col space-y-2'>
                              <a
                                href={`/product/${product.id}`}
                                className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center'
                              >
                                Details ansehen
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className='text-center py-12'>
                <div className='w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center'>
                  <Filter className='h-12 w-12 text-gray-400' />
                </div>
                <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>
                  Keine Produkte gefunden
                </h3>
                <p className='text-gray-500 dark:text-gray-400 mb-4'>
                  Versuchen Sie, Ihre Filter anzupassen.
                </p>
                <button
                  onClick={() => setPriceRange({ min: 0, max: maxPrice })}
                  className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  Filter zurücksetzen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
