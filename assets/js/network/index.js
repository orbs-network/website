import { init, addEvent } from "../common.js";
import { setToggleTextEvent } from "../components/expending-text.js";

window.onload = () => {
  init();
  setToggleTextEvent();
};
