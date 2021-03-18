import React from "react";
import { images } from "../../../../assets/js/images";
import Img from "../../common/Img";

const CardLinks = ({
  generateUrl,
  linkedin,
  link,
  twitter,
  telegram,
  email,
  github,
  section,
}) => {
  return (
    <section className="card-links flex-center">
      {email && (
        <a href={`mailto:${email}`} target="_blank" className="flex-center">
          <Img src={generateUrl(images.globe[section].email)} />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" className="flex-center">
          <Img src={generateUrl(images.globe[section].linkedin)} />
        </a>
      )}
      {link && (
        <a href={link} target="_blank" className="flex-center">
          <Img src={generateUrl(images.globe[section].link)} />
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank" className="flex-center">
          <Img src={generateUrl(images.globe[section].twitter)} />
        </a>
      )}
      {telegram && (
        <a href={telegram} target="_blank" className="flex-center">
          <Img src={generateUrl(images.globe[section].telegram)} />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" className="flex-center">
          <Img src={generateUrl(images.globe[section].github)} />
        </a>
      )}
    </section>
  );
};

export default CardLinks;
