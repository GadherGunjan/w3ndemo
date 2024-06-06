/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_API_URL: "https://w3n.xyz/projects/w3nuts_v2",
    NEXTAUTH_URL:"http://localhost:3000/"
  },
  images: {
    // disableStaticImages: true,
    domains: ['w3n.xyz', 'w3nuts.w3n.xyz'],
    formats: ['image/avif', 'image/webp'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'w3n.xyz',
        port: '',
        pathname: '/projects/w3nuts_v2/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-bom2-1.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-bom2-2.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-bom1-2.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-bom1-1.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
      },
    ],
  }
}


module.exports = nextConfig
