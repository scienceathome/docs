var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './_app/main.js',
  output: {
    path: path.join(__dirname, 'assets/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins: [
    new webpack.BannerPlugin("---\n---\n\n", { raw: true })
  ]
};
