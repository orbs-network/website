import React from "react";

const BlogPost = ({
  category,
  title,
  readingLength,
  link,
  countryCode,
  lat,
  lng,
}) => {
  return (
    <div
      className="card blog-card"
      data-countryCode={countryCode}
      data-lng={lng}
      data-lat={lat}
    >
      <h3>{category}</h3>
      <h3>{title}</h3>
      <h3>{readingLength}</h3>
      <a href={link}>Link</a>
    </div>
  );
};

export default BlogPost;
