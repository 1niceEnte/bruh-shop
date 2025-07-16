'use client'

import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className='relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        className='relative w-6 h-6'
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        {theme === 'light' ? (
          <Sun className='w-6 h-6 text-yellow-500' />
        ) : (
          <Moon className='w-6 h-6 text-blue-400' />
        )}
      </motion.div>

      {/* Tooltip */}
      <div className='absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-gray-700 rounded shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap'>
        {theme === 'light' ? 'Dunkles Design' : 'Helles Design'}
      </div>
    </motion.button>
  )
}
