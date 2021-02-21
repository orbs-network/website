const hideElement = (element) => {
  if (!element) return;
  element.style.opacity = 0;
  element.style.pointerEvents = "none";
  setTimeout(() => {
    element.style.display = "none";
  }, 200);
};

const showElement = (element) => {
  element.style.display = "flex";
  setTimeout(() => {
    element.style.opacity = 1;
    element.style.pointerEvents = "all";
  }, 200);
};

const useClickOutside = (element, callback) => {
  document.addEventListener("click", function (event) {
    const isClickInside = element.contains(event.target);
    if (element.style.opacity == 0) return;
    if (!isClickInside) {
      callback();
    }
  });
};

const onMouseEnterAndLeaveEvent = (element, enterCallback, leaveCallback) => {
  element.addEventListener("mouseenter", function (event) {
    enterCallback();
  });
  element.addEventListener("mouseleave", function (event) {
    leaveCallback();
  });
};
