class CharacterCard extends HTMLElement {
  constructor(nombre, img, raza) {
    super()
    this.nombre = nombre
    this.img = img
    this.raza = raza
    this.attachShadow({ mode: "open" });
  }

  get Styles() {
    if (this.raza === 'humano') {
      return {`
      a {
        color: white;
        text-decoration: none;
      }
      `}
  }
}

connectedCallback() {
  this.render()
}

render() {
  this.ShadowRoot.innerHTML = `
        <style>${this.getStyles}</style>
        <article class="card">
          <h1>${this.nombre}</h1>
          <img class="card-image" src="${this.img}" width="200px" alt="Imagen de ${this.nombre}">
          <h2 class="card-race">Raza: ${this.raza}</h2>
        </article>
      `
}
}

customElements.define("character-card", CharacterCard);