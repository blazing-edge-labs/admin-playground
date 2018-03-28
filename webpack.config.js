const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    // 'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/index')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src')
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.tpl.dev.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __API_URL__: JSON.stringify('https://api-skeleton-v2.herokuapp.com')
    }),
    new webpack.NoEmitOnErrorsPlugin()
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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
            }
          },
          'postcss-loader'
        ]
      }, {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1&modules&localIdentName=[local]--[hash:base64:8]',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './src/styles/resources.scss'
            }
          }
        ]}
    ]
  },
  node: {
    fs: 'empty'
  }
}
