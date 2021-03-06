const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/babel-test.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist.js'
  },
  resolve: {
    fallback: { "util": require.resolve("util") }
  },
  optimization: {
    nodeEnv: 'production'
  }
}