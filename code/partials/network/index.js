import React from 'react'

const Network = ({
  first_section,
  second_section,
  products_section,
  why_section,
  mission_section,
  how_section,
  _body,
}) => {
  return (
    <main className="network page">
      <header className="header network-header">{_body}</header>

      {first_section}
      {second_section}
      {products_section}
      {why_section}
      {mission_section}
      {how_section}
    </main>
  )
}

export default Network
