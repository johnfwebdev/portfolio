const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackBaseConfig = require('./webpack.common.config');

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin()
  ]
})