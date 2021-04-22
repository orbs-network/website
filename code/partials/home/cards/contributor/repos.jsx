import React from "react";
import { images } from "../../../../../assets/js/images";
import Img from "../../../shared/Img";

const Repos = ({
  locationImg,
  repositoriesTitle,
  firstRepositoryTitle,
  firstRepositoryText,
  firstRepositoryLanguage,
  secondRepositoryTitle,
  secondRepositoryText,
  secondRepositoryLanguage,
  generateUrl,
}) => {
  return (
    <section className="flex-between c-card-repos">
      <div className="c-card-repos-top flex-center">
        <Img src={generateUrl(images.globe.contributor.repo)} />
        <p>{repositoriesTitle}</p>
      </div>
      <span className="c-card-repos-section c-card-repos-section-ts">
        <h5>{firstRepositoryTitle}</h5>
        <p>{firstRepositoryText}</p>
        <aside>{firstRepositoryLanguage}</aside>
      </span>
      <span className="c-card-repos-section c-card-repos-section-js">
        <h5 className="capitalize">{secondRepositoryTitle}</h5>
        <p>{secondRepositoryText}</p>
        <aside>{secondRepositoryLanguage}</aside>
      </span>
    </section>
  );
};

export default Repos;
