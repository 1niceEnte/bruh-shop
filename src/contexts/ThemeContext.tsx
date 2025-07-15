'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('buffbolzen-theme') as Theme | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    setTheme(savedTheme || systemTheme)
    setMounted(true)
  }, [])

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
      localStorage.setItem('buffbolzen-theme', theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const value = {
    theme,
    toggleTheme,
    setTheme,
  }

  // Always provide the context, but render with initial theme until mounted
  return (
    <ThemeContext.Provider value={value}>
      <div className={mounted ? '' : 'min-h-screen bg-gray-50'}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
