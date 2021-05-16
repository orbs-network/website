import { isProduction } from "./env.js";

export const isRoot = (_ID) => {
  const root = _ID === "ko" || _ID === "jp" || _ID === ".";
  return root;
};

export const isBlogPage = (_ID) => {
  const isProd = isProduction();
  if (isProd) {
    return isBlogPageProd(_ID);
  }
  return isBlogPageDev(_ID);
};

export const isBlogPageDev = (_ID) => {
  const arr = _ID.split("blog/");
  return arr[1];
};

export const isBlogPageProd = (_ID) => {
  return _ID.indexOf("blog") == -1;
};

export const getBlogUrl = (_ID, url) => {
  const isProd = isProduction();
  if (isProd) {
    return getBlogUrlProd(_ID, url);
  }
  return getBlogUrlDev(_ID, url);
};

export const getBlogUrlProd = (_ID, url) => {
  const prefix = _ID.split("/")[0];
  if (prefix === "ko" || prefix === "jp") {
    return `${prefix}/${url}`;
  }
  return url;
};

const getBlogUrlDev = (_ID, url) => {
  const prefix = _ID.split("/")[0];
  if (prefix === "ko" || prefix === "jp") {
    return `${prefix}/blog/${url}`;
  }
  return `blog/${url}`;
};
