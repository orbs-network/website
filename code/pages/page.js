import React from "react";
import { colors } from "../../assets/js/consts/consts";
import { images } from "../../assets/js/images";
import AppLoader from "../partials/shared/app-loader";
import MetaTags from "../partials/shared/meta";
import ScrollTop from "../partials/shared/scroll-top";
import { handleUrl } from "../util/link";

const Page = (props) => {
  const {
    title,
    header,
    footer,
    script,
    _relativeURL,
    _ID,
    main,
    subscribe,
    gdpr,
    style,
  } = props;

  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  
  return (
    <html>
      <head>
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href={generateUrl(images.common.favicon)}
          type="image/x-icon"
        />

        <MetaTags {...props} />

        <script src={generateUrl('/assets/js/dependencies/aos.js')}></script>
        <script src="https://www.googletagmanager.com/gtag/js?id=G-HJ74DHDLS3" />
        <script
          async
          src={generateUrl('/assets/js/dependencies/twitter-widgets.js')}
          charSet="utf-8"
        ></script>

        <link
          href={generateUrl('/assets/sass/dependencies/aos.scss')}
          rel="stylesheet"
        />

        {style && (
          <link
            rel="stylesheet"
            href={generateUrl(`/assets/css/${style}.css`)}
          />
        )}
        <link rel="stylesheet" href={generateUrl(`/assets/css/index.css`)} />
      </head>
      <body style={{ background: colors.main }}>
        <AppLoader generateUrl={generateUrl} />
        <div className="app-wrapper" style={{ opacity: 0 }}>
          {header}
          {main}
          {subscribe}
          {gdpr}
          {script != undefined ? (
            <script
              type="module"
              src={generateUrl(`/assets/js/${script}.js`)}
            />
          ) : null}

          {footer}
          <ScrollTop generateUrl={generateUrl} />
        </div>
      </body>
    </html>
  );
};

export default Page;
