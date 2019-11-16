const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin') // dist生成对应的文件夹
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 分离出css

module.exports = {
  // 入口文件
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, './src/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader, // 将 JS 字符串生成为 style 节点
          options: {
            hmr: true
          }
        }, {
          loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
          options: {
            // modules: true // 开启css 模块化，类似于vue scoped
            modules: {
              mode: 'local', // 开启css 模块化，类似于vue scoped
              localIdentName: '[path][name][hash:base64:5]'
            }
          }
        }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: './assets/imgaes',
        to: 'assets/'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    hot: true, // 启动热更新
    contentBase: path.join(__dirname, './assets/')
  }
}