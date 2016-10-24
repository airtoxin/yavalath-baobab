import path from 'path';
import webpack from 'webpack';
import Copy from 'copy-webpack-plugin';

export default {
  entry: './src/index.jsx',
  output: {
    publicPath: '/',
    sourcePath: ' ',
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
  },
  target: 'web',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, include: [path.resolve(__dirname, 'src')], loader: 'babel-loader' },
      { test: /\.css$/, include: [path.resolve(__dirname, 'src')], loader: ['style', 'css?modules'] },
    ],
  },
  plugins: [
    new Copy([
      { from: 'src/index.html' },
    ]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devTool: 'inline-source-map',
  devServer: {
    contentBase: 'public',
    port: 9000,
    inline: true,
    hot: true,
    colors: true,
  },
};
