// next.config.js
module.exports = {
  webpack(config) {
    // Fallbacks for Node.js built-in modules
    config.resolve.fallback = {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      vm: require.resolve('vm-browserify'), // Fallback for 'vm'
    };
    return config;
  },
};