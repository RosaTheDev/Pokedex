import React from "react";

const PokemonCard = ({pokeInfo, pokeImage}) => {
  console.log(pokeInfo)
  return(
    <div>
    <h1>Name: {pokeInfo.name}</h1>
        <h1>Height: {pokeInfo.height} ft</h1> 
        <h1>Weight: {pokeInfo.weight} lbs</h1>
        <img src={pokeImage} alt='a wild pokemon'/>

       <div>
        <p>HP: {pokeInfo.stats[0].base_stat}</p>
        <p>Attack: {pokeInfo.stats[1].base_stat}</p>
        <p>Defense: {pokeInfo.stats[2].base_stat}</p>
      </div>

      {/* <div>
        <p>Type: {pokeInfo.types[0].type.name}</p>
      </div> */} 
    </div>
  )
}

export default PokemonCard;