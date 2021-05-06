import React from "react";
import { colors } from "../../assets/js/consts/consts";
import { images } from "../../assets/js/images";
import AppLoader from "../partials/shared/app-loader";
import ScrollTop from "../partials/shared/scroll-top";

const Page = ({
  title,
  header,
  footer,
  script,
  _relativeURL,
  _ID,
  main,
  subscribe,
  gdpr,
  meta_description,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <html>
      <head style={{ background: colors.main, display: "none" }}>
        <title>Orbs - {title}</title>
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

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href={generateUrl(`/assets/css/index.css`)} />
      </head>
      <AppLoader generateUrl={generateUrl} />
      <body style={{ background: colors.main }}>
        <div style={{ opacity: 0 }} className="app-wrapper">
          {header}
          {main}
          {subscribe && subscribe}
          {gdpr}
          {script != undefined ? (
            <script
              type="module"
              src={generateUrl(`/assets/js/${script}.js`)}
            />
          ) : null}

          {footer && footer}
          <ScrollTop generateUrl={generateUrl} />
        </div>
      </body>
    </html>
  );
};

export default Page;
