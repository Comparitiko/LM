import './components/CharacterCard.js'
import { fecthURL } from './scripts/fetchData.js'

const mainContainer = document.querySelector('#mainContainer')
const charactersContainer = document.querySelector('#characters')

let actualPage = window.localStorage.getItem('actualPage') ?? 1
let URL = `https://dragonball-api.com/api/characters?page=${actualPage}`

let data = await fecthURL(URL)

renderCards(data)

// Guardar numero de paginas de personajes de la API y la primera peticion
const pages = data.meta.totalPages

// Renderizar personajes con los datos devueltos por la API
async function renderCards(data) {
  charactersContainer.innerHTML = ''
  data.items.forEach((character) => {
    charactersContainer.innerHTML += `<character-card 
    nombre="${character.name}"
    img="${character.image}" 
    raza="${character.race}"
    ki="${character.ki}">
    </character-card>`
  })
}

// Creacion de div para botones y los propios botones
const buttons = document.createElement('div')
buttons.className = 'buttons'
mainContainer.appendChild(buttons)
for (let i = 1; i <= pages; i++) {
  const buttonPage = document.createElement('button')
  buttonPage.textContent = i
  buttonPage.className = 'button-page'
  buttons.appendChild(buttonPage)
}

document.querySelectorAll('.button-page').forEach((button) => {
  button.addEventListener('click', () => {
    URL = `https://dragonball-api.com/api/characters?page=${button.textContent}`
    window.localStorage.setItem('actualPage', button.textContent)
    fecthURL(URL).then((data) => {
      renderCards(data)
    })
  })
})
