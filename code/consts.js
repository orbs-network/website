export const baseUrl = process.env.IS_DEV
  ? "http://localhost:8080"
  : "https://www.orbs.com";

export const footerBlogDatePrefix = {
  en: "On",
  ja: "オン",
  ko: "의 위에",
};

export const DEFAULT_DESCRIPTION =
  "Orbs is set up as a separate execution layer between L1/L2 solutions and the application layer, as part of a tiered blockchain stack, enhancing the capabilities of smart contracts.";

export const DEFAULT_TITLE = "Orbs is a “Layer-3” public blockchain infrastructure project powered by PoS"