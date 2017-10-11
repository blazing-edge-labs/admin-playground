import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-toolbox/lib/dropdown'

import { hasError } from 'utils/validator'

const Select = ({ input, meta, ...rest }) => (
  <Dropdown
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
