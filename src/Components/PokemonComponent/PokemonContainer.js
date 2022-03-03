import React from "react";
import './PokemonContainer.css';
import PokemonCard from './PokemonCard/PokemonCard'
import { NavLink } from "react-router-dom";

const PokeContainer = ({pokemons, grabid, pokeball, changeOffset}) => {
  // console.log(pokemons[0])
  const PokemonCards = pokemons.map((pokemon, index) => {
    return(
      <div key={index+1}>
        <PokemonCard
          name={pokemon.name}
          key={index}
          id={index+1}
          grab={grabid}
          />
          <img onClick={() => pokeball(index)} className='pokeball' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" alt="pokeball" />
        </div>
    )
  })
  return(
    <div className="poke-container">
      {PokemonCards}
      <button onClick={() => changeOffset()}>add more!</button>
    </div>
  )
}

//to={'/pokemon/name'} style={{color: '#FFF', textDecoration: 'none'}}

export default PokeContainer;