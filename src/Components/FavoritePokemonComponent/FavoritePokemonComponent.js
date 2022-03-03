import React from "react";
import PokeBalls from "./PokeBalls/PokeBalls";

const FavoritePokemon = ({favePoke}) => {
  console.log(favePoke)
    const favPokemons = favePoke.map((poke, index) => {
      return(
        <PokeBalls 
          name={poke.name}
          key={index}
        />
      )
    })
  return(
    <div>
      <h1>this is my favoriote pokemon page</h1>
      {favPokemons}

    </div>

  )

}

export default FavoritePokemon;