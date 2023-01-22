import React from "react";

function PostCard({ children, generateUrl, className }) {

  return (
    <div className={`post-card ${className}`}>
      <img
        src={generateUrl("/assets/img/ton-gateway/frame.png")}
        className="post-card-frame"
      />
      <div className="post-card-children">{children}</div>
    </div>
  );
}

export default PostCard;
