import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Button } from 'react-toolbox/lib/button'
import { Card } from 'react-toolbox/lib/card'
import { MenuDivider, MenuItem } from 'react-toolbox/lib/menu'

import { logoutSuccess } from 'actions/user'
import './style.sass'

class Navigation extends Component {
  constructor (props) {
    super(props)

    this.renderNavigation = this.renderNavigation.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout () {
    const { dispatch } = this.props

    dispatch(logoutSuccess())
  }

  renderNavigation () {
    // TODO: Add matching logic to highlight current route in the menu
    // TODO: Look into support for icons, and nested menu

    const navArray = [
      {
        text: 'Homepage',
        link: '/'
      },
      {
        text: 'Second page',
        link: '/secondPage'
      },
      {
        text: 'Third page',
        link: '/thirdPage'
      }
    ]
    return navArray.map(elem => (
      <MenuItem
        key={elem.text}
        caption={elem.text}
        onClick={() => this.props.history.push(elem.link)}
      />
    ))
  }

  render () {
    return (
      <Card className='menu'>
        <div>
          User Block
        </div>
        <div className='center'>
          <Button icon='bookmark' label='Logout' raised primary onClick={this.handleLogout} />
        </div>
        <MenuDivider />
        {this.renderNavigation()}
      </Card>
    )
  }
}

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(connect()(Navigation))
