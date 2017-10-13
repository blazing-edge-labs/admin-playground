import React from 'react'

import Table from 'components/Table'

export default function () {
  const tableRows = [{
    elements: ['Mateo', 'Karadza', '', 'mateo@blazingedge.io'],
    onClick: function () {}
  }, {
    elements: ['Jane', 'Doe', 'blazingedge.io', 'info@blazingedge.io']
  }, {
    elements: ['John', 'Doe', '', 'engineering@blazingedge.io']
  }]

  return (
    <section>
      <h1>Table example</h1>
      <Table
        head={['First Name', 'Last Name', 'Website', 'Address']}
        rows={tableRows}
      />
    </section>
  )
}
