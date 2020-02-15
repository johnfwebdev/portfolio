const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackBaseConfig = require('./webpack.common.config');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    publicPath: '/dist/',
    historyApiFallback: true,
    index: '', // specify to enable root proxying
    proxy: {
      '/api': {
        pathRewrite: {
          '^/api': ''
        },
        target: 'http://localhost:5001',
        context: () => true,
        secure: false,
        changeOrigin: true,
      }
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new CleanWebpackPlugin()]
});