import React from "react";
import { handleUrl } from "../../util/link";
import MainGrid from "../shared/MainGrid";

const HeaderMainImg = "/assets/img/ton-gateway/hero.svg"
const PoweredImg = "/assets/img/powered-by-orbs.png";
const GithubImg = "/assets/img/ton-gateway/github.svg";

function Header({ _body, _relativeURL, _ID, title, button }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  

  return (
    <header className="header ton-gateway-header">

      <MainGrid>
        <div className="ton-gateway-header-flex">
          <div className="ton-gateway-header-github">
            <p>{title}</p>
            <a
              href="https://github.com/orbs-network/ton-gateway"
              target="_blank"
            >
              <img src={generateUrl(GithubImg)} />
            </a>
          </div>
          <div className="ton-gateway-header-body">{_body}</div>
          <button className="ton-gateway-header-button">
            <p> {button}</p>
          </button>
        </div>
        <img
          src={generateUrl(HeaderMainImg)}
          className="ton-gateway-header-img ton-gateway-header-hero"
        />
    

        <img
          src={generateUrl(PoweredImg)}
          className="ton-gateway-header-img ton-gateway-header-powered"
        />
      </MainGrid>
    </header>
  );
}

export default Header;
