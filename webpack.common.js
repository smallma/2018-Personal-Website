const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // devtool: 'cheap-eval-source-map',
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  // entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  // devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
      }
    ]
  },
  resolve: {
    // alias: {
    //   components: path.resolve(__dirname, 'src/components/'),
    //   containers: path.resolve(__dirname, 'src/containers/'),
    //   static: path.resolve(__dirname, 'src/static/'),
    //   theme: path.resolve(__dirname, 'src/theme/'),
    // },
    extensions: [
      '.js',
    ],
    modules: [
      path.resolve(__dirname, 'src/'),
      path.resolve(__dirname, 'node_modules/'),
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html'
      // filename: "./dist/index.html'
    }),
    // new HtmlWebPackPlugin({
    //   template: path.resolve(__dirname, 'src/index.html'),
    //   filename: "./dist/index.html"
    // }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};