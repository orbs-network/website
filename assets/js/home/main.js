import { colors } from '../consts/consts.js'
import { images } from '../images.js'
import { init } from '../index.js'
import { hideAppLoader } from '../ui/ui.js'
import { getCardDataByType } from './helpers.js'

const globeColors = {
  countries: '#7479E6c0',
  background: 'rgba(255, 255, 255, 0)',
  arc: 'rgb(21, 249, 255, 0.5)',
  polygonSideColor: 'rgba(3,252,245,0.08)',
}
const delay = (ms) => new Promise((res) => setTimeout(res, ms))

class GlobeHandler {
  constructor(timerHandler) {
    this.timerHandler = timerHandler

    const $guardianDetails = $('#guardianDetails')

    $guardianDetails.on('mouseover', timerHandler.pauseTimer)
    $guardianDetails.on('mouseout', timerHandler.resumeTimer)

    this.world = Globe()(document.getElementById('globeArea'))
      .globeImageUrl(images.globe.earthLight)
      .polygonCapColor(() => '#7479E6')
      .pointOfView({ altitude: 4 }, this.timings.welcomeCountryPop * 2)
      .polygonSideColor(() => 'rgba(3,252,245,0.08)')
      // .polygonLabel(({ properties: p }) => p.NAME_LONG)
      .polygonAltitude(0.005)
      .atmosphereColor('rgba(159, 236, 237, 0.5)')
      .atmosphereAltitude(0.4)
      .showAtmosphere(false)
      .pointAltitude(0.015)
      .pointRadius(0.4)
      .arcStroke(0.5)
      .pointColor(() => '#15F9FF')
      .backgroundColor(globeColors.background)
      // .pointColor(() => backgroundColor)
      .arcColor(() => globeColors.arc)

    setTimeout(() => {
      // wait for scene to be populated (asynchronously)
      const directionalLight = this.world
        .scene()
        .children.find((obj3d) => obj3d.type === 'DirectionalLight')
      directionalLight && directionalLight.position.set(1, 1, 1) // change light position to see the specularMap's effect
    })

    // Auto-rotate
    const controls = this.world.controls()

    controls.autoRotate = true
    controls.autoRotateSpeed = 1
    controls.enableZoom = false
    controls.enablePan = false

    const pathToGeolocation =
      '/assets/datasets/ne_110m_admin_0_countries.geojson'
    fetch(pathToGeolocation)
      .then((res) => res.json())
      .then((countries) => {
        this.world.polygonsData(countries.features)

        setTimeout(() => {
          this.world
            .polygonsTransitionDuration(this.timings.welcomeCountryPop)
            .polygonCapColor((feat) => globeColors.countries)
            .polygonAltitude((feat) =>
              Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 10e-5)
            )

          setTimeout(() => {
            this.finishedWelcome = true
          }, 2200)
        }, 2000)
        const scene = this.world.scene()
        if (scene.children.length === 4) {
          scene.children[1].intensity = 1.4
          scene.children[2].intensity = 0.2
        }
      })

    window.addEventListener('resize', () => {
      this.resize()
    })
    this.resize()
  }

  resize() {
    const width = window.innerWidth
    const height = window.innerHeight

    this.world.width([width])
    this.world.height([height])
  }

  getCardsData() {
    const cards = []
    const cardsHtmlElements = document.querySelectorAll('.card')

    cardsHtmlElements.forEach((card, index) => {
      const cardData = getCardDataByType(card, index)
      cards.push(cardData)
      card.remove()
    })
    return cards
  }

  get timings() {
    return {
      welcomeCountryPop: 2000,
      cardDelay: 10000,
      showHideCardDelay: 1300,
      changePointOfView: 2000,
    }
  }

  onChangeCardData(cardsData, currentCardData, nextCardData) {
    if (this.finishedWelcome) {
      this.arcsData = this.arcsData || []

      if (this.arcsData.length !== cardsData.length) {
        this.arcsData.push({
          startLat: currentCardData.lat,
          startLng: currentCardData.lng,
          endLat: nextCardData.lat,
          endLng: nextCardData.lng,
        })
      }

      this.world.controls().autoRotateSpeed = 0.1

      this.world
        .polygonsTransitionDuration(this.timings.changePointOfView - 400)
        .polygonCapColor(({ properties: p }) => globeColors.countries)
        .polygonAltitude(({ properties: p }) =>
          p.ISO_A2 === currentCardData.countryCode ? 0.02 : 0.01
        )
        .pointsData(cardsData)
        .arcsData(this.arcsData)
        .pointOfView(
          Object.assign({ altitude: 3.4 }, currentCardData),
          this.timings.changePointOfView
        )
    }
  }
}

