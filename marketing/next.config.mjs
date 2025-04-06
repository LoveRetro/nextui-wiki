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
    webpackBuildWorker: false,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
}

export default nextConfig
