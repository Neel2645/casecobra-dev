import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm98v2eh8g4.ufs.sh',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
