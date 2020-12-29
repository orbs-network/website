import React from 'react';

const Footer = ({ links, socials, _body, _relativeURL, _ID }) => (
  <>
    <nav class="level">
      <div class="level-left">
        {
          links.map(link => (
            <p class="level-item">
              <a href={_relativeURL(link.link, _ID)}>
                {link.name}
              </a>
            </p>
          ))
        }
      </div>
      <div class="level-right">
        {
          socials.map(social => (
            <p class="level-item">
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