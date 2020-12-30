import React from 'react';

const Header = ({ languages, links, _relativeURL, _ID }) => (
  <>
    <nav className="level">
      <div className="level-left"></div>
      <div className="level-right">
        {
          languages.map((language, i) => (
            <p className="level-item" key={`language-${i}`} >
              <a href={_relativeURL(language.link, _ID)}>
                <img src={_relativeURL(`/assets/img/language-${language.id}.png`, _ID)} />
              </a>
            </p>
          ))
        }
      </div>
    </nav>
    <nav className="level">
      <div className="level-left"></div>
      <div className="level-right">
        {
          links.map((link, i) => (
            <p className="level-item" key={`header-link-${i}`}>
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