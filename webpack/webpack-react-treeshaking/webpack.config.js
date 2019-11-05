const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html'
    })
  ]
}