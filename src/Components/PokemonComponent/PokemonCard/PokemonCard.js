import React from "react";
import './PokemonCard.css'

const PokemonCard = ({name, id, grab, url}) => {

  return(
    <div onClick={() => grab(url)} className="pokemon-card" id={id} >
      <p>Name: {name} </p>
      <p>Id: {id}</p>

    </div>
  )
}
export default PokemonCard