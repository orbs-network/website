import React from "react";
import { handleUrl } from "../../util/link";
import MainGrid from "./MainGrid";
const PoweredImg = "/assets/img/powered.png";
const GithubImg = "/assets/img/ton-gateway/github.svg";
const telegramImg = "/assets/img/telegram.svg";

function Header({
  _body,
  _relativeURL,
  _ID,
  title,
  button,
  github,
  mainImg,
  telegram,
}) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <header className="header product-header">
      <MainGrid>
        <div className="product-header-flex">
          <div className="product-header-body">
            <div className="product-header-github">
              <p>{title}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                <a href={github} target="_blank">
                  <img src={generateUrl(GithubImg)} />
                </a>
                {telegram && (
                  <a href={telegram} target="_blank">
                    <img src={generateUrl(telegramImg)} />
                  </a>
                )}
              </div>
            </div>
            {_body}
          </div>
          {button && <div className="product-header-button">{button}</div>}
        </div>
        <img
          src={generateUrl(mainImg)}
          className="product-header-img product-header-hero"
        />

        <img
          src={generateUrl(PoweredImg)}
          className="product-header-img product-header-powered"
        />
      </MainGrid>
    </header>
  );
}

export default Header;
