import { notFound } from 'next/navigation'
import { getProductById, products } from '@/lib/data'
import ProductPageClient from './ProductPageClient'

// Generate static params for all products
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params
  const productId = parseInt(resolvedParams.id)
  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  return <ProductPageClient product={product} />
}
