
const PokeAPI = (offset) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=21`)
    .then(response => response.json())
    .catch(error => console.log(error))
}

export default PokeAPI;