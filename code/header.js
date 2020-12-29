import React from 'react';

const Header = ({ languages, links, _relativeURL, _ID }) => (
  <>
    <nav class="level">
      <div class="level-left"></div>
      <div class="level-right">
        {
          languages.map(language => (
            <p class="level-item">
              <a href={_relativeURL(language.link, _ID)}>
                <img src={_relativeURL(`/assets/img/language-${language.id}.png`, _ID)} />
              </a>
            </p>
          ))
        }
      </div>
    </nav>
    <nav class="level">
      <div class="level-left"></div>
      <div class="level-right">
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
    </nav>
  </>
);

export default Header;