export const isProduction = () => {
  // remove comment when the blogs script will be inserted to the ci
  return !process.env.IS_DEV;
  //return false;
};
