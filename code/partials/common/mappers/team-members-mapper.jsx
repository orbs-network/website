import React from "react";
import MemberCard from "../../home/cards/member";
import Member from "../../team/member/member";
const TeamMemberMapper = (props) => {
  const { _ID } = props;
  switch (_ID) {
    case "team":
      return <Member {...props} />;

    default:
      return <MemberCard {...props} />;
  }
};

export default TeamMemberMapper;
