const path = require("path");

module.exports = {
  target: "node",
  // Other webpack configurations...
  resolve: {
    alias: {
      // Use crypto-browserify in place of the 'crypto' module
      crypto: require.resolve("crypto-browserify"),
    },
  },
};
