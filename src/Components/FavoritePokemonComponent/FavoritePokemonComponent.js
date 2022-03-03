import React from "react";
import PokeBalls from "./PokeBalls/PokeBalls";
import { NavLink } from "react-router-dom";

const FavoritePokemon = ({favePoke, grabid}) => {
  console.log(favePoke)
    const favPokemons = favePoke.map((poke, index) => {
      return(
        <div className='pokeContainer'>
          <NavLink key={index + 1} to="/pokemon/singlePokemon" style={{ color: '#FFF', textDecoration: 'none' }}>
            <PokeBalls
              name={poke.name}
              url={poke.url}
              id={index+1}
              grab={grabid}
              key={index}
              />
          </NavLink>
            <div>
              <button>Delete</button>
            {/* <img src="https://c.tenor.com/ihqN6a3iiYEAAAAd/pikachu-shocked-face-stunned.gif" height={70} width={80}/> */}
            </div>
          </div>
      )
    })
  return(
    <div className="poke-container">
      {favPokemons}
    </div>

  )

}

export default FavoritePokemon;