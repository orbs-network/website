import React from 'react'
import { handleUrl } from '../../util/link'

const Main = ({
  socials,
  link1_text,
  link1_url,
  link2_text,
  link2_url,
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
          <div className="home-flex-left-text">{title}</div>
          <div className="home-buttons">
            <a href={link1_url} className="home-buttons-link">
              {link1_text}
            </a>
            <a href={link2_url} className="home-buttons-link">
              {link2_text}
            </a>
          </div>
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
