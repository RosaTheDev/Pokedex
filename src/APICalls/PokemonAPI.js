
const PokeAPI = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=21')
    .then(response => response.json())
}

export default PokeAPI;