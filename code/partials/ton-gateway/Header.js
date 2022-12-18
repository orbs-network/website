import React from "react";
import { handleUrl } from "../../util/link";
import MainGrid from "../shared/MainGrid";

const HeaderMainImg = "/assets/img/ton-gateway/header.svg"
const FigureImg1 = "/assets/img/ton-gateway/figure-1.svg";
const FigureImg2 = "/assets/img/ton-gateway/figure-2.svg";
const PoweredImg = "/assets/img/powered-by-orbs.png";
const GithubImg = "/assets/img/ton-gateway/github.svg";
const ArrowRight = "/assets/img/ton-gateway/arrow-right.svg";
const StarsImg = "/assets/img/ton-gateway/stars.svg";

function Header({ _body, _relativeURL, _ID, title, button }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  

  return (
    <header className="header ton-gateway-header">
      <img
        src={generateUrl(FigureImg2)}
        className="ton-gateway-header-img ton-gateway-header-figure-2"
      />
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
            <img src={generateUrl(ArrowRight)} />
          </button>
        </div>
        <img
          src={generateUrl(HeaderMainImg)}
          className="ton-gateway-header-img ton-gateway-header-hero"
        />
        <img
          src={generateUrl(FigureImg1)}
          className="ton-gateway-header-img ton-gateway-header-figure-1"
        />

        <img
          src={generateUrl(PoweredImg)}
          className="ton-gateway-header-img ton-gateway-header-powered"
        />
        <img
          src={generateUrl(StarsImg)}
          className="ton-gateway-header-img ton-gateway-header-stars"
        />
      </MainGrid>
    </header>
  );
}

export default Header;
