import moment from "moment";
export const daysFromDate = (date) => {
  const start = moment(date, "DD/MM/YYYY");
  const end = moment();

  try {
    return Math.floor(moment.duration(end.diff(start)).asDays());
  } catch (error) {
    return 0;
  }
};

export const formatBlogDate = (date) => {
  return moment(date, "DD/MM/YYYY").format("ll");
};
