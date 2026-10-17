/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Must match BASE_PATH in lib/site.ts.
  basePath: '/interactive-resume',
  assetPrefix: '/interactive-resume/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
