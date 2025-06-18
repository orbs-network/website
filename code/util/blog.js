import { footerBlogDatePrefix } from "../consts";
import { formatBlogDate } from "./date";
import { getLang } from "./lang";
import { getBlogUrl } from "./mappers";

export const setBlogAttributes = (props) => {
  const { blogUrl, image, title, _ID, date, _relativeURL, thumbnail, publish_at } = props;
  if (!blogUrl) return;
  const dateToDisplay = formatBlogDate(date);
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const url = getBlogUrl(_ID, blogUrl);

  return {
    "data-url": generateUrl(url),
    "data-image": generateUrl(thumbnail || image),
    "data-title": title,
    "data-prefix": footerBlogDatePrefix[getLang(_ID)],
    "data-date": dateToDisplay,
    ...(publish_at ? { "data-publish-at": publish_at } : {}),
  };
};
