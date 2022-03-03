import React from "react";

const PokeBalls = ({name, url, grab, id}) => {
  return(
    <div onClick={() => grab(url)} className="pokemon-card" >
      <p>Name: {name} </p>
      <p>Id: {id}</p>

    </div>
  )

}

export default PokeBalls;