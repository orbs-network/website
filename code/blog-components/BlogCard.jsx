import React from "react";

const BlogCard = ({ blog, text }) => {
  const { image_url, date, type, content, editor } = blog;
  return (
    <div className="blog-card" data-aos="fade-up">
      <figure className="blog-card-gradient"></figure>
      <img src={image_url} className="blog-card-img" />
      <div className="blog-card-c">
        <section className="blog-card-c-top flex-start">
          <span className="flex-start">
            <img src="../assets/img/blog/folder.svg" />
            <p>{type}</p>
          </span>
          <span className="flex-start">
            <img src="../assets/img/blog/calendar.svg" />
            <p>{date}</p>
          </span>
        </section>
        <h3 className="blog-card-c-text">{content}</h3>
        <span className="blog-card-c-link flex-start">
          <p>{text.by}</p>
          <a href="">{editor}</a>
        </span>
      </div>
    </div>
  );
};
BlogCard.getInitialProps = async function (props) {
  const { blog, text } = await FetchMyDataFromSomewhere(props._ID);
  return { blog, text };
};

export default BlogCard;
