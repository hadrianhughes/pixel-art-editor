const path = require('path');

module.exports = {
  devtool: 'sourcemap',
  entry: './src/index.js',
  module: {
    rules: [
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  mode: 'development',
};
