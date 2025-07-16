import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import Header from '@/components/Header'
import CartSidebar from '@/components/CartSidebar'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'Buffbolzen Shop - Professioneller Online-Shop',
  description:
    'Entdecken Sie einzigartige Produkte bei Buffbolzen - von Früchten bis hin zu innovativen Materialien und Werkzeugen.',
  keywords: 'Online-Shop, Buffbolzen, Produkte, E-Commerce, Shopping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='de'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script src='https://pay.google.com/gp/p/js/pay.js' async></script>
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <div className='min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200'>
            <Header />
            <main className='pb-16'>{children}</main>
            <CartSidebar />

            {/* Footer */}
            <footer className='bg-gray-900 dark:bg-gray-800 text-white'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                  <div>
                    <h3 className='text-lg font-semibold mb-4'>Buffbolzen</h3>
                    <p className='text-gray-400'>
                      Ihr vertrauensvoller Online-Shop für einzigartige Produkte
                      und innovative Lösungen.
                    </p>
                  </div>

                  <div>
                    <h4 className='text-sm font-semibold mb-4 uppercase tracking-wider'>
                      Kundenservice
                    </h4>
                    <ul className='space-y-2 text-gray-400'>
                      <li>
                        <Link
                          href='/contact'
                          className='hover:text-white dark:hover:text-gray-200'
                        >
                          Kontakt
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/faq'
                          className='hover:text-white dark:hover:text-gray-200'
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/shipping-returns'
                          className='hover:text-white dark:hover:text-gray-200'
                        >
                          Versand & Rückgabe
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/size-chart'
                          className='hover:text-white dark:hover:text-gray-200'
                        >
                          Größentabelle
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className='text-sm font-semibold mb-4 uppercase tracking-wider'>
                      Unternehmen
                    </h4>
                    <ul className='space-y-2 text-gray-400'>
                      <li>
                        <Link
                          href='/about'
                          className='hover:text-white dark:hover:text-gray-200'
                        >
                          Über uns
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/careers'
                          className='hover:text-white dark:hover:text-gray-200'
                        >
                          Karriere
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/press'
                          className='hover:text-white dark:hover:text-gray-200'
                        >
                          Presse
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/sustainability'
                          className='hover:text-white dark:hover:text-gray-200'
                        >
                          Nachhaltigkeit
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className='text-sm font-semibold mb-4 uppercase tracking-wider'>
                      Rechtliches
                    </h4>
                    <ul className='space-y-2 text-gray-400'>
                      <li>
                        <Link
                          href='/privacy'
                          className='hover:text-white dark:hover:text-gray-200'
                        >
                          Datenschutz
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/terms'
                          className='hover:text-white dark:hover:text-gray-200'
                        >
                          AGB
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/imprint'
                          className='hover:text-white dark:hover:text-gray-200'
                        >
                          Impressum
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/cookies'
                          className='hover:text-white dark:hover:text-gray-200'
                        >
                          Cookies
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
                  <p>&copy; 2024 Buffbolzen. Alle Rechte vorbehalten.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
