import React from "react";
import Img from "./Img";

const InnerLinks = ({ generateUrl, links, section }) => {
  return (
    <section className="inner-links flex-center">
      {links &&
        Object.keys(links).map((key) => {
          return (
            <a
              href={links[key]}
              target="_blank"
              className="flex-center"
              key={key}
            >
              <Img src={generateUrl(section[key])} />
            </a>
          );
        })}
    </section>
  );
};

export default InnerLinks;
