const main = document.getElementById('mainContainer')

const fecthURL = async (url) => {
  try {
    const data = await fetch(url)
    if (!data.ok) throw new Error
    const res = data.json()
    if (!res) throw new Error
    else return res
  } catch (e) {
    return null
  }
}

const getURLToFetch = () => {

}

const getURLPath = () => {
  const rawPathArr = window.location.pathname.split('/')
  const path = rawPathArr.slice(rawPathArr.length - 1)[0].split('.')[0]
  console.log(path)
}

const writeData = async () => {
  getURLPath()
  const data = await fecthURL('https://dragonball-api.com/api/characters')
  let html = ''
  data.items.map(item =>{
    html += `
      <section class="card">
          <h5 class="card-title">${item.name}</h5>
          <img class="card-image" src="${item.image}" width="200px" alt="Imagen de ${item.name}">
          <p class="card-desc">raza: ${item.race}</p>
      </section>
    `
  })
  main.innerHTML = `${html}`
}

writeData()