import { notFound } from 'next/navigation'
import { getProductsByCategory, getAllCategories, encodeCategoryForUrl, decodeCategoryFromUrl, isValidCategory } from '@/lib/data'
import CategoryPageClient from './CategoryPageClient'

// Generate static params for all categories
export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: encodeCategoryForUrl(category),
  }))
}

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params
  const category = decodeCategoryFromUrl(resolvedParams.category)

  if (!isValidCategory(category)) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(category)

  return <CategoryPageClient category={category} products={categoryProducts} />
}
