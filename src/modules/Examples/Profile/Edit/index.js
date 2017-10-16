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
            label='Usernamee'
            component={Input}
          />
          <Field
            name='email'
            label='Email'
            component={Input}
          />
          <Button raised type='submit' className='button' primary label='Login' />
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
    photo: 'https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_960_720.jpg'
  }
}))(l1)

export default l2
