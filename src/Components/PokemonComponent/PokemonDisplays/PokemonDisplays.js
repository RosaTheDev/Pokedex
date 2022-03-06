import React from "react";
import './PokemonDisplays.css'

const PokemonDisplays = ({name, id, grab, url}) => {

  return(
    <div onClick={() => grab(url)} className="pokemon-card" id={id} >
      <p>Name: {name} </p>
      <p>Id: {id}</p>
    </div>
  )
}
export default PokemonDisplays