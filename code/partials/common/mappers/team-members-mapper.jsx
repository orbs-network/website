import React from "react";
import { isRoot } from "../../../util/mappers";
import MemberCard from "../../home/cards/member";
import Member from "../../team/member/member";
const TeamMemberMapper = (props) => {
  const { _ID } = props;
  switch (isRoot(_ID)) {
    case true:
      return <MemberCard {...props} />;

    default:
      return <Member {...props} />;
  }
};

export default TeamMemberMapper;
