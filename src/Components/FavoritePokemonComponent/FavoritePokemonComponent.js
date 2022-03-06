import React from "react";
import PokeBalls from "./PokeBalls/PokeBalls";
import { NavLink } from "react-router-dom";

const FavoritePokemon = ({favePoke, grabid, deletedPoke}) => {
    const favPokemons = favePoke.map((poke, index) => {
      return(
        <div className='pokeContainer' key={index}> 
          <NavLink key={index + 1} to="/pokemon/singlePokemon" style={{ color: '#FFF', textDecoration: 'none' }}>
            <PokeBalls
              name={poke.name}
              key={index}
              grab={grabid}
              url={poke.url}
              />
          </NavLink>
            <div>
              <button className='deleteThatPokemon' onClick={() => deletedPoke(poke.name)}>Delete</button>
            </div>
          </div>
      )
    })
  return(
    <div className="poke-container">
      {favPokemons.length === 0  && <h1>Theres no pokemon in your pokedex!</h1>}
      {favPokemons}
    </div>

  )

}

export default FavoritePokemon;