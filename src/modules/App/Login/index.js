import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Card } from 'react-toolbox/lib/card'
// import { TextField } from 'redux-form-material-ui'

import { Button } from 'react-toolbox/lib/button'
import Input from 'components/Input'
import { loginSuccess } from 'actions/user'
import { isRequired } from 'utils/validator'

import './style.sass'

class Login extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit (e) {
    const { dispatch } = this.props

    dispatch(loginSuccess())
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <div className='page'>
        <main className='wrapper'>
          <Card className='card'>
            <h1>Application name</h1>
            <form onSubmit={handleSubmit(this.handleSubmit)}>
              <Field
                component={Input}
                name='username'
                label='Username'
                floating
                validate={isRequired}
              />
              <Field
                component={Input}
                type='password'
                name='password'
                label='Password'
                floating
                validate={isRequired}
              />
              <div className='center'>
                <Button raised type='submit' className='button' primary label='Login' />
              </div>
            </form>
          </Card>
        </main>
      </div>
    )
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(reduxForm({
  form: 'loginForm'
})(Login))
