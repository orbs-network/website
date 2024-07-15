import React from 'react'
import { images } from '../../../assets/js/images'
import Img from '../shared/Img'
import Flags from './components/flags'

const NavbarMenu = ({
  socials,
  overview,
  resources,
  community,
  _relativeURL,
  _ID,
  home,
  languages,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`
  }
  return (
    <div className="navbar-menu">
      <div className="navbar-menu-header flex-between">
        <button className="hide-menu">
          <Img src={generateUrl(images.common.close)} alt="menu-toggle" />
        </button>
        <a href={generateUrl(home)} className="logo" rel="noopener">
          <Img src={generateUrl(images.common.logo)} alt="orbs logo" />
          <p>ORBS</p>
        </a>
      </div>
      <Flags
        flags={languages}
        generateUrl={generateUrl}
        customClassName="navbar-menu-mobile-flags"
      />
      <div className="navbar-menu-flex">
        {overview}
        {community}
        {resources}
      </div>
      <div className="navbar-menu-mobile-social">{socials}</div>
    </div>
  )
}

export default NavbarMenu
