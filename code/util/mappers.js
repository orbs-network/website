export const isRoot = (_ID) => {
  const root = _ID === "ko" || _ID === "jp" || _ID === ".";
  return root;
};

export const isBlogPage = (_ID) => {
  const arr = _ID.split("blog/");
  return arr[1];
};

export const isBlogPageProduction = (_ID) => {
  return _ID.indexOf("blog") == -1;
};

export const getBlogUrl = (_ID, url) => {
  const prefix = _ID.split("/")[0];
  if (prefix === "ko" || prefix === "jp") {
    return `${prefix}/blog/${url}`;
  }
  return `blog/${url}`;
};

export const getBlogUrlProduction = (_ID, url) => {
  const prefix = _ID.split("/")[0];
  if (prefix === "ko" || prefix === "jp") {
    return `${prefix}/${url}`;
  }
  return url;
};
