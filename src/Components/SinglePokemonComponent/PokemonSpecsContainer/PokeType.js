import React from "react";

const PokeType = ({pokeType}) => {
  console.log(pokeType[0].type.name)
 return (
  <h1>Type: {pokeType[0].type.name}</h1>
 )
}

export default PokeType;