import React from "react";
import Img from "./Img";

const InnerLinks = ({ generateUrl, links, section }) => {
  return (
    <section className="inner-links flex-center">
      {links &&
        Object.keys(links).map((key) => {
          const url = links[key];
          const image = section[key];
          return url ? (
            <a href={url} target="_blank" className="flex-center" key={key}>
              <Img src={generateUrl(image)} alt="social network" />
            </a>
          ) : null;
        })}
    </section>
  );
};

export default InnerLinks;
