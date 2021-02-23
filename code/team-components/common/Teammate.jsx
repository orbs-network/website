import React from "react";

const Teammate = ({ data }) => {
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
              <img src="../../../assets/img/socials/telegram.png" />
              <a href={telegram} />
            </li>
            <li className="teammate-socials-link">
              <img src="../../../assets/img/socials/linkedin.png" />
              <a href={linkedin} />
            </li>
            <li className="teammate-socials-link">
              <img src="../../../assets/img/socials/twitter.png" />
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
  const data = await FetchMyDataFromSomewhere(props._ID);
  return { data };
};

export default Teammate;
