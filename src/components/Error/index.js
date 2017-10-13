import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Error = ({ error }) => (
  <div styleName='error'>
    {error}
  </div>
)

Error.propTypes = {
  error: PropTypes.string
}

export default Error
