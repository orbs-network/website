import { init } from "../index.js";
import { hideAppLoader } from "../ui/ui.js";
import { getCardDataByType } from "./helpers.js";
class GlobeHandler {
  constructor(timerHandler) {
    this.timerHandler = timerHandler;

    const $guardianDetails = $("#guardianDetails");

    $guardianDetails.on("mouseover", timerHandler.pauseTimer);
    $guardianDetails.on("mouseout", timerHandler.resumeTimer);

    this.world = Globe()(document.getElementById("globeArea"))
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
      .polygonCapColor((feat) => "rgb(0,109,109)")
      .pointOfView({ altitude: 3.8 }, this.timings.welcomeCountryPop * 2)
      .polygonSideColor(() => "rgba(3,252,245,0.04)")
      // .polygonLabel(({ properties: p }) => p.NAME_LONG)
      .polygonAltitude(0.01)
      .atmosphereColor("#00ffff")
      .pointAltitude(0.005)
      .pointRadius(0.6);

    // Auto-rotate
    const controls = this.world.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.enableZoom = false;
    controls.enablePan = false;

    const isDev = document.body.getAttribute("data-dev");

    const pathToGeolocation = JSON.parse(isDev)
      ? "/assets/datasets/ne_110m_admin_0_countries.geojson"
      : "/website/assets/datasets/ne_110m_admin_0_countries.geojson";
    fetch(pathToGeolocation)
      .then((res) => res.json())
      .then((countries) => {
        this.world.polygonsData(countries.features);

        setTimeout(() => {
          this.world
            .polygonsTransitionDuration(this.timings.welcomeCountryPop)
            .polygonCapColor((feat) => "rgba(3,252,245,0.4)")
            .polygonAltitude((feat) =>
              Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 10e-5)
            );

          setTimeout(() => {
            this.finishedWelcome = true;
          }, 2200);
        }, 2000);
      });
    window.addEventListener("resize", (event) => {
      this.world.width([event.target.innerWidth]);
      this.world.height([event.target.innerHeight]);
    });
  }

  getCardsData() {
    const cards = [];
    const cardsHtmlElements = document.querySelectorAll(".card");

    cardsHtmlElements.forEach((card, index) => {
      const cardData = getCardDataByType(card, index);
      cards.push(cardData);
      card.remove();
    });
    return cards;
  }

  get timings() {
    return {
      welcomeCountryPop: 2000,
      cardDelay: 10000,
      showHideCardDelay: 1300,
      changePointOfView: 2000,
    };
  }

  onChangeCardData(cardsData, currentCardData, nextCardData) {
    if (this.finishedWelcome) {
      this.arcsData = this.arcsData || [];

      if (this.arcsData.length !== cardsData.length) {
        this.arcsData.push({
          startLat: currentCardData.lat,
          startLng: currentCardData.lng,
          endLat: nextCardData.lat,
          endLng: nextCardData.lng,
        });
      }

      this.world.controls().autoRotateSpeed = 0.1;

      this.world
        .polygonsTransitionDuration(this.timings.changePointOfView - 400)
        .polygonCapColor(({ properties: p }) =>
          p.ISO_A2 === currentCardData.countryCode
            ? "rgba(3,252,245,0.7)"
            : "rgba(3,252,245,0.4)"
        )
        .polygonAltitude(({ properties: p }) =>
          p.ISO_A2 === currentCardData.countryCode ? 0.02 : 0.01
        )
        .pointsData(cardsData)
        .arcsData(this.arcsData)
        .pointOfView(
          Object.assign({ altitude: 3 }, currentCardData),
          this.timings.changePointOfView
        );
    }
  }

  showCard(cardData) {
    if (this.finishedWelcome) {
      const $guardianDetails = $("#guardianDetails");

      $guardianDetails.html(cardData.component);
      const container = cardData.component.querySelector(".card-title");

      container.innerHTML = `<span class='card-title-text'></span>`;

      try {
        new Typed(".card-title-text", {
          strings: [cardData.title],
          typeSpeed: 50,
          startDelay: 500,
          cursorChar: ".",
          autoInsertCss: true,
        });
        const cursor = document.querySelector(".typed-cursor");
        cursor.innerHTML = "";
      } catch (error) {}
      $guardianDetails.fadeIn();
    }
  }

  hideCard() {
    $("#guardianDetails").fadeOut();
  }
}

const initGlobe = async () => {
  const ArrayUtils = {
    getRandom: (array, exclude) => {
      let temp = Object.values(array);

      if (exclude) {
        const index = temp.indexOf(exclude);

        // removes current only if exists in list and not the only one
        if (index >= 0 && temp.length > 1) {
          temp.splice(index, 1);
        }
      }

      return temp[ArrayUtils.getRandomIndex(temp)];
    },

    popRandom: (array) => {
      return array.splice(ArrayUtils.getRandomIndex(array), 1)[0];
    },

    remove: (array, item) => {
      array.splice(array.indexOf(item), 1);
    },

    getRandomIndex: (array) => {
      return Math.floor(Math.random() * array.length);
    },
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  let currentCardIndex = -1;

  let timerStart = new Date().getTime();
  let pauseDelta = 0;
  let cardDelay, showHideCardDelay;
  let timerRun = true;

  const timerHandler = {
    pauseTimer: () => {
      timerRun = false;
      pauseDelta = new Date().getTime() - timerStart;
    },

    resumeTimer: () => {
      timerRun = true;
      timerStart = new Date() - pauseDelta;
    },
  };

  const globeHandler = new GlobeHandler(timerHandler);

  cardDelay = globeHandler.timings.cardDelay;
  showHideCardDelay = globeHandler.timings.showHideCardDelay;

  const cardsData = globeHandler.getCardsData();

  const randomizedCardsData = [];
  const countryDataListMap = {};

  for (const data of cardsData) {
    const dataList = countryDataListMap[data.countryCode] || [];
    countryDataListMap[data.countryCode] = dataList;

    dataList.push(data);
  }

  const countries = Object.keys(countryDataListMap);

  let prevCountry = null;

  for (let i = 0; i < cardsData.length; i++) {
    prevCountry = ArrayUtils.getRandom(countries, prevCountry);

    const dataList = countryDataListMap[prevCountry];

    randomizedCardsData.push(ArrayUtils.popRandom(dataList));

    if (dataList.length === 0) {
      ArrayUtils.remove(countries, prevCountry);
    }
  }

  const changeCard = async (initial) => {
    if (!initial) {
      globeHandler.hideCard();

      await delay(showHideCardDelay);
    }

    currentCardIndex++;

    let _currentCardIndex;
    let _nextCardIndex;

    if (currentCardIndex + 1 >= randomizedCardsData.length) {
      _currentCardIndex = randomizedCardsData.length - 1;
      _nextCardIndex = 0;

      currentCardIndex = -1;
    } else {
      _currentCardIndex = currentCardIndex;
      _nextCardIndex = currentCardIndex + 1;
    }

    const currentCardData = randomizedCardsData[_currentCardIndex];

    globeHandler.onChangeCardData(
      cardsData,
      currentCardData,
      randomizedCardsData[_nextCardIndex]
    );

    await delay(showHideCardDelay);

    globeHandler.showCard(currentCardData, timerHandler);
  };

  await changeCard(true);
  hideAppLoader();
  while (true) {
    await delay(1000);

    if (timerRun && new Date().getTime() > timerStart + cardDelay) {
      timerStart = new Date().getTime();

      await changeCard();
    }
  }
};

window.onload = async () => {
  init(true);
  hideAppLoader();
  // await initGlobe();
};
