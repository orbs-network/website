import React from "react";

const Section = (props) => {
  const { order, children, type } = props;
  const className = `network-${type}-${order} network-${type}`;
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
      <Section order="1" type="text">
        {expendingBox1}
      </Section>
      <Section order="2" type="text">
        {expendingBox2}
      </Section>
      <Section order="3" type="text">
        {expendingBox3}
      </Section>
      <Section order="1" type="images">
        {imagesGrid1}
      </Section>
      <div className="network-content-flex network-content-flex-1">
        <Section order="4" type="text">
          {expendingBox4}
        </Section>
        <Section order="5" type="text">
          {expendingBox5}
        </Section>
      </div>
      <Section order="1" type="boxes">
        {boxes1}
      </Section>
      <div className="network-content-flex network-content-flex-2">
        <Section order="6" type="text">
          {expendingBox6}
        </Section>
        <Section order="2" type="images">
          {imagesGrid2}
        </Section>
      </div>
      <Section order="2" type="boxes">
        {boxes2}
      </Section>
    </div>
  );
};

export default NetworkFlex;
