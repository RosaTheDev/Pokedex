import React from "react";

const PokemonCard = ({pokeInfo, pokeImage}) => {
  return(
    <div>
    <h1>Name: {pokeInfo.name}</h1>
        <h1>Height: {pokeInfo.height} ft</h1> 
        <h1>Weight: {pokeInfo.weight} lbs</h1>
        <img src={pokeImage} alt='a wild pokemon'/>
    </div>
  )
}

export default PokemonCard;