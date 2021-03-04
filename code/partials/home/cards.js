import React from "react";
import ContributorCard from "../../globe-components/cards/ContributorCard";
import DelegatorCard from "../../globe-components/cards/DelegatorCard";
import GuardianCard from "../../globe-components/cards/GuardianCard";

const Cards = ({ _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <>
      <ContributorCard generateUrl={generateUrl} />
      <DelegatorCard generateUrl={generateUrl} />
      <GuardianCard />
    </>
  );
};

export default Cards;
