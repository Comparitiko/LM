export class CharacterCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      .card {
        width: 200px;
      }

      :host(.dark) .card {
        background-color: red;
        color: #fff;
      }
    `
  }

  setIsDark(isDark) {
    if (isDark) this.classList.add('dark')
    else this.classList.remove('dark')
  }

  connectedCallback() {
    this.nombre = this.getAttribute('nombre') ?? 'Goku'
    this.img = this.getAttribute('img') ?? 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044374/hlpy6q013uw3itl5jzic.webp'
    this.raza = this.getAttribute('raza') ?? 'Saiyan'
    this.ki = this.getAttribute('ki') ?? '60.000.000'
    if (this.ki === 'unknown') this.ki = 'Desconocido'
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          ${this.styles}
        </style>
        <article class="card">
          <h1>${this.nombre}</h1>
          <img class="card-image" src="${this.img}" width="200px" alt="Imagen de ${this.nombre}">
          <h2 class="card-ki">Ki: ${this.ki}</h2>
          <a class="card-race" href="./raza/${this.raza}">${this.raza}</a>
        </article>
      `
  }
}

customElements.define("character-card", CharacterCard);