import React from "react";
import { images } from "../../../assets/js/images";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "../../consts";
import { handleUrl } from "../../util/link";

const MetaTags = ({
  description,
  title,
  og_locale_alternate,
  og_locale,
  image,
  og_locale_alternate_2,
  _relativeURL,
  _ID,
  url,
}) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <React.Fragment>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <meta property="og:locale" content={og_locale} />
      <meta property="og:locale:alternate" content={og_locale_alternate} />
      {og_locale_alternate_2 && (
        <meta property="og:locale:alternate" content={og_locale_alternate_2} />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || DEFAULT_TITLE} />
      <meta
        property="og:description"
        content={description || DEFAULT_DESCRIPTION}
      />
      <meta property="og:url" content={url || "https://www.orbs.com/"} />
      <meta property="og:site_name" content="Orbs" />
      <meta
        property="og:image"
        content={generateUrl(image || images.meta.logo)}
      />
      <meta
        property="og:image:secure_url"
        content={generateUrl(image || images.meta.logo)}
      />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="512" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content={description || DEFAULT_DESCRIPTION}
      />
      <meta name="twitter:title" content={title || DEFAULT_TITLE} />
      <meta name="twitter:site" content="@orbs_network" />
      <meta
        name="twitter:image"
        content={generateUrl(image || images.meta.logo)}
      />
      <meta name="twitter:creator" content="@orbs_network" />

      <meta
        name="google-site-verification"
        content="4GBadCDqEPfribk9lcTcWcjKVyjjIusfdC0H2FYojDw"
      />
    </React.Fragment>
  );
};

export default MetaTags;
