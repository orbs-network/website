import { addEvent, getElement } from "../heplers.js";
import { GDPR_ACCEPTED, GDPR_SEEN } from "../keys.js";
import analytics from "./analytics/index.js";
import localStorage from "./local-storage.js";
const init = () => {
  handleShowGdpr();
  addEventListeners();
};

const handleShowGdpr = () => {
  const gdprSeen = localStorage.get(GDPR_SEEN);
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
  analytics.init(true);
  localStorage.set(GDPR_ACCEPTED, true);
  hideGdpr();
};
const handleReject = () => {
  localStorage.set(GDPR_ACCEPTED, false);
  hideGdpr();
};

const hideGdpr = () => {
  const gdprContainer = getElement(".gdpr");
  gdprContainer.classList.remove("gdpr-active");
  localStorage.set(GDPR_SEEN, true);
};

const gdpr = {
  init,
};

export default gdpr;
