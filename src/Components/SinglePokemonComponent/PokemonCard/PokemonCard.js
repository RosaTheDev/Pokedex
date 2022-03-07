import React from "react";
import PropTypes from 'prop-types';
import './PokemonCard.css'

const PokemonCard = ({pokeInfo, pokeImage}) => {
  console.log(typeof pokeInfo)
  return(
    <div className={pokeInfo.types[0].type.name}>
      <h1 className="PokemonCard">Name: {pokeInfo.name}</h1>
        <h1 className="PokemonCard">Height: {pokeInfo.height} ft</h1> 
        <h1 className="PokemonCard">Weight: {pokeInfo.weight} lbs</h1>
        <img src={pokeImage} alt='a wild pokemon'/>

       <div>
        <p className="PokemonCard">HP: {pokeInfo.stats[0].base_stat}</p>
        <p className="PokemonCard">Attack: {pokeInfo.stats[1].base_stat}</p>
        <p className="PokemonCard">Defense: {pokeInfo.stats[2].base_stat}</p>
      </div>

      <div>
        <p className="PokemonCard">Type: {pokeInfo.types[0].type.name}</p>
      </div> 
    </div>
  )
}

export default PokemonCard;
PokemonCard.propTypes = {
  pokeInfo: PropTypes.object,
  pokeImage: PropTypes.string
}