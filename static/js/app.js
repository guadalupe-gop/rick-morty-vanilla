// https://rickandmortyapi.com/api/character/2
import API from "./api.js";
const api = new API();

const $characterContainer = document.querySelector("#character-container");

// const characterTemplate = `
// <article class="character">
// <div class="character-grid">
//   <h2>Rick Sanchez</h2>
//   <img src="" alt="" />
// </div>
// </article>
// `;

class Character {
  constructor({ name, image }) {
    this.name = name;
    this.image = image;
    this.render();
  }
  build() {
    return `
      <article class="character">
    <div class="character-grid">
    <h2>${this.name}</h2>
    <img src=${this.image} alt="" />
    </div>
    </article>
      `;
  }
  render() {
    $characterContainer.innerHTML = this.build();
  }
}

// arracamos la app
async function initApp(initCharacter) {
  const characterData = await api.getCharacter(initCharacter);
  console.log(characterData);
  //   const rick = new Character(characterData);
  //   const rick = new Character({
  //     name: "pancho",
  //     img: "http://127.0.0.1:5500/static/images/rickandmorty.png",
  //   });
}
initApp(1);

// rick.render();
// console.log(api.getCharacter(3));
