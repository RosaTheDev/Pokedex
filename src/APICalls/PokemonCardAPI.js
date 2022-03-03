const PokemonCardAPI = (url) => {
  return fetch(url)
  .then(response => response.json())
}

export default PokemonCardAPI;