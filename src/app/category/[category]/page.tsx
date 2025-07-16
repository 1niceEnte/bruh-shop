import { notFound } from 'next/navigation'
import { getProductsByCategory, getAllCategories } from '@/lib/data'
import CategoryPageClient from './CategoryPageClient'

// Generate static params for all categories
export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: encodeURIComponent(category),
  }))
}

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params
  const category = decodeURIComponent(resolvedParams.category)

  const allCategories = getAllCategories()

  if (!allCategories.includes(category)) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(category)

  return <CategoryPageClient category={category} products={categoryProducts} />
}
