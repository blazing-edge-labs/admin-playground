import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ user, Component, ...rest }) => {
  if (user) return <Route component={Component} />

  return <Redirect to={{
    pathname: '/login',
    state: { from: rest.location }
  }} />
}

PrivateRoute.propTypes = {
  Component: PropTypes.any,
  user: PropTypes.object,
  location: PropTypes.object.isRequired
}

export default connect(state => ({
  user: state.user
}))(PrivateRoute)
