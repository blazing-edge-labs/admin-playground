import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Card from 'react-toolbox/lib/card'

import Home from 'modules/Home'
import FormExample from 'modules/Examples/Form'
import TableExample from 'modules/Examples/Table'
import EditProfile from 'modules/Examples/Profile/Edit'
import Menu from '../Menu'
import NotFound from '../NotFound'

import './style.scss'

class Content extends Component {
  render () {
    return (
      <main styleName='layout'>
        <Menu />
        <Card styleName='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/formExample' component={FormExample} />
            <Route path='/tableExample' component={TableExample} />
            <Route path='/profile/edit' component={EditProfile} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Card>
      </main>
    )
  }
}

export default Content
