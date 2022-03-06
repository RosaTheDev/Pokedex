import React from "react";

const PokeBalls = ({name, url, grab}) => {
  return(
    <div onClick={() => grab(url)} className="pokemon-card" >
      <p>Name: {name} </p>
    </div>
  )

}

export default PokeBalls;