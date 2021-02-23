import React from "react";

const CardLinks = ({ generteUrl }) => {
  return (
    <section className="card-links flex-center">
      <a href="" className="flex-center">
        <img src={generteUrl("../../assets/img/github.svg")} />
      </a>
      <a href="" className="flex-center">
        <img src={generteUrl("../../assets/img/github.svg")} />
      </a>
      <a href="" className="flex-center">
        <img src={generteUrl("../../assets/img/link.svg")} />
      </a>
    </section>
  );
};
CardLinks.getInitialProps = async function (props) {
  const generteUrl = await FetchMyDataFromSomewhere(props._ID);
  return { generteUrl };
};

export default CardLinks;
