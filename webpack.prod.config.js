const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true
      })
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.tpl.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __API_URL__: JSON.stringify(process.env.API_URL)
    }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: [/node_modules/]
      }, {
        test: /\.json$/,
        use: 'json'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
            }
          }, 'postcss-loader']
        })
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?importLoaders=1&modules&localIdentName=[local]--[hash:base64:8]',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: './src/styles/resources.scss'
              }
            }
          ]
        })
      }
    ]
  },
  node: {
    fs: 'empty'
  }
}
