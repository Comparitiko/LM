export class CharacterCard extends HTMLElement {
  constructor() {
    super()
    this.nombre = this.getAttribute('nombre')
    this.img = this.getAttribute('img')
    this.raza = this.getAttribute('raza')
    this.ki = this.getAttribute('ki')
    if (this.nombre === 'Zeno') this.raza = 'Zeno Sama'
    if (this.ki === 'unknown') this.ki = 'Desconocido'
    this.render()
  }

  render() {
    this.innerHTML = `
        <article class="card">
          <h1>${this.nombre}</h1>
          <img class="card-image" src="${this.img}" alt="Imagen de ${this.nombre}">
          <h2 class="card-ki">Ki: ${this.ki}</h2>
          <a class="card-race ${this.raza.split(' ').slice(0, 1).join('').toLowerCase()}" href="./raza/${this.raza.split(' ').join('-')}">${this.raza}</a>
        </article>
      `
  }
}

customElements.define("character-card", CharacterCard)