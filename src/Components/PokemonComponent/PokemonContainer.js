import React from "react";
import './PokemonContainer.css';
import PokemonDisplays from './PokemonDisplays/PokemonDisplays'
import { NavLink } from "react-router-dom";

const PokeContainer = ({pokemons, grabid, pokeball, changeOffset}) => {
  const PokemonDisplay = pokemons.map((pokemon, index) => {
    return(
      <div className={pokemon.name} key={index}>
        <NavLink className={pokemon.name} key={pokemon.name} to="/pokemon/singlePokemon" style={{ color: '#FFF', textDecoration: 'none' }}>
        <PokemonDisplays
          name={pokemon.name}
          key={index}
          id={index+1}
          grab={grabid}
          url={pokemon.url}
          />
        </NavLink>
          <img onClick={() => pokeball(pokemon.name)} className='pokeball' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" alt="pokeball" />
      </div>
    )
  })
  return(
    <div className="poke-container">
      {PokemonDisplay}
      <button onClick={() => changeOffset()}>add more!</button>
    </div>
  )
}


export default PokeContainer;