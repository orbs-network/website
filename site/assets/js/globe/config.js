import { images } from "../images.js";

export const globeConfig = {
  colors: ["#5FFFD2", "#AE01FF", "#FF0097"],
  orbsMainColor: "#4CFCE2",
  MAX_POINTS_PER_LINE: 5000,
  MAX_STEP_DEG: 1,
  MAX_STEP_ALT: 0.015,
  N_PATHS: 20,
  rotationSpeed: 0.8,
  backgroundColor: "#121822",
  showCardInterval: 10000,
  hideCardTimeout: 4000,
  maxTransformX: 50,
  minTransformX: -50,
  maxTransformY: 50,
  minTransformY: -50,
  additionalWidth: window.innerWidth / 5,
  additionalHeight: window.innerHeight / 5,
  backgroundImg: images.globe.bg,
};
