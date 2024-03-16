const toggleTheme = document.querySelectorAll('.toggleTheme')

// Recuperar el tema del localStorage
let theme = window.localStorage.getItem('theme')

console.log(theme)

// Si no hay un tema en el localStorage ver cual es el tema preferido del usuario en el navegador
if (!theme) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
    document.body.classList.add('dark')
  } else {
    theme = 'light'
    document.body.classList.remove('dark')
  }
  window.localStorage.setItem('theme', theme)
}

function setTheme () {
  if (theme === 'dark') {
    window.localStorage.setItem('theme', 'light')
  } else {
    window.localStorage.setItem('theme', 'dark')
  }
  theme = window.localStorage.getItem('theme')
}

// Funcion para cambiar el tema del navegador
function changeTheme() {
  if (theme === 'dark') {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}

// Al pulsar cualquier elemento que tenga la clase toggleTheme, cambiar el tema del navegador
toggleTheme.forEach((img) => {
  img.addEventListener('click', () => {
    setTheme()
    changeTheme()
  })
})

// Al cargar la página, cambiar el tema de la web
window.onload = changeTheme