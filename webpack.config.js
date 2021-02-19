const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const path = require('path');

const environment = process.env.NODE_ENV || 'development';

module.exports = {
  mode: environment,
  entry: path.join(__dirname, 'src', 'index.tsx'),
  // target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'dist/bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.svg$/,
        use: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 8000,
    publicPath: '/',
    hot: true,
    historyApiFallback: true, // for react router
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      inject: true,
      template: './src/index.html',
    })
  ]
};
