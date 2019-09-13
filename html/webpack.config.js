// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//   entry: __dirname + '/src/index.js',
//   output: {
//     path: __dirname + '/dist',
//     filename: 'index_bundle.js'
//   },
//   plugins: [
//     new HtmlWebpackPlugin()
//   ]
// }



var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpackMajorVersion = require('webpack/package.json').version.split('.')[0];

module.exports = {
  context: __dirname,
  entry: __dirname + '/src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.png$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/dist/modals.html',
    }),
    new MiniCssExtractPlugin({ filename: __dirname + '/css/header.css' })
  ]
};
