import React from "react";
import { isRoot } from "../../../util/mappers";
import WhitePaperCard from "../../home/cards/white-paper-card";
import WhitePaperBox from "../../white-papers/white-paper-box";

const WhitePaperMapper = (props) => {
  const { _ID } = props;
  switch (isRoot(_ID)) {
    case true:
      return <WhitePaperCard {...props} />;

    default:
      return <WhitePaperBox {...props} />;
  }
};

export default WhitePaperMapper;
