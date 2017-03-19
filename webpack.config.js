var webpack = require('webpack');
var path = require('path');

// const VENDOR_LIBS = [
//   'react', 'lodash', 'redux', 'react-redux', 'react-dom',
//   'faker', 'redux-form', 'react-input-range', 'redux-thunk'
//
// ];

module.exports = {
  entry: './frontend/index.js',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  }
};
