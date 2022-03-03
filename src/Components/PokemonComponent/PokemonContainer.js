import React from "react";
import './PokemonContainer.css';
import PokemonCard from './PokemonCard/PokemonCard'
import { NavLink } from "react-router-dom";

const PokeContainer = ({pokemons, grabid, pokeball, changeOffset}) => {
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
    <NavLink className="poke-container" to={'/pokemon/singlePokemon'} style={{color: '#FFF', textDecoration: 'none'}}>
      {PokemonCards}
      <button onClick={() => changeOffset()}>add more!</button>
    </NavLink>
  )
}

export default PokeContainer;