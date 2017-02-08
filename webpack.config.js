const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const conf = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 3000,
    stats: 'minimal',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
    title: 'RxJS - Webchapter',
    template: 'src/index.html'
  })]
};

module.exports = conf;