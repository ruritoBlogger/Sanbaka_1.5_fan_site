import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const Dotenv = require('dotenv-webpack');
const src  = path.resolve(__dirname, 'src')
const pub  = path.resolve(__dirname, 'public')

export default {
  mode: 'development',
  entry: src + '/index.js',

  output: {
    path: pub,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          },
          {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: pub,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: pub + '/index.html',
      filename: 'index.html'
    }),
    new Dotenv()
  ]
}
