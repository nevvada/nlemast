const path = require('path');

const { DefinePlugin } = require('webpack');
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
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
