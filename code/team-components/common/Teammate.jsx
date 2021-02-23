import React from "react";
import { images } from "../../../assets/js/images";

const Teammate = ({ data, generteUrl }) => {
  const { avatar, name, position, telegram, linkedin, twitter } = data;
  return (
    <div className="teammate flex-column">
      <figure className="teammate-avatar">
        <img src={avatar} />
      </figure>
      <div className="teammate-info">
        <p className="teammate-name">{name}</p>
        <p className="teammate-position">{position}</p>
        <section className="teammate-socials flex-start">
          <ul className="flex-start">
            <li className="teammate-socials-link">
              <img src={generteUrl(images.telegram)} />
              <a href={telegram} />
            </li>
            <li className="teammate-socials-link">
              <img src={generteUrl(images.linkedin)} />
              <a href={linkedin} />
            </li>
            <li className="teammate-socials-link">
              <img src={generteUrl(images.twitter)} />
              <a href={twitter} />
            </li>
          </ul>
          <figure className="teammate-border" />
          <figure className="teammate-arrow" />
        </section>
      </div>
    </div>
  );
};
Teammate.getInitialProps = async function (props) {
  const { data, generteUrl } = await FetchMyDataFromSomewhere(props._ID);
  return { data, generteUrl };
};

export default Teammate;