const initGlobe = async () => {
  const ArrayUtils = {
    getRandom: (array, exclude) => {
      let temp = Object.values(array)

      if (exclude) {
        const index = temp.indexOf(exclude)

        // removes current only if exists in list and not the only one
        if (index >= 0 && temp.length > 1) {
          temp.splice(index, 1)
        }
      }

      return temp[ArrayUtils.getRandomIndex(temp)]
    },

    popRandom: (array) => {
      return array.splice(ArrayUtils.getRandomIndex(array), 1)[0]
    },

    remove: (array, item) => {
      array.splice(array.indexOf(item), 1)
    },

    getRandomIndex: (array) => {
      return Math.floor(Math.random() * array.length)
    },
  }

  let currentCardIndex = -1

  let timerStart = new Date().getTime()
  let pauseDelta = 0
  let cardDelay, showHideCardDelay
  let timerRun = true

  const timerHandler = {
    pauseTimer: () => {
      timerRun = false
      pauseDelta = new Date().getTime() - timerStart
    },

    resumeTimer: () => {
      timerRun = true
      timerStart = new Date() - pauseDelta
    },
  }

  const globeHandler = new GlobeHandler(timerHandler)

  cardDelay = globeHandler.timings.cardDelay
  showHideCardDelay = globeHandler.timings.showHideCardDelay

  const cardsData = globeHandler.getCardsData()

  const randomizedCardsData = []
  const countryDataListMap = {}

  for (const data of cardsData) {
    const dataList = countryDataListMap[data.countryCode] || []
    countryDataListMap[data.countryCode] = dataList

    dataList.push(data)
  }

  const countries = Object.keys(countryDataListMap)

  let prevCountry = null

  for (let i = 0; i < cardsData.length; i++) {
    prevCountry = ArrayUtils.getRandom(countries, prevCountry)

    const dataList = countryDataListMap[prevCountry]

    randomizedCardsData.push(ArrayUtils.popRandom(dataList))

    if (dataList.length === 0) {
      ArrayUtils.remove(countries, prevCountry)
    }
  }

  const changeCard = async (initial) => {
    if (!initial) {
      await delay(showHideCardDelay)
    }

    currentCardIndex++

    let _currentCardIndex
    let _nextCardIndex

    if (currentCardIndex + 1 >= randomizedCardsData.length) {
      _currentCardIndex = randomizedCardsData.length - 1
      _nextCardIndex = 0

      currentCardIndex = -1
    } else {
      _currentCardIndex = currentCardIndex
      _nextCardIndex = currentCardIndex + 1
    }

    const currentCardData = randomizedCardsData[_currentCardIndex]

    globeHandler.onChangeCardData(
      cardsData,
      currentCardData,
      randomizedCardsData[_nextCardIndex]
    )

    await delay(showHideCardDelay)
  }

  await changeCard(true)
  hideAppLoader()
  while (true) {
    await delay(1000)

    if (timerRun && new Date().getTime() > timerStart + cardDelay) {
      timerStart = new Date().getTime()

      await changeCard()
    }
  }
}

window.onload = async () => {
  init(true)
  //  await delay(8000)
  await initGlobe()
  // hideAppLoader();
}
