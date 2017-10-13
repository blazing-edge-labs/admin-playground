import React from 'react'
import ReactDOM from 'react-dom'
import App from 'modules/App'

import './styles/global.scss'

ReactDOM.render(<App />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./modules/App/index.js', () => {
    const NextRootContainer = require('./modules/App/index.js').default
    ReactDOM.render(<NextRootContainer />, document.getElementById('root'))
  })
}
