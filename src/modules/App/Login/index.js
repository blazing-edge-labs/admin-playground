import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import store from 'store'
import get from 'lodash/get'

import { reAuthenticate, authenticate } from 'actions/user'
import { Button } from 'react-toolbox/lib/button'
import { Card } from 'react-toolbox/lib/card'
import ErrorComponent from 'components/Error'
import Input from 'components/Input'
import { isRequired } from 'utils/validator'

import './style.scss'

class Login extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.reAuthenticate = this.reAuthenticate.bind(this)

    this.reAuthenticate()
  }

  reAuthenticate () {
    // TODO: Come up with a design for showing user the reauthentication process
    const { dispatch, history, location } = this.props

    if (store.get('token')) {
      return dispatch(reAuthenticate())
        .then(() => history.replace(get(location, 'state.from.pathname', '/')))
    }
  }

  handleSubmit (values) {
    const { dispatch } = this.props

    return dispatch(authenticate(values))
  }

  render () {
    const { handleSubmit, error } = this.props

    return (
      <div styleName='page'>
        <main styleName='wrapper'>
          <Card styleName='card'>
            <h1>Application name</h1>
            <form onSubmit={handleSubmit(this.handleSubmit)}>
              <Field
                component={Input}
                name='email'
                label='Email'
                floating
                validate={isRequired}
              />
              <Field
                component={Input}
                type='password'
                name='password'
                label='Password'
                floating
              />
              <div styleName='center'>
                <Button raised type='submit' primary label='Login' />
              </div>
              <ErrorComponent error={error} />
            </form>
          </Card>
        </main>
      </div>
    )
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  error: PropTypes.string
}

export default connect()(reduxForm({
  form: 'loginForm'
})(Login))
