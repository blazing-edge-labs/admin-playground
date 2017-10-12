import React from 'react'
import PropTypes from 'prop-types'

import './styles.sass'

function renderHead (elements) {
  return (
    <tr className='head'>
      {elements.map(elem => (
        <th key={elem}>
          {elem}
        </th>
      ))}
    </tr>
  )
}

function renderBody (rows) {
  return rows.map((row, i) => (
    <tr key={i} onClick={row.onClick}>
      {row.elements.map((elem, i) => (
        <td key={`${row.key}-${elem}-${i}`}>
          {elem}
        </td>
      ))}
    </tr>
  ))
}

const TableComponent = ({ head, rows }) => {
  return (
    <table>
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
