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
  pokeInfo: PropTypes.objectOf(PropTypes.shape({
    abilities: PropTypes.array,
    base_experience: PropTypes.number,
    forms: PropTypes.array,
    game_indicies: PropTypes.array,
    height: PropTypes.number,
    id: PropTypes.number,
    is_default: PropTypes.boolean,
    location_area_encounters: PropTypes.strings,
    moves: PropTypes.array,
    name: PropTypes.string,
    order: PropTypes.number,
    past_types: PropTypes.array,
    species: PropTypes.objectOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })),
    sprites: PropTypes.objectOf(PropTypes.shape({
      back_default: PropTypes.string,
      back_female: PropTypes.string,
      back_shiny: PropTypes.string,
      back_shiny_female: PropTypes.string,
      front_default: PropTypes.string,
      front_female: PropTypes.string,
      front_shiny: PropTypes.string,
      front_shiny_female: PropTypes.string,
      other: PropTypes.objectOf(PropTypes.shape({
        dream_world: PropTypes.objectOf(PropTypes.shape({
          front_default: PropTypes.string,
          front_female: PropTypes.null
        })),
        home: PropTypes.objectOf(PropTypes.shape({
          front_default: PropTypes.string,
          front_female: PropTypes.string,
          front_shiny: PropTypes.string,
          front_shiny_female: PropTypes.string
        })),
        offical_artwork: PropTypes.objectOf(PropTypes.shape({
          front_default: PropTypes.string,
        }))
      })),
      versions: PropTypes.object
    })),
    stats: PropTypes.array,
    types: PropTypes.arary,
    weight: PropTypes.number
  })),
  pokeImage: PropTypes.string
}