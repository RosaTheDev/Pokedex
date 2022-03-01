import React from "react";

const PokeAPI = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
}

export default PokeAPI;