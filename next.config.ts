import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Add output configuration for Vercel
  output: "standalone",
  
  // Explicitly define the output directory
  distDir: '.next'
};

export default nextConfig;
