const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const buildDirPath = path.join(__dirname, '/build');

module.exports = {
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
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/ig,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true
          }
        }],
      },
      canPrint: true
    })
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
  }
};