import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import { images } from "../../../assets/js/images";
import Img from "../common/Img";

const Teammate = ({ data, generateUrl }) => {
  const { avatar, name, role, telegram, linkedin, twitter } = data;
  return (
    <div className="teammate flex-column" data-aos={animations.fadeTop}>
      <figure className="teammate-avatar">
        <Img
          src={generateUrl(avatar)}
          placeholder="https://picsum.photos/200/300"
        />
      </figure>
      <div className="teammate-info">
        <p className="teammate-name text-overflow">{name}</p>
        <p className="teammate-position">{role}</p>
        <section className="teammate-socials flex-start">
          <div className="teammate-socials-links flex-start">
            <a
              href={telegram}
              target="_blank"
              className="teammate-socials-link"
            >
              <img src={generateUrl(images.team.socials.telegram)} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              className="teammate-socials-link"
            >
              <img src={generateUrl(images.team.socials.linkedin)} />
            </a>
            <a href={twitter} target="_blank" className="teammate-socials-link">
              <img src={generateUrl(images.team.socials.twitter)} />
            </a>
          </div>
          <figure className="teammate-border" />
          <img
            src={generateUrl(images.team.arrow)}
            className="teammate-arrow"
          />
        </section>
      </div>
    </div>
  );
};

export default Teammate;
