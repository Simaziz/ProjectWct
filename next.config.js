require('dotenv').config();

module.exports = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  experimental: {
    turbo: false,
  },
};
