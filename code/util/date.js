import moment from "moment";
import { getLang } from "./lang";

export const daysFromDate = (date, id) => {
  const start = moment(date, "DD/MM/YYYY");

  const language = getLang(id);
  try {
    return moment(start).locale(language).fromNow();
  } catch (error) {
    return 0;
  }
};

export const formatBlogDate = (date, format) => {
  return moment(date, "DD/MM/YYYY").format(format || "ll");
};
