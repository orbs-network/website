import React from "react";
import { images } from "../../../assets/js/images";

const MetaTags = ({ meta_description, generateUrl, title }) => {
  return (
    <React.Fragment>
      <meta charSet="utf-8" />
      <meta name="description" content={meta_description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ko_KR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={meta_description} />
      <meta property="og:url" content="https://www.orbs.com/" />
      <meta property="og:site_name" content="Orbs" />
      <meta property="og:image" content={generateUrl(images.meta.logo)} />
      <meta
        property="og:image:secure_url"
        content={generateUrl(images.meta.logo)}
      />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="512" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={meta_description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@orbs_network" />
      <meta name="twitter:image" content={generateUrl(images.meta.logo)} />
      <meta name="twitter:creator" content="@orbs_network" />
      <meta
        name="google-site-verification"
        content="4GBadCDqEPfribk9lcTcWcjKVyjjIusfdC0H2FYojDw"
      />
    </React.Fragment>
  );
};

export default MetaTags;
