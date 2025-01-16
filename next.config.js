require('dotenv').config();
/**@types{import('next').nextConfig}*/
const nextConfig={
  eslint: {
    ignoreDuringBuilds: true,
  }
}
module.exports = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  experimental: {
    turbo: false,
  },
};
