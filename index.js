import './index.css';

const button = document.querySelector('.cookie-consent__button')
const cookieBlock = document.querySelector('.cookie-consent')

function acceptCookie() {
  if (localStorage.getItem('cookie')){
    cookieBlock.style.display = 'none'
  } else {
    cookieBlock.style.display = 'block'
    button.addEventListener('click', () => {
      localStorage.setItem('cookie', JSON.stringify(cookieBlock))
      cookieBlock.style.display = 'none'
    })
  }
}

acceptCookie()