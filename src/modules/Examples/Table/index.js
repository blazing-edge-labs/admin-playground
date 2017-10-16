import React from 'react'

import Table from 'components/Table'

export default function () {
  const tableRows = [{
    elements: ['Mateo', 'Karadza', <p>A react component</p>, 'mateo@blazingedge.io'],
    onClick: function () {}
  }, {
    elements: ['Jane', 'Doe', <a href='https://blazingedge.io/' target='_blank'>blazingedge.io</a>, 'info@blazingedge.io']
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
