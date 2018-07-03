// const webpack = require('webpack')
// const merge = require('webpack-merge')
// const common = require('./webpack.common.js')


// module.exports = merge(common, {
//   mode: 'development',
  // devServer: {
  //   inline: true,
  //   hot: true,
  //   historyApiFallback: true,
  //   contentBase: `${__dirname}/dest`,
  //   publicPath: '/dist/'
  // },
//   // devServer: {
//   //   contentBase: './dist',
//   //   hot: true
//   // },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ]
// })


// const path = require('path');
// const HtmlWebPackPlugin = require("html-webpack-plugin");


// module.exports = {
//   context: __dirname,
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       },
//       {
//         test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
//         loader: 'file-loader'
//       },
//     ],
//     loaders: [
//       { test: /\.png$/, loader: 'file-loader' },
//       { test: /\.html$/, loader: 'html-loader' }
//     ]
//   },
//   resolve: {
//     alias: {
//       components: path.resolve(__dirname, 'src/components/'),
//       containers: path.resolve(__dirname, 'src/containers/'),
//       static: path.resolve(__dirname, 'src/static/'),
//       theme: path.resolve(__dirname, 'src/theme/'),
//     },
//     extensions: [
//       '.js',
//       '.jsx'
//     ],
//     modules: [
//       path.resolve(__dirname, 'src/'),
//       path.resolve(__dirname, 'node_modules/'),
//     ]
//   },
//   plugins: [
//     // new HtmlWebPackPlugin({
//     //   template: path.resolve(__dirname, 'src/index.html'),
//     //   filename: "index.html"
//     // })
//     new HtmlWebPackPlugin({
//       filename: 'index.html',
//       template: 'src/index.html'
//     })
//   ]
// };




// const path = require('path');
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// // const ExtractTextPlugin = require('extract-text-webpack-plugin');


// module.exports = {
//   context: __dirname,
//   entry: './src/example.js',
//   output: {
//     path: path.join(__dirname, 'dist/webpack-1'),
//     publicPath: '',
//     filename: 'main.js'
//   },
//   rules: [
//     {
//       test: /\.scss$/,
//       use: [
//       MiniCssExtractPlugin.loader,
//       {
//         loader: "css-loader", options: {
//           sourceMap: true
//         }
//       }, {
//         loader: "sass-loader", options: {
//           sourceMap: true
//         }
//       }]
//     }
//   ],
//   module: {
//     loaders: [
//       // { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
//       { test: /\.png$/, loader: 'file-loader' },
//       { test: /\.html$/, loader: 'html-loader' }
//     ]
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       filename: 'index.html',
//       favicon: 'favicon.ico',
//       template: 'src/index.html'
//     }),

//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: "[name].css",
//       chunkFilename: "[id].css"
//     })
//     // new ExtractTextPlugin('main.css')
//   ]
// };
//
//
//


// const path = require('path');
// const HtmlWebPackPlugin = require("html-webpack-plugin");


// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'postcss-loader'
//         ]
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       },
//       {
//         test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
//         loader: 'file-loader'
//       },
//     ]
//   },
//   resolve: {
//     extensions: [
//       '.js',
//       '.jsx'
//     ],
//     modules: [
//       path.resolve(__dirname, 'src/'),
//       path.resolve(__dirname, 'node_modules/'),
//     ]
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: path.resolve(__dirname, 'src/index.html'),
//       filename: "./index.html"
//     })
//   ]
// };
//
//



const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/dev-server',
    './src/index.js'
  ],
  // entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js'
  },
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
        test: /\.(scss|css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    modules: [
      path.resolve(__dirname, 'src/'),
      path.resolve(__dirname, 'node_modules/'),
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};