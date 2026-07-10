import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    qualities: [75, 90, 95, 100],
  },
};

export default nextConfig;
