import React from "react";

const Socials = ({ _relativeURL, _ID, links }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <ul className="socials">
      {links.map((link, index) => {
        return (
          <li className="socials-element" key={index}>
            <a href={link.url} target="_blank">
              <img src={generateUrl(link.img)} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
