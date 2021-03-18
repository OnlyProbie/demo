const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /(.ts|.tsx)$/,
        use: {
          loader: 'ts-loader',
          // options: {
          //   transpileOnly: true
          // }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Canvas Demo'
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: 'bundle.main.js',
    path: path.resolve(__dirname, 'dist')
  }
}