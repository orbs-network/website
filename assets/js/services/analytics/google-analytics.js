class GoogleAnalytics {
  init() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-HJ74DHDLS3");
  }

  sendEvent() {}
}

export default GoogleAnalytics;
