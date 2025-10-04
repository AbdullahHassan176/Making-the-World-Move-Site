/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'cdn.sanity.io',
      'storage.googleapis.com',
      'img.youtube.com',
      'i.ytimg.com'
    ],
  },
}

module.exports = nextConfig
