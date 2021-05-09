import React from "react";
import { colors } from "../../assets/js/consts/consts";
import AppLoader from "../partials/shared/app-loader";
import ScrollTop from "../partials/shared/scroll-top";
import MetaTags from "./parts/meta";

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
  disable_animations,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <html>
      <head>
        <title>{title}</title>
        <MetaTags
          meta_description={meta_description}
          generateUrl={generateUrl}
          title={title}
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
