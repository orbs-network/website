const set = (property_name, value) => {
  localStorage.setItem(property_name, value);
};

const get = (property_name) => {
  const result = localStorage.getItem(property_name);
  return result ? JSON.parse(result) : false;
};

export default {
  get,
  set,
};
