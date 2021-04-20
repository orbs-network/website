import React from "react";

const FlexSection = ({ customClassName, children }) => {
  const className = `network-content-flex flex-between ${customClassName}`;
  return <section className={className}>{children}</section>;
};
const NetworkFlex = ({
  expendingBox1,
  expendingBox2,
  expendingBox3,
  imagesGrid1,
  expendingBox4,
  expendingBox5,
  boxes1,
  boxes2,
  expendingBox6,
  imagesGrid2,
}) => {
  return (
    <div className="network-content flex-column main-grid">
      <div className="network-content-top">
        {expendingBox1}
        {expendingBox2}
        {expendingBox3}
      </div>
      {imagesGrid1}
      <FlexSection customClassName="network-content-first-section">
        {expendingBox4}
        {expendingBox5}
      </FlexSection>
      {boxes1}
      <FlexSection customClassName="network-content-second-section">
        {expendingBox6}
        {imagesGrid2}
      </FlexSection>
      {boxes2}
    </div>
  );
};

export default NetworkFlex;
