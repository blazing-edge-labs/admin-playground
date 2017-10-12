import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { Button } from 'react-toolbox/lib/button'
import Checkbox from 'components/Checkbox'
import DatePicker from 'components/DatePicker'
import Input from 'components/Input'
import Radio from 'components/Radio'
import Select from 'components/Select'

// TODO: Create label component for components without one: Checkbox, RadioGroup

class FormExample extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (values) {
    // const { dispatch } = this.props

    console.log(values)
  }

  render () {
    const { handleSubmit } = this.props

    const radioOptions = [{
      value: 'one',
      label: 'One'
    }, {
      value: 'two',
      label: 'Two'
    }, {
      value: 'three',
      label: 'Three',
      disabled: true
    }]

    const selectOptions = [{
      value: 'one',
      label: 'One'
    }, {
      value: 'two',
      label: 'Two'
    }, {
      value: 'three',
      label: 'Three'
    }]

    return (
      <section>
        <h1>Form Example</h1>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field
            name='plain'
            label='Plain focused field'
            autoFocus
            component={Input}
          />
          <Field
            name='disabledText'
            label='Disabled field'
            disabled
            component={Input}
          />
          <Field
            name='email'
            label='Email field'
            type='email'
            component={Input}
          />
          <Field
            name='password'
            label='Password field'
            type='password'
            component={Input}
          />
          <br />
          <Field
            name='checkbox1'
            label='Checkbox One'
            component={Checkbox}
          />
          <Field
            name='checkbox2'
            label='Checkbox Two'
            disabled
            component={Checkbox}
          />
          <Field
            name='checkbox3'
            label='Checkbox Three'
            component={Checkbox}
          />
          <br />
          <Field
            name='radio1'
            component={Radio}
            options={radioOptions}
          />
          <Field
            name='select1'
            label='Choose something'
            component={Select}
            source={selectOptions}
          />
          <Field
            name='date1'
            label='Date picker'
            component={DatePicker}
          />
          <Button raised type='submit' className='button' primary label='Login' />
        </form>
      </section>
    )
  }
}

FormExample.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(state => ({
  initialValues: {
    disabledText: 'Read only text goes here',
    checkbox3: true
  }
}))(reduxForm({
  form: 'reduxForm'
})(FormExample))
