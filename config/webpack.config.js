const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");

const config = {
  mode: "development",
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist')
  },
};

module.exports = config;
