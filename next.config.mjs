/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/interactive-resume',
  assetPrefix: '/interactive-resume/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
