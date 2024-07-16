import React from "react";
import { images } from "../../../assets/js/images";
import { handleUrl } from "../../util/link";
import Posts from "./posts";

const Main = ({
  hero,
  postsTop,
  videoSection,
  loadMoreButton,
  subscribe,
  _relativeURL,
  _ID,
  trendingPosts,
}) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <main className="news page">
      <img
        className="news-figure news-figure-1"
        src={generateUrl(images.news.figure)}
      />
      <img
        className="news-figure news-figure-2"
        src={generateUrl(images.news.figure)}
      />
      <img
        className="news-figure news-figure-3"
        src={generateUrl(images.news.figure)}
      />
      <img
        className="news-figure news-figure-4"
        src={generateUrl(images.news.figure)}
      />

      <img className="news-side-dots" src={generateUrl(images.news.dots)} />

      <div className="news-grid">
        {hero}
        {trendingPosts}
      </div>
      {subscribe}
      <div className="news-grid">
        {postsTop}
        {videoSection}
        <Posts id="news-posts-bottom" />
      </div>
      {loadMoreButton}
      <script type="module" src={generateUrl(`/assets/js/news/index.js`)} />
    </main>
  );
};

export default Main;
