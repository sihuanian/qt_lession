const path = require('path')
const VueloaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // 模式，开发模式
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js') // 打包后的文件名为bundle
  },
  output: {
    path: path.resolve(__dirname, 'build'), // 打包到当前文件目录下的build文件夹下
    filename: '[name].[hash:5].js' // name -> entry bundle hash:5 文件名保留5个哈希值
  },
  resolve: {
    extensions: ['.vue', '.js', '.jsx'], // 扩展识别的文件类型
    alias: {
      '@': path.resolve(__dirname, 'src/') // @ 指向当前目录下的src/
    }
  },
  module: { // 文件解析
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueloaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}