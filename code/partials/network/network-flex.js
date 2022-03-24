import React from "react";

const Section = (props) => {
  const { customClassName, children, type } = props;
  const className = `network-${type}-${customClassName} network-${type}`;
  return <section className={className}>{children}</section>;
};

const NetworkFlex = ({
  expendingBox1,
  expendingBox2,
  expendingBox3,
  imagesGrid1,
  expendingBox4,
  expendingBox5,
  expendingBox7,
  boxes1,
  boxes2,
  expendingBox6,
  imagesGrid2,
  layer3Infrastructure
}) => {
  return (
    <div className="network-content flex-column main-grid">
      <Section customClassName="1" type="text">
        {expendingBox1}
      </Section>
      <Section customClassName="2" type="text">
        {expendingBox7}
      </Section>
      <Section customClassName="7" type="text">
        {layer3Infrastructure}
      </Section>
      <Section customClassName="2" type="text">
        {expendingBox2}
      </Section>
      <Section customClassName="3" type="text">
        {expendingBox3}
      </Section>
      <Section customClassName="1" type="images">
        {imagesGrid1}
      </Section>
      <div className="network-content-flex network-content-flex-1">
        <Section customClassName="4" type="text">
          {expendingBox4}
        </Section>
        <Section customClassName="5" type="text">
          {expendingBox5}
        </Section>
      </div>
      <Section customClassName="1" type="boxes">
        {boxes1}
      </Section>
      <div className="network-content-flex network-content-flex-2">
        <Section customClassName="6" type="text">
          {expendingBox6}
        </Section>
        <Section customClassName="2" type="images">
          {imagesGrid2}
        </Section>
      </div>
      <Section customClassName="2" type="boxes">
        {boxes2}
      </Section>
    </div>
  );
};

export default NetworkFlex;
