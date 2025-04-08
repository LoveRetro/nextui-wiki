/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '../docs/_marketing/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
}

export default nextConfig
