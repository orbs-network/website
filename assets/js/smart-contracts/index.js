import { init } from "../index.js";
import { setToggleTextEvent } from "../components/expending-text.js";
window.onload = () => {
  init();
  setToggleTextEvent();
};
