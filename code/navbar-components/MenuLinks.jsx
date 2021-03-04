import React from "react";

const MenuLinks = ({
  generateUrl,
  arr,
  sectionClassName = "",
  linkClassName = "",
  title,
  listClassName = "",
}) => {
  return (
    <section className={`nav-menu-section ${sectionClassName}`}>
      <h4>{title}</h4>
      <ul className={listClassName}>
        {arr.map((link) => {
          const { url, name } = link;
          return (
            <li className={linkClassName}>
              <figure />
              <a href={generateUrl(url)}>{name}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

MenuLinks.getInitialProps = async function (props) {
  const {
    generateUrl,
    arr,
    sectionClassName,
    linkClassName,
    title,
    listClassName,
  } = await FetchMyDataFromSomewhere(props._ID);
  return {
    generateUrl,
    arr,
    sectionClassName,
    linkClassName,
    title,
    listClassName,
  };
};

export default MenuLinks;
