import React from "react";
import './PokemonCard.css'

const PokemonCard = ({name, id, grab}) => {

  return(
    <div onClick={() => grab(id)} className="pokemon-card" id={id} >
      <p>Name: {name} </p>
      <p>Id: {id}</p>
    </div>
  )
}
export default PokemonCard