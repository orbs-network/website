import React from "react";

const FaqElement = ({ faq, border }) => {
  const borderStyle = `1px solid #${border}`;
  return (
    <li className="faq-element" style={{ border: borderStyle }}>
      <figure
        className="faq-element-arrow"
        style={{ borderLeft: borderStyle, borderBottom: borderStyle }}
      />
      <section className="faq-element-overlay"></section>
      <div className="faq-element-title">
        <p>{faq.title}</p>
      </div>
      <div className="faq-element-text">
        <p>{faq.text}</p>
      </div>
    </li>
  );
};

FaqElement.getInitialProps = async function (props) {
  const { faq, border } = await FetchMyDataFromSomewhere(props._ID);
  return { faq, border };
};
export default FaqElement;
