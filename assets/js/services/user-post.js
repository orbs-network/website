import "../dependencies/emailjs.js";
import {
  USER_POST_USER_ID,
  USER_POST_SERVICE_ID,
  USER_POST_CONTACT_TEMPLATE_ID,
  USER_POST_SUBSCRIVE_TEMPLATE_ID,
} from "../keys.js";

emailjs.init(USER_POST_USER_ID);

const contact = (body) => {
  return emailjs.send(
    USER_POST_SERVICE_ID,
    USER_POST_CONTACT_TEMPLATE_ID,
    body
  );
};

const API_URL = "https://orbs-website-mailer.herokuapp.com";
// const API_URL = "http://localhost:5500";

const subscribe = (body) => {
  const langs = ["jp", "ko"];
  body.language = 'en'
  for (const lang of langs) {
    if (window.location.pathname.indexOf(lang) > -1) {
      body.language = lang;
    }
  }


  try {
    fetch(`${API_URL}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {}
};
export default {
  subscribe,
  contact,
};
