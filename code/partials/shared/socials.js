import React from "react";

const Socials = ({ _relativeURL, _ID, links }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <ul class="socials">
      {links.map((link) => {
        return (
          <li className="socials-element">
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
