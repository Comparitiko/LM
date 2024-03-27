export const fecthURL = async (url) => {
  try {
    const res = await fetch(url)
    return res.json()
  } catch (error) {
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
}

writeData()