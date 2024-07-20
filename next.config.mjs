/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [['@swc-jotai/react-refresh', {}]],
  },
  reactStrictMode: false,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wimg.mk.co.kr',
      },
      {
        protocol: 'https',
        hostname: 'img.hankyung.com',
      },
      {
        protocol: 'https',
        hostname: 'pimg.mk.co.kr',
      },
    ],
  },
};

export default nextConfig;
