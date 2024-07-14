/** @type {import('next').NextConfig} */
const nextConfig = {
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
