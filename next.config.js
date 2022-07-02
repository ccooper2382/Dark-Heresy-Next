/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  content: ["./src/**/*.{html,js}"],
  images: {
  domains: ['source.unsplash.com'],
},
  theme: {
    extend: {},
  },
  plugins: [],
}
