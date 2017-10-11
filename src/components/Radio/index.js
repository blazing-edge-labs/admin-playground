import React from 'react'
import PropTypes from 'prop-types'
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio'

// TODO: Issue, nested radio options are not accessible, first or last options are only accessible via tab depending on the direction

function renderOptions (options) {
  return options.map(o => (
    <RadioButton key={o.value} {...o} />
  ))
}

const RadioComponent = ({ options, input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
  >
    {renderOptions(options)}
  </RadioGroup>
)

RadioComponent.propTypes = {
  input: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RadioComponent
