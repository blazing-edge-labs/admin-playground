import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { Button } from 'react-toolbox/lib/button'
import ImageUploader from 'components/ImageUploader'
import Input from 'components/Input'

class EditProfile extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (values) {
    console.log(values)
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <section>
        <h1>Edit Profile</h1>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field
            name='photo'
            component={ImageUploader}
          />
          <Field
            name='username'
            label='Username'
            component={Input}
          />
          <Field
            name='email'
            label='Email'
            component={Input}
          />
          <Button raised type='submit' className='button' primary label='Save' />
        </form>
      </section>
    )
  }
}

EditProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

const l1 = reduxForm({ form: 'EditProfile' })(EditProfile)
const l2 = connect(() => ({
  initialValues: {
    photo: 'https://avatars3.githubusercontent.com/u/32059990?s=200&v=4'
  }
}))(l1)

export default l2
