import { validateEmail } from "../components/form.js";
import { init } from "../index.js";
import userPost from "../services/user-post.js";
let hiddenPosts = []
let lastLoadedIndex = 0
let container
const loadAmount = 6

const errorTypes = {
  empty: 'empty',
  validation: 'validation'
}
window.onload = () => {
  init();
  addEventsToLoadMoreButton()
  getHiddenPosts()
  addEventsToSubscribe()
};

const getHiddenPosts = () => {
  container = document.querySelector('#news-posts-bottom')
  const elements = document.querySelectorAll('.news-post-hidden')
  elements.forEach((hiddenPost, index) => {
    hiddenPost.id = index
    hiddenPosts.push(hiddenPost)
    container.removeChild(hiddenPost)
  })
  loadMore()
}

const hideLoadMorebtn = () => {
  const btn = document.querySelector('#load-more-posts')
  btn.style.display = 'none'
}


const loadMore = () => {
  const elements = hiddenPosts.slice(lastLoadedIndex, lastLoadedIndex + loadAmount)
  elements.forEach(element => {
    const component = createItem(element)
    container.appendChild(component)
  })
  lastLoadedIndex += loadAmount
  if (lastLoadedIndex >= hiddenPosts.length) {
    hideLoadMorebtn()
  }
}



const createItem = (element) => {
  const data = JSON.parse(element.getAttribute('data-component'))
  const { props } = data
  const { author, date, image, url, _body: body } = props
  const authorData = author[0]


  const post = document.createElement('li')
  post.classList.add('news-post')
  post.id = element.id
  const html = `
  <a href=${url} target='_blank' class='news-post-link'>
      <img src=${image} class='news-post-img' />
      <div class='news-post-body'>${body.props.dangerouslySetInnerHTML.__html}</div>
      <div class='news-post-bottom'>
    ${authorData.props.dangerouslySetInnerHTML.__html}
      <p>${date}</p></div>
  </a>`
  post.innerHTML = html
  return post
}


const addEventsToLoadMoreButton = () => {
  const btn = document.querySelector('#load-more-posts')
  btn.addEventListener('click', loadMore)
}




const addEventsToSubscribe = () => {
  const submitButton = document.querySelector('.news-subscribe-submit')
  const input = document.querySelector('.news-subscribe-input')
  input.addEventListener('focus', setError)
  submitButton.addEventListener('click', validateAndSubmit)
}

const validateAndSubmit = async () => {
  const input = document.querySelector('.news-subscribe-input')
  const {value} = input
  if (!value) {
    return setError(errorTypes.empty)
  }
  if (!validateEmail(value)) {
    return setError(errorTypes.validation)
  }
  const body = {
    fisrtName: '',
    email: value
  }
  setSubscribeLoading(true)
  await userPost.subscribe(body);
  setSubscribeLoading(false)
  input.value = ''
}


const setError = (type) => {

  switch (type) {
    case errorTypes.empty:
      const emptyElement = document.querySelector('.news-subscribe-empty')
      emptyElement.style.display = 'block'
      break;
    case errorTypes.validation:
      const validationElement = document.querySelector('.news-subscribe-invalid')
      validationElement.style.display = 'block'
      break;

    default:
      const errors = document.querySelectorAll('.news-subscribe-error')
      errors.forEach(err => {
        err.style.display = 'none'
      })
      break;
  }
}

const setSubscribeLoading = (loading) => {
  const submitButton = document.querySelector('.news-subscribe-submit')
  const loader = document.querySelector('.news-subscribe-submit .loader')
  loader.style.display = loading ? 'block' : 'none'
  submitButton.style.color = loading ? 'transparent' : ''
}