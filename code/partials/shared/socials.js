import React from "react";
import { handleUrl } from "../../util/link";

const Socials = ({ _relativeURL, _ID, links }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <ul className="socials">
      {links.map((link, index) => {
        return (
          <li className="socials-element" key={index}>
            <a href={link.url} target="_blank" rel="noopener">
              <img src={generateUrl(link.img)} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
