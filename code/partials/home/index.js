import React from 'react'
import { handleUrl } from '../../util/link'

const Main = ({
  socials,
  link_text,
  link_url,
  title,
  cards,
  _relativeURL,
  _ID,
}) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID)
  }

  return (
    <main className="home">
      <div id="guardianDetails"></div>
      {cards}
      <div className="home-flex main-grid flex-start">
        <div className="home-flex-left flex-column">
          <section />
          <div className="home-flex-left-text"> {title}</div>
          <a href={link_url} className="home-link">
            {link_text}
          </a>
          {socials}
        </div>

        <div className="globe-container" style={{ display: 'none' }}>
          <div id="globeArea"></div>
        </div>
      </div>
      <script src={generateUrl('/assets/js/dependencies/jquery.js')}></script>
      <script src={generateUrl(`/assets/js/dependencies/typed.js`)} />

      <script src={generateUrl('/assets/js/dependencies/three.js')}></script>
      <script src={generateUrl('/assets/js/dependencies/globe.js')}></script>
      <script type="module" src={generateUrl(`/assets/js/home/main.js`)} />
    </main>
  )
}

export default Main
