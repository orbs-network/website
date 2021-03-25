import React from "react";
import { images } from "../../../../assets/js/images";
import Img from "../../common/Img";

const CardLinks = ({ generateUrl, links, section }) => {
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
              <Img src={generateUrl(images[section][key])} />
            </a>
          );
        })}
    </section>
  );
};

export default CardLinks;
