const audio = document.getElementById('kameha')

const konamiCode = ['k', 'a', 'm', 'e', 'h', 'a']
let tryKC = []

document.addEventListener('keydown', (e) => {
  for (let i = 0; i < konamiCode.length; i++) {
    if (!tryKC[i] && konamiCode[i] === e.key) {
      tryKC.push(e.key)
      break
    } else if (tryKC[i] !== konamiCode[i]) {
      tryKC = []
      console.log('Konami code limpiado, el codigo es: "k a m e h a m e h a"')
      break
    }
  }
  if (konamiCode.join('') === tryKC.join('')) {
    audio.play()
    tryKC = []
  }
})