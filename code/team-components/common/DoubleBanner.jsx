import React from "react";

const DoubleBanner = ({ url, url2, customClassName }) => {
  const mainClassName = "banner-double banner";
  const className = customClassName
    ? `${customClassName} ${mainClassName}`
    : mainClassName;
  return (
    <figure className={className}>
      <img src={url} />
      <img src={url2} />
    </figure>
  );
};
DoubleBanner.getInitialProps = async function (props) {
  const { url, url2, customClassName } = await FetchMyDataFromSomewhere(
    props._ID
  );
  return { url, url2, customClassName };
};

export default DoubleBanner;
