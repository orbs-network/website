import React from "react";
import { colors } from "../../assets/js/consts/consts";
import ScrollTop from "../partials/shared/scroll-top";
import { handleUrl } from "../util/link";

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
  meta_tags,
}) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <html>
      <head>
        <title>{title}</title>
        {meta_tags}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossOrigin="anonymous"
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r124/three.min.js"></script>
        <script src="//unpkg.com/globe.gl"></script>
        <script type="module" src={generateUrl(`/assets/js/home/main.js`)} />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

        <link rel="stylesheet" href={generateUrl(`/assets/css/index.css`)} />
      </head>
      <body style={{ background: colors.main }}>
        <div className="app-wrapper">
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
