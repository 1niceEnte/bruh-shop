'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Search, Filter, SortAsc, SortDesc } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: number
  title: string
  description: string
  image: string
  price: number
  unit: string | null
  category: string[]
}

export default function SearchPageContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'relevance'>(
    'relevance'
  )
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  // Load products
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/products.json')
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to load products:', error)
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  // Filter and search products
  useEffect(() => {
    let filtered = products

    // Search filter
    if (query) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.some((cat) =>
            cat.toLowerCase().includes(query.toLowerCase())
          )
      )
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        product.category.some((cat) => selectedCategories.includes(cat))
      )
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          const nameComparison = a.title.localeCompare(b.title)
          return sortOrder === 'asc' ? nameComparison : -nameComparison
        case 'price':
          const priceComparison = a.price - b.price
          return sortOrder === 'asc' ? priceComparison : -priceComparison
        case 'relevance':
        default:
          return 0 // Keep original order for relevance
      }
    })

    setFilteredProducts(filtered)
  }, [products, query, selectedCategories, sortBy, sortOrder])

  // Get unique categories
  const allCategories = [
    ...new Set(products.flatMap((product) => product.category)),
  ].filter((cat) => cat.trim() !== '')

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto'></div>
          <p className='mt-4 text-gray-600 dark:text-gray-400'>
            Lade Suchergebnisse...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4 py-8'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
            Suchergebnisse
          </h1>
          {query && (
            <p className='text-gray-600 dark:text-gray-400'>
              {filteredProducts.length} Ergebnisse für "{query}"
            </p>
          )}
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Filters Sidebar */}
          <div className='lg:w-1/4'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center'>
                <Filter className='mr-2 h-5 w-5' />
                Filter
              </h3>

              {/* Sort Options */}
              <div className='mb-6'>
                <h4 className='font-medium text-gray-900 dark:text-white mb-3'>
                  Sortierung
                </h4>
                <div className='space-y-2'>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name='sort'
                      value='relevance'
                      checked={sortBy === 'relevance'}
                      onChange={(e) => setSortBy(e.target.value as 'relevance')}
                      className='mr-2'
                    />
                    <span className='text-gray-700 dark:text-gray-300'>
                      Relevanz
                    </span>
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name='sort'
                      value='name'
                      checked={sortBy === 'name'}
                      onChange={(e) => setSortBy(e.target.value as 'name')}
                      className='mr-2'
                    />
                    <span className='text-gray-700 dark:text-gray-300'>
                      Name
                    </span>
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name='sort'
                      value='price'
                      checked={sortBy === 'price'}
                      onChange={(e) => setSortBy(e.target.value as 'price')}
                      className='mr-2'
                    />
                    <span className='text-gray-700 dark:text-gray-300'>
                      Preis
                    </span>
                  </label>
                </div>

                {sortBy !== 'relevance' && (
                  <div className='mt-3'>
                    <button
                      onClick={() =>
                        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
                      }
                      className='flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300'
                    >
                      {sortOrder === 'asc' ? (
                        <SortAsc className='mr-1 h-4 w-4' />
                      ) : (
                        <SortDesc className='mr-1 h-4 w-4' />
                      )}
                      {sortOrder === 'asc' ? 'Aufsteigend' : 'Absteigend'}
                    </button>
                  </div>
                )}
              </div>

              {/* Categories */}
              {allCategories.length > 0 && (
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-white mb-3'>
                    Kategorien
                  </h4>
                  <div className='space-y-2 max-h-64 overflow-y-auto'>
                    {allCategories.map((category) => (
                      <label key={category} className='flex items-center'>
                        <input
                          type='checkbox'
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className='mr-2'
                        />
                        <span className='text-gray-700 dark:text-gray-300'>
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className='lg:w-3/4'>
            {filteredProducts.length === 0 ? (
              <div className='text-center py-12'>
                <Search className='mx-auto h-12 w-12 text-gray-400 mb-4' />
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  Keine Ergebnisse gefunden
                </h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  Versuchen Sie es mit anderen Suchbegriffen oder entfernen Sie
                  einige Filter.
                </p>
              </div>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className='group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
                  >
                    <div className='aspect-square overflow-hidden'>
                      <img
                        src={`/products/${product.image}`}
                        alt={product.title}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                    <div className='p-4'>
                      <h3 className='font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400'>
                        {product.title}
                      </h3>
                      <p className='text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2'>
                        {product.description}
                      </p>
                      <div className='flex items-center justify-between'>
                        <span className='text-xl font-bold text-blue-600 dark:text-blue-400'>
                          €{product.price.toFixed(2)}
                          {product.unit && (
                            <span className='text-sm font-normal text-gray-500 dark:text-gray-400 ml-1'>
                              /{product.unit}
                            </span>
                          )}
                        </span>
                        {product.category.length > 0 && (
                          <div className='flex gap-1'>
                            {product.category.slice(0, 2).map((cat) => (
                              <span
                                key={cat}
                                className='px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded'
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
