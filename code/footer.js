import React from 'react';

const Footer = ({ links, socials, _body, _relativeURL, _ID }) => (
  <>
    <nav className="level">
      <div className="level-left">
        {
          links.map((link, i) => (
            <p className="level-item" key={`footer-link-${i}`}>
              <a href={_relativeURL(link.link, _ID)}>
                {link.name}
              </a>
            </p>
          ))
        }
      </div>
      <div className="level-right">
        {
          socials.map((social, i) => (
            <p className="level-item" key={`social-${i}`}>
              <a href={social.link}>
                {social.type}
              </a>
            </p>
          ))
        }
      </div>
    </nav>
    { _body }
  </>
);

export default Footer;