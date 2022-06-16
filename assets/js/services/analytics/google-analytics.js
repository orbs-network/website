class GoogleAnalytics {
  init() {
    try {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-HJ74DHDLS3");
    } catch (error) {
      console.log(error);
    }
  }

  sendEvent() {}
}

export default GoogleAnalytics;
