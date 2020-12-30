const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const FILENAME = pkg.name;

const BANNER = [
  'Pagination UI Component',
  '@version ' + pkg.version + ' | ' + new Date().toDateString(),
  '@author ' + pkg.author,
  '@license ' + pkg.license,
].join('\n');

module.exports = {
  entry: './src/js/index.js',
  output: {
    library: ['Pagination'],
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: FILENAME + '.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: BANNER,
      entryOnly: true,
    }),
  ],
};
