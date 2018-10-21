const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'sourcemap',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'static' },
    ]),
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  mode: 'development',
};
