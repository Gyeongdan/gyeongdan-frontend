/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [['@swc-jotai/react-refresh', {}]],
  },
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
    ],
  },
};

export default nextConfig;
