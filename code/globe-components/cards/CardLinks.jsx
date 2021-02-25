import React from "react";
import { images } from "../../../assets/js/images";

const CardLinks = ({ generateUrl }) => {
  return (
    <section className="card-links flex-center">
      <a href="" className="flex-center">
        <img src={generateUrl(images.socials.github)} />
      </a>
      <a href="" className="flex-center">
        <img src={generateUrl(images.socials.github)} />
      </a>
      <a href="" className="flex-center">
        <img src={generateUrl(images.socials.github)} />
      </a>
    </section>
  );
};
CardLinks.getInitialProps = async function (props) {
  const generateUrl = await FetchMyDataFromSomewhere(props._ID);
  return { generateUrl };
};

export default CardLinks;
