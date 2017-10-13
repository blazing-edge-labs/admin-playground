import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { Card } from 'react-toolbox/lib/card'
// import { TextField } from 'redux-form-material-ui'

import { Button } from 'react-toolbox/lib/button'
import ErrorComponent from 'components/Error'
import Input from 'components/Input'
import { authenticate } from 'actions/user'
import { isRequired } from 'utils/validator'

import './style.scss'

class Login extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
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
  error: PropTypes.string
}

export default connect()(reduxForm({
  form: 'loginForm'
})(Login))
