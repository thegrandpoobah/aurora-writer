var path = require('path')
var HtmlPlugin = require('html-webpack-plugin')
var CopyPlugin = require('copy-webpack-plugin')

var cssLoader = {
  test: /\.css$/,
  loader: 'style!css',
  include: path.join(__dirname, 'node_modules')
}

var jsLoader = {
  test: /\.js$/,
  include: [
    path.resolve(__dirname, 'src')
  ],
  loader: 'babel-loader',
  exclude: [/node_modules/, /templates/],
  query: {
    cacheDirectory: true,
    plugins: ['transform-runtime', 'transform-es2015-parameters'],
    presets: ['es2015', 'react', 'stage-2', 'latest']
  }
}

var scssLoader = {
  test: /\.scss$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader'],
  exclude: [/node_modules/]
}

var loaders = [
  cssLoader,
  jsLoader,
  scssLoader
]

var config = {
  entry: [path.resolve(__dirname, 'src/app.js')],
  module: {
    loaders: loaders
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].js',
    publicPath: './'
  },
  plugins: [
    new HtmlPlugin({
      title: 'Aurora Writer',
      template: 'index.html'
    })
  ],
  devtool: 'source-map',
  target: 'electron'
}

module.exports = config
