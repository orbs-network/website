import React from "react";
import TextCard from "./TextCard";

const TextCards = ({ customClassName, section }) => {
  const { cards } = section;
  return (
    <div className="text-cards flex-start">
      {cards.map((card) => {
        return <TextCard card={card} />;
      })}
    </div>
  );
};
TextCards.getInitialProps = async function (props) {
  const { customClassName, section } = await FetchMyDataFromSomewhere(
    props._ID
  );
  return { customClassName, section };
};
export default TextCards;
