import { randomImgUrl } from "../../helpers/image";

export const employees = Array.apply(null, { length: 20 }).map(() => {
  return {
    name: `Name`,
    position: "Co-Founder & CEO",
    twitter: "",
    linkedin: "",
    telegram: "",
    avatar: randomImgUrl(),
  };
});
