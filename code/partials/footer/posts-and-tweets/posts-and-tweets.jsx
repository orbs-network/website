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
    <React.Fragment>
      <div className="footer-posts-and-tweets flex-start">
        {postsTitles}
        {tweetsTitle}
        {post1}
        {tweet1}
        {post2}
        {tweet2}
      </div>
      <div className="footer-posts-and-tweets footer-posts-and-tweets-mobile flex-start">
        {postsTitles}
        {post1}
        {post2}
        {tweetsTitle}
        {tweet1}
        {tweet2}
      </div>
    </React.Fragment>
  );
};

export default PostsAndTweets;
