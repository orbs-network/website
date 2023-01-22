import React from "react";
import { handleUrl } from "../../../util/link";
import PostCard from "../../shared/PostCard";

function Post({ _body, _relativeURL, _ID, image, name, title, link }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <PostCard generateUrl={generateUrl} className="ton-gateway-posts-post">
      <img
        src={generateUrl("/assets/img/ton-gateway/post-figure.svg")}
        className="post-figure"
      />
      <div className="post-content">
        <div className="post-body">{_body}</div>
        <div className="post-profile">
          <img src={generateUrl(image)} className="post-profile-avatar" />
          <div className="post-profile-right">
            <h4>
              <a href={link} target="_blank">
                {name}
              </a>
            </h4>
            <h5>{title}</h5>
          </div>
        </div>
      </div>
    </PostCard>
  );
}

export default Post;
