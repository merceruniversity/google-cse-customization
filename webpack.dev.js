const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const Path = require('path');

const buildDirPath = Path.join(__dirname, '/build');

module.exports = {
  devtool: 'eval-cheap-module-source-map',

  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].js',
    path: buildDirPath
  },

  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: '.env.development'
    }),
    new HtmlWebpackPlugin({
      title: 'Google Custom Search Engine',
      template: 'src/index.hbs',
    }),
    new HtmlWebpackHarddiskPlugin()
  ],

  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  watchOptions: {
    ignored: ['node_modules', 'build']
  }
};