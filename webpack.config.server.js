const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/poll?1000',
    './src/server.js',
  ],
  watch: true,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  module: {
    rules: [{
      test: /\.js?$/,
      use: [
        'babel-loader',
        'eslint-loader',
      ],
      exclude: /(node_modules|build)/,
    }],
  },
  plugins: [
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
};
