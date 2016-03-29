'use strict';

var webpack = require('webpack');
var babelEnv = process.env.BABEL_ENV;

module.exports = {
  cache: true,
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'autolayout.' + babelEnv.toLowerCase() + '.min.js',
    library: 'autolayout',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      // Signal production, so that webpack removes non-production code that
      // is in condtionals like: `if (process.env.NODE_ENV === 'production')`
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.SourceMapDevToolPlugin('[file].map')
  ]
};
