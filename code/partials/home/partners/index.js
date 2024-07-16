import React from 'react'

const Partners = ({ partners, _body }) => {
  return (
    <div className="home-partners">
      <div className="home-partners-text">{_body}</div>
      <div className="home-partners-list">
        {partners.map((p) => (
          <img key={p} src={p} alt={p} />
        ))}
      </div>
    </div>
  )
}

export default Partners
