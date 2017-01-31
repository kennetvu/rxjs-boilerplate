const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const conf = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000
  },
  plugins: [new HtmlWebpackPlugin()]
};

module.exports = conf;