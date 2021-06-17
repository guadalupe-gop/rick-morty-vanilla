// https://rickandmortyapi.com/api/character/2
import API from "./api.js";
import Character from "./character.js";
const api = new API();
let currenCharacter = 4;

const $loadNext = document.querySelector("#load-next");

$loadNext.addEventListener("click", async () => {
  const characterData = await api.getCharacter(++currenCharacter);
  console.log(characterData);
  new Character(characterData);
});

// arracamos la app
async function initApp(initCharacter) {
  const characterData = await api.getCharacter(initCharacter);
  console.log(characterData);
  new Character(characterData);

  //   const rick = new Character({
  //     name: "pancho",
  //     img: "http://127.0.0.1:5500/static/images/rickandmorty.png",
  //   });
}
initApp(currenCharacter);

// rick.render();
// console.log(api.getCharacter(3));
