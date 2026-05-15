import React from "react";
import MainGrid from "../shared/MainGrid";

function Footer({ logo, logoAlt, body1, body2, body3, socials }) {
  return (
    <footer className="institutional-footer">
      <MainGrid>
        <div className="institutional-footer-inner">
          <div className="institutional-footer-brand">
            <img
              className="institutional-footer-logo"
              src={logo}
              alt={logoAlt || "Orbs"}
            />
            <p className="institutional-footer-copy">
              {body1}<br />
              {body2}<br />
              {body3}
            </p>
          </div>

          <ul className="institutional-footer-socials">
            {(socials || []).map((s, i) => (
              <li key={i}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.alt}
                >
                  <img src={s.img} alt={s.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </MainGrid>
    </footer>
  );
}

export default Footer;
