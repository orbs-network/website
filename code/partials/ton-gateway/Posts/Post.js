import React from "react";
import { handleUrl } from "../../../util/link";

function Post({ _body, _relativeURL, _ID, image, name, title }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="ton-gateway-posts-post">
      <img
        src={generateUrl("/assets/img/ton-gateway/frame.png")}
        className="post-frame"
      />

      <img
        src={generateUrl("/assets/img/ton-gateway/post-figure.svg")}
        className="post-figure"
      />
      <div className="post-content">
        <div className="post-body">{_body}</div>
        <div className="post-profile">
          <img src={generateUrl(image)} className="post-profile-avatar" />
          <div className="post-profile-right">
            <h4>{name}</h4>
            <h5>{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
