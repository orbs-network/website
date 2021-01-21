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
  loadBnts();
  generateSocials();
  generateFlags();
};

const generateFlags = () => {
  try {
    const container = document.querySelector(".navbar-flags-list");
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
    const container = document.querySelector(".socials");
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

const loadBnts = () => {
  const container = document.querySelector(".btns-container");
  images.forEach(({ name, src }) => {
    const btn = document.createElement("button");
    btn.innerHTML = name;
    btn.addEventListener("click", () => {
      globeState.globe.globeImageUrl(src);
    });
    container.appendChild(btn);
  });
};

const hideLoader = () => {
  try {
    const loader = document.querySelector(".globe-loader");
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
    console.log("point");
    const point = globeState.getNextPoint();

    const duration = 2000;
    globeState.changeGlobePosition(point, duration);
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
  const container = document.querySelector(".point-container");
  const className = "point-container-show";
  if (value) {
    return container.classList.add(className);
  }
  return container.classList.remove(className);
};

const handlePointContainerData = (point) => {
  togglePoint(!!point);
  const amount = document.querySelector(".point-container-amount");
  const name = document.querySelector(".point-container-name");
  const link = document.querySelector(".point-container-link");
  const text = document.querySelector(".point-container-text");
  const num = point ? 0 : 500;
  setTimeout(() => {
    amount.innerHTML = !point
      ? ""
      : point.stake && point.stake.toLocaleString();
    name.innerHTML = !point ? "" : point.guardian;
    link.innerHTML = !point ? "" : point.url;
    text.innerHTML = !point ? "" : point.text;
  }, num);
};
