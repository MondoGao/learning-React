let path = require('path');
let Webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist/js')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /.pcss$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /.(png|jpg|ico|gif)$/,
        use: 'url-loader'
      }
    ]
  },
  devServer: {
    port: 3100,
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath: '/js',
    stats: {
      color: true
    }
  }
};