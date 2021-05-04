import { addEvent, getElement } from "../common.js";

const init = () => {
  handleShowGdpr();
  addEventListeners();
};

const handleShowGdpr = () => {
  const gdprSeen = localStorage.getItem("gdpr_seen");
  if (gdprSeen) return;
  const gdprContainer = getElement(".gdpr");
  if (!gdprContainer) return;
  setTimeout(() => {
    gdprContainer.classList.add("gdpr-active");
  }, 500);
};

const addEventListeners = () => {
  const accept = getElement(".gdpr-accept");

  const reject = getElement(".gdpr-reject");
  addEvent(accept, "click", handleAccept);
  addEvent(reject, "click", handleReject);
};

const handleAccept = () => {
  alert("accepted");
  localStorage.setItem("gdpr_accepted", true);
  hideGdpr();
};
const handleReject = () => {
  alert("rejected");
  localStorage.setItem("gdpr_accepted", false);
  hideGdpr();
};

const hideGdpr = () => {
  const gdprContainer = getElement(".gdpr");
  gdprContainer.classList.remove("gdpr-active");
  localStorage.setItem("gdpr_seen", true);
};

const gdpr = {
  init,
};

export default gdpr;
