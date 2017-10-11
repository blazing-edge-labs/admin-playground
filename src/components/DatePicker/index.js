import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-toolbox/lib/date_picker'

import { hasError } from 'utils/validator'

const Select = ({ input, meta, ...rest }) => (
  <DatePicker
    {...input}
    {...rest}
    error={hasError(meta)}
  />
)

Select.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default Select
