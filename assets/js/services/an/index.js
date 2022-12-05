
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

  init() {
   try {
     this.googleAnalytics.init();
     this.amplitudeAnalytics.init();
     this.hotjarAnalytics.init();
   } catch (error) {
    
   }
  }

  sendAmplitudeAnalyticsEvent(eventType, properties) {
   try {
     this.amplitudeAnalytics.sendEvent(eventType, properties);
   } catch (error) {
    
   }
  }

  sendGoogleAnalyticsEvent(eventType, properties) {
    try {
      this.googleAnalytics.sendEvent(eventType, properties);
    } catch (error) {
      
    }
  }
}

export default new Analytics();
