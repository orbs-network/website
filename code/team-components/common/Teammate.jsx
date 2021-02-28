import React from "react";
import { images } from "../../../assets/js/images";

const Teammate = ({ data, generateUrl }) => {
  const { avatar, name, role, telegram, linkedin, twitter } = data;
  return (
    <div className="teammate flex-column" data-aos="fade-up">
      <figure className="teammate-avatar">
        <img src={"https://picsum.photos/200/300" || avatar} />
      </figure>
      <div className="teammate-info">
        <p className="teammate-name">{name}</p>
        <p className="teammate-position">{role}</p>
        <section className="teammate-socials flex-start">
          <ul className="flex-start">
            <li className="teammate-socials-link">
              <img src={generateUrl(images.socials.telegram)} />
              <a href={telegram} />
            </li>
            <li className="teammate-socials-link">
              <img src={generateUrl(images.socials.linkedin)} />
              <a href={linkedin} />
            </li>
            <li className="teammate-socials-link">
              <img src={generateUrl(images.socials.twitter)} />
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
  const { data, generateUrl } = await FetchMyDataFromSomewhere(props._ID);
  return { data, generateUrl };
};

export default Teammate;
