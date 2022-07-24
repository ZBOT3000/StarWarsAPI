module.exports = {
  resolve: {
    fallback: {
      querystring: require.resolve("querystring-es3"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
};
