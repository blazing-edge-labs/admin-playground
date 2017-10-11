import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'modules/Home'
import Menu from '../Menu'
import NotFound from '../NotFound'

import './style.sass'

class Content extends Component {
  render () {
    return (
      <div className='layout'>
        <Menu />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='*' component={NotFound} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Content
