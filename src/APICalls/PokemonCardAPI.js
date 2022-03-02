const PokemonCardAPI = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(response => response.json())
}

export default PokemonCardAPI;