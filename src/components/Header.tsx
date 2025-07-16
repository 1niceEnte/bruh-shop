'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, ShoppingCart, Heart, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import { getAllCategories } from '@/lib/data'
import ThemeToggle from '@/components/ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [mounted, setMounted] = useState(false)
  const { getItemCount, toggleCart } = useCartStore()
  const { getItemCount: getWishlistCount } = useWishlistStore()

  const categories = getAllCategories()

  // Only show counts after component mounts to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const cartItemCount = mounted ? getItemCount() : 0
  const wishlistCount = mounted ? getWishlistCount() : 0

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`
    }
  }

  return (
    <header className='bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Top bar */}
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>B</span>
            </div>
            <span className='text-2xl font-bold text-gray-900 dark:text-white'>
              Buffbolzen
            </span>
          </Link>

          {/* Search bar - Desktop */}
          <div className='hidden md:flex flex-1 max-w-lg mx-8'>
            <form onSubmit={handleSearch} className='w-full'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Produkte durchsuchen...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white dark:placeholder-gray-400'
                />
                <Search className='absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-300' />
              </div>
            </form>
          </div>

          {/* Right icons */}
          <div className='flex items-center space-x-4'>
            {/* Search icon - Mobile */}
            <button className='md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
              <Search className='h-6 w-6' />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Wishlist */}
            <Link
              href='/wishlist'
              className='p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative'
            >
              <Heart className='h-6 w-6' />
              {mounted && wishlistCount > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className='p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative'
            >
              <ShoppingCart className='h-6 w-6' />
              {mounted && cartItemCount > 0 && (
                <span className='absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className='hidden md:block border-t border-gray-200 dark:border-gray-700'>
          <div className='flex space-x-8 overflow-x-auto py-4'>
            <Link
              href='/'
              className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium whitespace-nowrap'
            >
              Alle Produkte
            </Link>
            {categories.slice(0, 8).map((category) => (
              <Link
                key={category}
                href={`/category/${encodeURIComponent(category)}`}
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium whitespace-nowrap'
              >
                {category}
              </Link>
            ))}
            {categories.length > 8 && (
              <Link
                href='/categories'
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium whitespace-nowrap'
              >
                Mehr...
              </Link>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'>
          {/* Mobile search */}
          <div className='p-4 border-b border-gray-200 dark:border-gray-700'>
            <form onSubmit={handleSearch}>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Produkte durchsuchen...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white dark:placeholder-gray-400'
                />
                <Search className='absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-300' />
              </div>
            </form>
          </div>

          {/* Mobile navigation */}
          <nav className='px-4 py-2'>
            <Link
              href='/'
              className='block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium'
              onClick={() => setIsMenuOpen(false)}
            >
              Alle Produkte
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${encodeURIComponent(category)}`}
                className='block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
