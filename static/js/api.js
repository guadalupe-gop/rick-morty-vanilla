export default class API {
  async getCharacter(id) {
    // fetch("https://rickandmortyapi.com/api/character/2");
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    return data;
    // .then((response) => response.json())
    //   .then((data) => data);
  }
}

const api = new API();
