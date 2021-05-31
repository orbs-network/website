import React from "react";

const BannerVideo = ({ videoUrl }) => {
  return (
    <section className="banner-video">
      <iframe src={videoUrl} controls="true"></iframe>
    </section>
  );
};

export default BannerVideo;
