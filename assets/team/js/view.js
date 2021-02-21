window.onload = async () => {
  fillTeams();
  appendEventsToNavbar();
};

const fillTeams = () => {
  const managersContainer = getElement(".managers-list");
  const employeesContainer = getElement(".employees-list");
  console.log(employees);
  generateTeam(managers, managersContainer);
  generateTeam(employees, employeesContainer);
};

const generateTeam = (list, container) => {
  list.forEach((listElement) => {
    const { name } = listElement;
    if (!name) {
      const banner = createBanner(listElement);
      return container.appendChild(banner);
    }
    const teammate = createTeamMate(listElement);
    container.appendChild(teammate);
  });
};

const createBanner = (listElement) => {
  const { url, url2, size } = listElement;
  const container = document.createElement("div");
  const img = document.createElement("img");
  img.src = url;
  container.classList.add("team-banner");
  switch (size) {
    case "single":
      container.classList.add("team-single-banner");
      break;
    case "double":
      const img2 = document.createElement("img");
      img2.src = url2;
      container.classList.add("team-double-banner");
      container.appendChild(img2);
      break;

    default:
      break;
  }

  container.appendChild(img);
  return container;
};

const createTeamMate = (teammate) => {
  const { avatar, name, position } = teammate;

  const teamMateContainer = document.createElement("li");
  const teammateInfo = document.createElement("div");
  teammateInfo.classList.add("teammate-info");
  teamMateContainer.classList.add("teammate");
  teamMateContainer.classList.add("flex-column");
  const avatarContainer = createTeammateAvatar(avatar);
  const links = createTeammateLinks(teammate);
  const nameContainer = document.createElement("p");
  nameContainer.classList.add("teammate-name");
  nameContainer.innerText = name;
  const positionContainer = document.createElement("p");
  positionContainer.classList.add("teammate-position");
  positionContainer.innerText = position;
  teamMateContainer.appendChild(avatarContainer);
  teammateInfo.appendChild(nameContainer);
  teammateInfo.appendChild(positionContainer);
  teammateInfo.appendChild(links);
  teamMateContainer.appendChild(teammateInfo);
  return teamMateContainer;
};

const createTeammateAvatar = (src) => {
  const avatarContainer = document.createElement("figure");
  const imgLoader = document.createElement("figure");
  let avatar = document.createElement("img");
  avatar.src = src;

  avatarContainer.classList.add("teammate-avatar");
  avatarContainer.appendChild(avatar);
  avatarContainer.appendChild(imgLoader);
  return avatarContainer;
};

const getLinkImgByType = (name) => {
  if (!name) return;
  switch (name) {
    case "twitter":
      return "../../../assets/img/socials/twitter.png";
    case "linkedin":
      return "../../../assets/img/socials/linkedin.png";
    case "telegram":
      return "../../../assets/img/socials/telegram.png";

    default:
      break;
  }
};

const createTeammateLinks = (teammate) => {
  const { socials } = teammate;

  const socialContainer = document.createElement("section");
  socialContainer.classList.add("teammate-social");
  socialContainer.classList.add("flex-start");

  socials.forEach((social) => {
    const link = document.createElement("a");
    const linkImg = document.createElement("img");
    linkImg.src = getLinkImgByType(social.name);
    link.href = social.url;
    link.appendChild(linkImg);
    socialContainer.appendChild(link);
    link.classList.add("teammate-social-link");
    link.classList.add("flex-center");
  });
  const border = document.createElement("figure");
  const arrow = document.createElement("figure");
  arrow.classList.add("teammate-arrow");
  border.classList.add("teammate-border");
  socialContainer.appendChild(border);
  socialContainer.appendChild(arrow);
  return socialContainer;
};
