export const getMd = async () => {
  fetch("../../../../index.js").then((res) => {
    res.text().then((data) => {
      console.log(data);
    });
  });
};
