import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

function renderHead (elements) {
  return (
    <tr styleName='tr head'>
      {elements.map(elem => (
        <th styleName='th' key={elem}>
          {elem}
        </th>
      ))}
    </tr>
  )
}

function renderBody (rows) {
  return rows.map((row, i) => (
    <tr styleName={`tr ${row.onClick ? 'clickable' : ''}`} key={i} onClick={row.onClick}>
      {row.elements.map((elem, i) => (
        <td styleName='td' key={`${row.key}-${elem}-${i}`}>
          {elem}
        </td>
      ))}
    </tr>
  ))
}

const TableComponent = ({ head, rows }) => {
  return (
    <table styleName='table'>
      <thead>
        {renderHead(head)}
      </thead>
      <tbody>
        {renderBody(rows)}
      </tbody>
    </table>
  )
}

TableComponent.propTypes = {
  head: PropTypes.array.isRequired,
  rows: PropTypes.oneOfType([PropTypes.object, PropTypes.array]) // should be just array, check
}

TableComponent.defaultProps = {
  rows: []
}

export default TableComponent
