import { GDPR_ACCEPTED } from "../../keys.js";
import localStorage from "../local-storage.js";
import AmplitudeAnalytics from "./amplitude-analytics.js";
import GoogleAnalytics from "./google-analytics.js";
import HotjarAnalytics from "./hotjar-analytics.js";

const analyticsEvents = {
  blogClicked: "BLOG_CLIKED",
  newsClicked: "NEWS_CLIKED",
};

class Analytics {
  events = analyticsEvents;
  googleAnalytics = new GoogleAnalytics();
  amplitudeAnalytics = new AmplitudeAnalytics();
  hotjarAnalytics = new HotjarAnalytics();

  init(allowed) {
    if (allowed || localStorage.get(GDPR_ACCEPTED)) {
      this.googleAnalytics.init();
      this.amplitudeAnalytics.init();
      this.hotjarAnalytics.init();
    }
  }

  sendAmplitudeAnalyticsEvent(eventType, properties) {
    this.amplitudeAnalytics.sendEvent(eventType, properties);
  }

  sendGoogleAnalyticsEvent(eventType, properties) {
    this.googleAnalytics.sendEvent(eventType, properties);
  }
}

export default new Analytics();
