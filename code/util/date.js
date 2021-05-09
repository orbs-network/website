import moment from "moment";
export const daysFromDate = (date, id) => {
  const start = moment(date, "DD/MM/YYYY");

  let lang = id.split("/")[0] || "en";
  if (lang === "jp") {
    lang = "ja";
  }
  try {
    return moment(start).locale(lang).fromNow();
  } catch (error) {
    return 0;
  }
};

export const formatBlogDate = (date) => {
  return moment(date, "DD/MM/YYYY").format("ll");
};
