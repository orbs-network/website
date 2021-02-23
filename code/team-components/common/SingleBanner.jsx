import React from "react";

const SingleBanner = ({ url, customClassName }) => {
  const mainClassName = "banner-single banner";
  const className = customClassName
    ? `${customClassName} ${mainClassName}`
    : mainClassName;
  return (
    <figure className={className}>
      <img src={url} />
    </figure>
  );
};
SingleBanner.getInitialProps = async function (props) {
  const { url, customClassName } = await FetchMyDataFromSomewhere(props._ID);
  return { url, customClassName };
};

export default SingleBanner;
