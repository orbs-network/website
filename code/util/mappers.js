export const isRoot = (_ID) => {
  const root = _ID === "ko" || _ID === "jp" || _ID === ".";
  return root;
};
