import React from "react";

const TextCard = ({ customClassName, card }) => {
  const { text, title, image } = card;
  return (
    <div className="text-card flex-column">
      <h4 className="text-card-title"> {title}</h4>
      <p className="text-card-text">{text}</p>
      <figure className="text-card-img">
        <img src={image} />
      </figure>
    </div>
  );
};
TextCard.getInitialProps = async function (props) {
  const { customClassName, card } = await FetchMyDataFromSomewhere(props._ID);
  return { customClassName, card };
};
export default TextCard;
