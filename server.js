const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const compiler = webpack(config)

const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()

app.use(history())

app.use(middleware(compiler, {
  publicPath: '/'
}))
app.use(hotMiddleware(compiler, {
  path: '/__webpack_hmr'
}))

app.listen(7000, () => console.log('App listening on port 7000'))
