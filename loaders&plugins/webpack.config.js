const path = require('path')
const FileListPlugin = require('./plugins/fileListPlugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  plugins: [
    new FileListPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/others', to: 'others' }
      ]
    })
  ],
  module: {
    rules: [
      // {
      //   test: /index\.js$/,
      //   use: [
      //     {
      //       loader: './loaders/test-loader.js?changeVar=未知数',
      //       // options: {
      //       //   changeVar: '未知数'
      //       // }
      //     }
      //   ]
      // },
      {
        test: /\.js$/,
        use: [
          {
            loader: './loaders/test-loader.js?changeVar=未知数'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: './loaders/style-loader.js'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: './loaders/img-loader.js',
            options: {
              limit: 4000,
              filename: "img-[contenthash:5].[ext]"
            }
          }
        ]
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}