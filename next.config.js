/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'graph.facebook.com',
        port: '',
        pathname: '/6066761613347097/picture**',
      },
    ],
  },
};

module.exports = nextConfig;
