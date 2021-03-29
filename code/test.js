export const returnIfLa = (val) => {
  const langs = ["ko", "cn"];
  let la;

  langs.forEach((lng) => {
    if (val.indexOf(lng) > -1) {
      la = true;
    }
  });

  return la;
};
