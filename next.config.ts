import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  compress: true,

  // Strict mode for better React practices
  reactStrictMode: true,

  // Trailing slashes for consistent URLs
  trailingSlash: false,

  // PoweredBy header removal for security
  poweredByHeader: false,
};

export default nextConfig;
