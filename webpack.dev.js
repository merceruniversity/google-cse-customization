const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const buildDirPath = path.join(__dirname, '/build');

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
    // Remove various build dirs
    new CleanWebpackPlugin(),
    // Extract CSS into dedicated file
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Google Custom Search Engine',
      template: 'src/index.hbs',
      // inlineSource: '.(js|css)$'
    }),
    // new HtmlWebpackInlineSourcePlugin(),
    new HtmlWebpackHarddiskPlugin()
  ],

  module: {
    rules: [{
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
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
        use: [
          MiniCssExtractPlugin.loader,
          {
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