// Load environment variables from .env file
require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL, // Expose the DATABASE_URL from the environment
  },
  experimental: {
    turbo: false, // Disable turbo mode if needed (can be removed if not necessary)
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint warnings during builds
  },
};

module.exports = nextConfig;
