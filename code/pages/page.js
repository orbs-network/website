import React from "react";
import { colors } from "../../assets/js/consts/consts";
import { images } from "../../assets/js/images";
import { DEFAULT_TITLE } from "../consts";
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
        <title>{title || DEFAULT_TITLE}</title>
        <link
          rel="shortcut icon"
          href={generateUrl(images.common.favicon)}
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/base16/github.min.css"
        />

        {/* <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/base16/tomorrow.min.css"
        /> */}
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
        <script src="https://www.googletagmanager.com/gtag/js?id=G-HJ74DHDLS3" />
        <MetaTags {...props} />
        <script src={generateUrl("/assets/js/dependencies/aos.js")}></script>
        <script
          async
          src={generateUrl("/assets/js/dependencies/twitter-widgets.js")}
        ></script>
        <link
          href={generateUrl("/assets/sass/dependencies/aos.scss")}
          rel="stylesheet"
        />
        {style && (
          <link
            rel="stylesheet"
            href={generateUrl(`/assets/css/${style}.css`)}
          />
        )}
        <link rel="stylesheet" href={generateUrl(`/assets/css/index.css`)} />
        <script
          src={generateUrl("/assets/js/dependencies/jquery-negishim.js")}
          type="text/javascript"
        ></script>
      </head>
      <body style={{ background: colors.background }}>
        {subscribe}
        <AppLoader generateUrl={generateUrl} />
        <div className="app-wrapper" style={{ opacity: 0 }}>
          {header}
          {main}
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
        <script>var script=document.createElement('script');script.src="https://tag.safary.club/stag-0.1.16.js";script.async=true;script.setAttribute('data-name','safary-sdk');script.setAttribute('data-product-id','prd_APUKubYw0M');script.integrity="sha256-jl67N5KgpOXS3tLPc6pUXU1UxJqBm9LUZtqX5H3jZ2U=";script.crossOrigin="anonymous";var target=document.head||document.body;target.appendChild(script);</script>
        </body>
    </html>
  );
};

export default Page;
