class GlobeHandler {

    constructor(timerHandler) {

        this.timerHandler = timerHandler

        const $guardianDetails = $('#guardianDetails')

        $guardianDetails.on('mouseover', timerHandler.pauseTimer)
        $guardianDetails.on('mouseout', timerHandler.resumeTimer)

        this.world = Globe()

        (document.getElementById('globeArea'))
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
            .polygonCapColor(feat => 'rgb(0,109,109)')
            .pointOfView({altitude: 3.8}, this.timings.welcomeCountryPop * 2)
            .polygonSideColor(() => 'rgba(3,252,245,0.04)')
            .polygonLabel(({properties: p}) => p.NAME_LONG)
            .polygonAltitude(0.01)
            .atmosphereColor('#00ffff')

        // Auto-rotate
        const controls = this.world.controls()
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1;
        controls.enableZoom = false;
        controls.enablePan = false;

        fetch('/assets/datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries => {

            this.world.polygonsData(countries.features);

            setTimeout(() => {

                this.world
                    .polygonsTransitionDuration(this.timings.welcomeCountryPop)
                    .polygonCapColor(feat => 'rgba(3,252,245,0.4)')
                    .polygonAltitude(feat => Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 10e-5))

                setTimeout(() => {
                    this.finishedWelcome = true
                }, 2200)

            }, 2000)

        })


    }

    getCardsData() {

        return new Promise(resolve => resolve([
            {
                countryCode: 'US',
                lat: 37.0902, lng: 95.7129 - 180,
                icon: 'https://www.orbs.com/wp-content/uploads/2019/03/0RBS-white-version.png',
                text: 'Qatari Aid and CBDC Can Change International Giving'
            },
            {
                countryCode: 'IL',
                lat: 31.71, lng: 35.10,
                icon: 'https://www.orbs.com/wp-content/uploads/2019/03/0RBS-white-version.png',
                text: 'How to Bridge Orbs Tokens onto the Polygon Network'
            },
            {
                countryCode: 'CN',
                lat: 35.8617, lng: 104.1954,
                icon: 'https://www.orbs.com/wp-content/uploads/2019/03/0RBS-white-version.png',
                text: 'Orbs Added to WOWswap Protocol'
            },
            {
                countryCode: 'RU',
                lat: 55.45, lng: 37.35,
                icon: 'https://www.orbs.com/wp-content/uploads/2019/03/0RBS-white-version.png',
                text: 'Orbs Added to Alpaca Finance Vaults!'
            },
            {
                countryCode: 'PL',
                lat: 52.13, lng: 21,
                icon: 'https://www.orbs.com/wp-content/uploads/2019/03/0RBS-white-version.png',
                text: 'How to Use the Orbs Vault on Beefy Finance'
            }
        ]))

    }

    get timings() {

        return {
            welcomeCountryPop: 2000,
            cardDelay: 10000,
            showHideCardDelay: 1300,
            changePointOfView: 2000
        }

    }

    onChangeCardData(cardsData, currentCardData, nextCardData) {

        if (this.finishedWelcome) {

            this.world.controls().autoRotateSpeed = 0.1

            this.world
                .polygonsTransitionDuration(this.timings.changePointOfView - 400)
                .polygonCapColor(({properties: p}) => p.ISO_A2 === currentCardData.countryCode ? 'rgba(3,252,245,0.7)' : 'rgba(3,252,245,0.4)')
                .polygonAltitude(({properties: p}) => p.ISO_A2 === currentCardData.countryCode ? 0.02 : 0.01)
                .pointsData(
                    cardsData
                )
                .arcsData(
                    [
                        {
                            startLat: currentCardData.lat,
                            startLng: currentCardData.lng,
                            endLat: nextCardData.lat,
                            endLng: nextCardData.lng
                        }
                    ]
                )
                .pointOfView(
                    Object.assign({altitude: 3}, currentCardData),
                    this.timings.changePointOfView
                )


        }

    }

    showCard(cardData) {

        if (this.finishedWelcome) {

            const $guardianDetails = $('#guardianDetails')

            $guardianDetails.html(
                '<div style="position:absolute ; ; background: black;padding: 5px;' +
                'font-size: 10pt !important; border: 1px solid #03fcf5;display: flex; flex-direction: column;">' +
                `<div><img style="height: 32px; width: 32px;" src="${cardData.icon}"> <br/>` +
                `<span>${cardData.countryCode} </span></div>` +
                `<span>${cardData.text} </span>` +
                '</div>'
            )


            $guardianDetails.show()

        }

    }

    hideCard() {

        $('#guardianDetails').hide()

    }

}


$(async () => {


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

        }

    }

    const delay = ms => new Promise(res => setTimeout(res, ms))

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

        }

    }

    const globeHandler = new GlobeHandler(
        timerHandler
    )

    cardDelay = globeHandler.timings.cardDelay
    showHideCardDelay = globeHandler.timings.showHideCardDelay

    const cardsData = await globeHandler.getCardsData()

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

            globeHandler.hideCard()

            await delay(showHideCardDelay)

        }

        currentCardIndex++

        let _currentCardIndex
        let _nextCardIndex

        if ((currentCardIndex + 1) >= randomizedCardsData.length) {

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

        globeHandler.showCard(
            currentCardData,
            timerHandler
        )

    }

    await changeCard(true)

    while (true) {

        await delay(1000)

        if (timerRun && new Date().getTime() > (timerStart + cardDelay)) {

            timerStart = new Date().getTime()

            await changeCard()

        }

    }

})


