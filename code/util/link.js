export const isOutherLink = (url) => {
  if (!url) {
    return false;
  }
  return url.startsWith("http") || url.startsWith("https");
};
