let interval = null;
let timeout = null;
let globeState;
const init = () => {
  const globeContainer = document.getElementById("globeViz");
  globeState = new GlobeClass();
  globeState.createGlobe(globeContainer);
};

window.onload = async () => {
  init();
  loadBnts(images);
  generateSocials();
  generateFlags();

  const input = getElement(".addImgInput input");
  input.addEventListener("change", (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    globeState.changeGlobeImage(url);
    addImage(url);
  });
};

const generateFlags = () => {
  try {
    const container = getElement(".navbar-flags-list");
    flags.forEach(({ name, img }) => {
      const li = document.createElement("li");
      const image = document.createElement("img");
      image.src = img;
      li.append(image);
      container.append(li);
    });
  } catch (error) {
    console.error("error in loading flags");
  }
};

const generateSocials = () => {
  try {
    const container = getElement(".socials");
    socials.forEach(({ url, img }) => {
      const element = document.createElement("li");
      element.classList.add("socials-element");
      const link = document.createElement("a");
      link.href = url;
      const image = document.createElement("img");
      image.src = img;
      link.append(image);
      element.append(link);
      container.append(element);
    });
  } catch (error) {
    console.error("error in loading socials");
  }
};

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
      globeState.changeGlobeImage(src);
    });
    container.appendChild(element);
  });
};

const hideLoader = () => {
  try {
    const loader = getElement(".globe-loader");
    loader.classList.add("hide-loader");
  } catch (error) {
    console.error("no loader provided");
  }
};

const onPointClick = (point) => {
  handlePointContainerData(point);
  globeState.setSelectedPoint(point);
};

const hidePointContainer = () => {
  clearAndSetTimeout();
  handlePointContainerData();
};

const clearGlobeInterval = () => {
  window.clearInterval(interval);
};

const setGlobeInterval = () => {
  interval = setInterval(() => {
    const point = globeState.getNextPoint();

    const duration = 2000;
    // globeState.changeGlobePosition(point, duration);
  }, 3000);
};

const clearAndSetTimeout = () => {
  clearGlobeInterval();
  window.clearTimeout(timeout);
  timeout = setTimeout(() => {
    setGlobeInterval();
  }, config.timeoutSeconds);
};

const togglePoint = (value) => {
  const container = getElement(".guardian-container");
  const className = "guardian-container-show";
  if (value) {
    return container.classList.add(className);
  }
  return container.classList.remove(className);
};
