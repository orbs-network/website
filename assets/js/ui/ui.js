import footer from '../footer/index.js'
import { addEvent, getElement } from '../heplers.js'
import { handleNavbarScroll } from '../navbar/index.js'
let loaderTimeOut
const handleScrollTopBtn = () => {
  const offsetTop = window.pageYOffset
  if (offsetTop >= 500) {
    const scrollBtn = getElement('.scroll-top')
    return scrollBtn.classList.add('scroll-top-active')
  }
  if (offsetTop < 500) {
    const scrollBtn = getElement('.scroll-top')
    return scrollBtn.classList.remove('scroll-top-active')
  }
}

export const scrollToTop = () => {
  const btn = getElement('.scroll-top')
  addEvent(btn, 'click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  })
}

export const toggleWindowScroll = (val) => {
  const body = getElement('body')
  if (val) {
    return body.classList.add('overflow-hidden')
  }
  return body.classList.remove('overflow-hidden')
}

export const handleOnScroll = () => {
  document.addEventListener(
    'scroll',
    () => {
      handleNavbarScroll()
      handleScrollTopBtn()
    },
    { passive: true }
  )
}

export const hideAppLoader = () => {
  window.clearTimeout(loaderTimeOut)
  const body = getElement('body')
  const loader = getElement('.app-loader')
  loader.style.opacity = 0
  const appWrapper = getElement('.app-wrapper')
  appWrapper.style.opacity = 1
  setTimeout(() => {
    body.removeChild(loader)
  }, 1000)
}

export const showAppLoader = () => {
  loaderTimeOut = setTimeout(() => {
    const loader = getElement('.app-loader')
    loader.style.opacity = 1
  }, 250)
}

const handleScreenHeightOnMobile = () => {
  const height = window.innerHeight
  if (window.innerWidth <= 600) {
    const app = document.querySelector('.app-wrapper')
    app.style.height = `${height}px`
  }
}
const init = () => {
  handleOnScroll()
  scrollToTop()
  // handleScreenHeightOnMobile()
}

export default {
  init,
  showAppLoader,
  hideAppLoader,
}
