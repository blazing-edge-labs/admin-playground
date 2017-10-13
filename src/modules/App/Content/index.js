import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'modules/Home'
import FormExample from 'modules/Examples/Form'
import TableExample from 'modules/Examples/Table'
import Menu from '../Menu'
import NotFound from '../NotFound'

import './style.scss'

class Content extends Component {
  render () {
    return (
      <div styleName='layout'>
        <Menu />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/formExample' component={FormExample} />
            <Route path='/tableExample' component={TableExample} />
            <Route path='*' component={NotFound} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Content
