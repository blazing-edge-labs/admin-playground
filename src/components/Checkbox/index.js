import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'react-toolbox/lib/checkbox'

class CheckboxComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      focused: false
    }
  }

  render () {
    const { input, ...rest } = this.props

    return (
      <Checkbox
        {...input}
        {...rest}
        checked={!!input.value}
      />
    )
  }
}

CheckboxComponent.propTypes = {
  input: PropTypes.object.isRequired
}

export default CheckboxComponent
