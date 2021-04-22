import React from "react";

const PostsAndTweets = ({
  post1,
  post2,
  tweet1,
  tweet2,
  tweetsTitle,
  postsTitles,
}) => {
  return (
    <div className="footer-posts-and-tweets flex-start">
      {postsTitles}
      {tweetsTitle}

      {post1}
      {tweet1}
      {post2}
      {tweet2}
    </div>
  );
};

export default PostsAndTweets;
