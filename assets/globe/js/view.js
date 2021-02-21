const addImage = (src) => {
  const img = {
    name: `img${images.length}`,
    src,
  };
  images.push(img);
  loadBnts(images);
};

const loadBnts = (imagesList) => {
  const container = getElement(".btns-container-list");
  container.innerHTML = "";
  imagesList.forEach(({ name, src }) => {
    const element = document.createElement("li");
    element.innerHTML = name;
    element.addEventListener("click", () => {
      globeController.changeGlobeImage(src);
    });
    container.appendChild(element);
  });
};

const hideLoader = () => {
  const loader = getElement(".globe-loader");
  hideElement(loader);
};

window.onload = async () => {
  globeController.init();
  loadBnts(images);
  appendEventsToNavbar();
  const input = getElement(".addImgInput input");
  input.addEventListener("change", (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    globeController.changeGlobeImage(url);
    addImage(url);
  });
  addEventsToCards();
};
