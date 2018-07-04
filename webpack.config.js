const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports =  (env, options) => {
  let cssLoader = 'style-loader';

  if (options.mode === 'production') {
    cssLoader = MiniCssExtractPlugin.loader;
  }

  return {
    entry: [
      './src/index.js'
    ],
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
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(scss|css)$/,
          use: [
            cssLoader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(mp4|ogg|svg|woff|woff2|ttf|eot)$/,
          loader: 'file-loader'
        },
        {
          test:/\.(png|jpg|gif)$/,
          use:[{
            loader: 'url-loader',
            options: {
              limit: 500,
              outputPath: 'img/',
              name: '[name].[ext]?[hash]'
            }
          }]
        }
      ]
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        containers: path.resolve(__dirname, 'src/containers/'),
        static: path.resolve(__dirname, 'src/static/'),
        theme: path.resolve(__dirname, 'src/theme/'),
      },
      extensions: [
        '.js',
        '.jsx'
      ],
      modules: [
        path.resolve(__dirname, 'src/'),
        path.resolve(__dirname, 'node_modules/'),
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
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
    ],
    devServer: {
      contentBase: './src',
      watchContentBase: true,
      compress: true
      // port: '5566'
    },
  }
};
