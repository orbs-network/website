import React from "react";
import MainGrid from "../shared/MainGrid";

const Componnet = ({
  guardianHeader,
  delegatorHeader,
  guardianBody,
  delegatorBody,
}) => {
  return (
    <>
      <div className="flex-start universe-first-flex universe-first-flex-desktop">
        <div className="universe-first-flex-headers universe-first-flex-sections universe-first-flex-headers-delegator">
          <MainGrid>
            {delegatorHeader}
            {guardianHeader}
          </MainGrid>
        </div>

        <div className="universe-first-flex-bodies universe-first-flex-sections universe-first-flex-headers-guardian">
          <MainGrid>
            {delegatorBody}
            {guardianBody}
          </MainGrid>
        </div>
      </div>
      <div className="flex-start universe-first-flex universe-first-flex-mobile">
        <div className="universe-first-flex-headers universe-first-flex-sections universe-first-flex-headers-delegator">
          <MainGrid>
            {delegatorHeader}
            {delegatorBody}
          </MainGrid>
        </div>

        <div className="universe-first-flex-bodies universe-first-flex-sections universe-first-flex-headers-guardian">
          <MainGrid>
            {guardianHeader}
            {guardianBody}
          </MainGrid>
        </div>
      </div>
    </>
  );
};

export default Componnet;
