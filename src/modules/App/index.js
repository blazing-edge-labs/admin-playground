import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import theStore from './../../store'
import PrivateRoute from 'components/Routes/Private'
import GuestRoute from 'components/Routes/Guest'
import Content from './Content'
import Login from './Login'

class App extends Component {
  constructor () {
    super()

    console.log('useful constructor')

    // TODO: read token from storage and authenticate with API
  }

  render () {
    return (
      <Provider store={theStore}>
        <Router>
          <Switch>
            <GuestRoute path='/login' Component={Login} />
            <PrivateRoute Component={Content} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
