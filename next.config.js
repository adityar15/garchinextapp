/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['garchi.s3.eu-west-2.amazonaws.com', 'tailwindui.com'],
  },

}

module.exports = nextConfig
