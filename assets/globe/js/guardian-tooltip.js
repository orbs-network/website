const handlePointContainerData = (guardian) => {
  togglePoint(!!guardian);
  setGuardianInfo(guardian);
  handleLeftRepository(guardian);
  handleRightRepository(guardian);
};

const setGuardianInfo = (guardian) => {
  if (!guardian) return;
  const avatar = getElement(".guardian-avatar img");
  const name = getElement(".guardian-name");
  const username = getElement(".guardian-username");
  const country = getElement(".guardian-country");
  avatar.src = guardian.avatar;
  name.innerHTML = guardian.name;
  username.innerHTML = `@${guardian.username}`;
  country.innerHTML = guardian.country;
};

const handleLeftRepository = (point) => {
  const leftRepository = getElement(".guardian-repositories-left");
  if (point) {
    const leftH5 = createElement("h5");
    const leftP = createElement("p");
    leftH5.innerText = "lalal";
    leftP.innerText = "lallala2222";
    leftRepository.appendChild(leftH5);
    leftRepository.appendChild(leftP);
  } else {
    leftRepository.innerHTML = "";
  }
};

const handleRightRepository = (point) => {
  const leftRepository = getElement(".guardian-repositories-right");
  if (point) {
    const leftH5 = createElement("h5");
    const leftP = createElement("p");
    leftH5.innerText = "lalal";
    leftP.innerText = "lallala2222";
    leftRepository.appendChild(leftH5);
    leftRepository.appendChild(leftP);
  } else {
    leftRepository.innerHTML = "";
  }
};
