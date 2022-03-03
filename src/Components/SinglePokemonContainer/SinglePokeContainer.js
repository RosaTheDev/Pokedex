import React from "react";
import './SinglePokeContainer.css';

const SinglePokeContainer = ({pokemonInfo}) => {
  console.log({pokemonInfo})
  return(
    <div className='singlePokemon'>
      <h1>hello world</h1>
      <h1>Name: {pokemonInfo.name}</h1>
       <img src={pokemonInfo.sprites.other.dream_world.front_default} alt="a pokemon"/>
      <p>Type:{pokemonInfo.types[0].type.name}</p>
     </div>
  )
}

export default SinglePokeContainer;