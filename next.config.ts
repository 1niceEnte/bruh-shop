import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment and set the basePath if your repository is not at the root domain
  // basePath: '/your-repo-name',
}

export default nextConfig
