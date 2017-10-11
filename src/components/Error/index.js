import React from 'react'
import PropTypes from 'prop-types'

import './style.sass'

const Error = ({ error }) => (
  <div className='error'>
    {error}
  </div>
)

Error.propTypes = {
  error: PropTypes.string
}

export default Error
