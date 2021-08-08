import React from "react";
import { isRoot } from "../../../util/mappers";
import WhitePaperBox from "../../white-papers/white-paper-box";

const WhitePaperMapper = (props) => {
  const { _ID } = props;
  return <WhitePaperBox {...props} />;
  // switch (isRoot(_ID)) {
  //   case true:
  //     return <WhitePaperCard {...props} />;

  //   default:
  //     return <WhitePaperBox {...props} />;
  // }
};

export default WhitePaperMapper;
