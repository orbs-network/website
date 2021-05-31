export const getLang = (id) => {
  let language = id.split("/")[0];
  if (language === "ko") {
    return "ko";
  }
  if (language === "jp") {
    return "ja";
  }
  return "en";
};
