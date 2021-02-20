const path = require('path');

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true, // for react router
    hot: true,
    port: 8000,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  mode: 'development',
});
